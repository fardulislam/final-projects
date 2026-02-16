import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiossecure from "../../../Hook/useAxiossecure";
import { FiUserCheck } from "react-icons/fi";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = useAxiossecure();
  const { refetch, data: riders = [], isLoading } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status , email:rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider Status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const hendleApprove = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const hendleRejection = (rider) => {
    updateRiderStatus(rider,'rejected')
  };
  return (
    <div>
      <h2 className="text-4xl ">Riders pending Approval:{riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.RiderName}</td>
                <td>{rider.Email}</td>
                <td>{rider.District}</td>
                <td>
                  <p
                    className={`${rider.status === "approved" ? "text-green-500" : "text-red-500"}`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td className="">
                  <button
                    onClick={() => hendleApprove(rider)}
                    className="mr-2 btn btn-outline"
                  >
                    <FiUserCheck />
                  </button>
                  <button
                    onClick={() => hendleRejection(rider)}
                    className="mr-2 btn btn-outline"
                  >
                    <IoPersonRemoveOutline />
                  </button>
                  <button className="btn btn-outline">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRider;

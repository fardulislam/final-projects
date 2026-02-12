import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hook/UseAuth";
import useAxiossecure from "../../Hook/useAxiossecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Myparcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiossecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myparcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post('/payment-checkout-session',paymentInfo)
    window.location.assign(res.data.url)
  };
  return (
    <div>
      <h2>all of my parcels:{parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th> {index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.payment_status === "paid" ? (
                    <span className="text-green-400">paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary text-black btn-sm"
                    >
                      pay
                    </button>

                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                    //   <button className="btn btn-primary text-black btn-sm">pay</button>
                    // </Link>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square mx-2 hover:bg-primary">
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
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

export default Myparcels;

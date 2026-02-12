import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiossecure from "../../../Hook/useAxiossecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiossecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const hendlepayment = async () => {
    const paymentinfo = {
      cost: parcel.cost,
      pardelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post('/create-checkout-session',paymentinfo)
    console.log(res.data)
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h2>please pay for :{parcel.parcelName}</h2>
      <button onClick={hendlepayment} className="btn btn-primary text-black">
        pay
      </button>
    </div>
  );
};

export default Payment;

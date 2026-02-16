import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiossecure from "../../../Hook/useAxiossecure";

const PaymentSuccess = () => {
  const [searchparams] = useSearchParams();
  const [paymentinfo, setpaymentinfo] = useState({});
  const axiosSecure = useAxiossecure();
  const sessionId = searchparams.get("session_id");
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setpaymentinfo({
            transactionId: res.data.transactionId,
            trakingId: res.data.trakingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div>
      <h2 className="text-4xl">payment successful</h2>
      <p>Your TransactionId: {paymentinfo.transactionId}</p>
      <p>Your parcel TrackingId: {paymentinfo.trakingId}</p>
    </div>
  );
};

export default PaymentSuccess;

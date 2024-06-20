import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaymentVerify } from "../service/api";
import { Spinner } from "flowbite-react";

const Verify = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [receiptUrl, setReceiptUrl] = useState("");
  const success = params.get("success");
  const orderId = params.get("orderId");

  console.log(success, orderId, receiptUrl);

  // Verify payment function
  const verifyPayment = async () => {
    try {
      const res = await PaymentVerify(success, orderId);
      if (res.data.success) {
        setReceiptUrl(res.data.receipt_url);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/");
    }
  };

  // Function to download receipt
  const downloadReceipt = () => {
    const link = document.createElement("a");
    link.href = receiptUrl;
    link.setAttribute("download", `receipt-${orderId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  console.log("Receipt download:", downloadReceipt);

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="flex mx-auto mb-10">
      {/* <Spinner  className='size-8 text-center'/> */}
      {success === "true" ? (
        <div>
          <p>Your order was successful! Order ID: {orderId}</p>
          <button onClick={downloadReceipt}>Download Receipt</button>
        </div>
      ) : (
        <p>Your order was not successful. Please try again. Order ID: {orderId}</p>
      )}
    </div>
  );
};

export default Verify;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const OrdersPage = () => {

  const [data, setData] = useState<any>({});
  const [orderdate, setDate] = useState<any>("");
 
  
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  useEffect(() => {
    getOrder();
    let orderrdate = getDate();
    setDate(orderrdate);
  }, []);

  const getOrder = () => {
    const ordersString = window.localStorage.getItem("orders") || "";
    const shippingString = window.localStorage.getItem("shipping") || "";
    if (ordersString) {
      console.log("ordersString: ", ordersString);
      console.log("shippingString: ", shippingString);
      setData(JSON.parse(ordersString));
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">

          <thead>
            <tr>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Order Number</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Total</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Items</th>
              <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              data && 
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">{12345}</td>
                    <td className="py-4 px-6 border-b border-grey-light">{orderdate}</td>
                    <td className="py-4 px-6 border-b border-grey-light">£{data.totalPrice}</td>
                    <td className="py-4 px-6 border-b border-grey-light">{data.orderData && data.orderData.length}</td>
                    <td className="py-4 px-6 border-b border-grey-light">
                    <Link href="/order-details/12345" className="text-blue-500 hover:text-blue-800">View</Link>
                    </td>
                  </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;

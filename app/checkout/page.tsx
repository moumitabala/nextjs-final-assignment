"use client";
//import { useCart } from "@/components/context/cart";
import { useEffect, useState } from "react";
import { IProducts } from "@/lib/interface/products";
import { useRouter } from "next/navigation";

export interface IOrder {
    orderData: [],
    totalPrice: string,
    user: string
}

const Checkout = () => {

    const [data, setData] = useState<any>({});
    const [orderItem, setOrderItem] = useState<IProducts[]>([]);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    useEffect(() => {
        const ordersString = window.localStorage.getItem("orders") || "";

        if (ordersString) {
            console.log("ordersString: ", ordersString);
            setData(JSON.parse(ordersString));
        }
    }, []);

    useEffect(() => {
        if (data) {
            console.log("Data: ", data.orderData);
            setOrderItem(data.orderData);
        }
    }, [data]);

    const placeOrder = () =>{
        let shippingDetails = {
            "id": "12345",
            email,
            name,
            address
        }
        localStorage.setItem("shipping", JSON.stringify(shippingDetails));
        router.push('/orders');
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4 mr-2 bg-white p-5 shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                placeholder="John Doe"
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                  }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                placeholder="you@example.com"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Shipping Address</label>
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                placeholder="123 Main St"
                                required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                  }}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={placeOrder}>
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/4 ml-2 bg-white p-5 shadow-md">
                    <h3 className="text-xl font-bold mb-4">Your Order</h3>
                    {
                        orderItem &&
                        orderItem.map((item) => {

                            return (
                                <div className="mb-2">
                                    <span className="text-gray-600">{item.name} x {item.qty}</span>
                                    <span className="float-right">£{item.price}</span>
                                </div>
                            )
                        })
                    }


                    <div className="border-t mt-4">
                        <div className="flex justify-between mt-4">
                            <span className="font-bold text-lg">Total</span>
                            <span className="font-bold text-lg">£{data.totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

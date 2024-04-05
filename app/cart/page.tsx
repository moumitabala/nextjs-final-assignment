"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/context/cart";
import { useEffect, useState } from "react";
import { IProducts } from "@/lib/interface/products";
import { useRouter } from "next/navigation";

const CartPage = () => {
  //const { items } = useCart();
  const { removeFromCart } = useCart();
  const [removeItem, setRemove] = useState(false);

  const [data, setData] = useState<IProducts[]>([]);
  const router = useRouter();

  useEffect(() => {
    const cartString = window.localStorage.getItem("cart") || "";
    if (cartString) {
      setData(JSON.parse(cartString) as IProducts[]);
    }
  }, []);

  const totalPrice = data.reduce((accu, curr) => {
    return accu + curr.price;
  }, 0);

  // const tax = (totalPrice / 100) * 15;

  // const grandTotal = totalPrice + tax;

  const doCheckout = () => {
    // const response = await fetch("http://localhost:4000/orders", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     data,
    //     totalPrice,
    //     user: "moumita@example.com",
    //   }),
    // });

    // const json = await response.json();

    let orderItem = {
      orderData: data,
      totalPrice,
      user: "moumita@example.com"
    }

    localStorage.setItem("orders", JSON.stringify(orderItem));

    //alert("Order placed");

    router.push('/checkout');
  };

  useEffect(() => {
    if (removeItem) {
      const cartString = window.localStorage.getItem("cart") || "";
      let items = cartString ? JSON.parse(cartString) : [];
      setData(items);
      setRemove(false);
    }
  }, [removeItem]);

  const removecart = () => {
    setRemove(true);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{data && data.length} Items</h2>
          </div>

          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Remove</h3>
          </div>

          {data.length != 0 && data.map((product) => {
            return (
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <Image
                      width={100}
                      height={100}
                      src="https://via.placeholder.com/100x100"
                      alt="Product Name"
                      className="h-24"
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.name}</span>
                    <span className="text-red-500 text-xs">Product Category</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => {
                      removecart();
                      removeFromCart(product);
                    }}>Remove</a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <input className="mx-2 border text-center w-8" type="text" value={product.qty} />
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">£{product.price}</span>
                <div className="flex justify-center w-1/5">
                  <button className="fill-current text-gray-500 w-4"
                    onClick={() => {
                      removecart();
                      removeFromCart(product);
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <div className="flex items-center">
              <i className="fa fa-arrow-left text-sm pr-2"></i>
              <Link href="/product-list" className="text-md font-medium text-indigo-500">
                Continue Shopping
              </Link>
            </div>
            {
              data.length != 0 &&
              <>
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray
                        -900">Subtotal:</span>
                  <span className="text-lg ml-3 font-bold text-gray-900">£{totalPrice}</span>
                </div>
                <div className="flex">
                  <button onClick={doCheckout} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
                </div>
              </>
            }
          </div>


          {
            data.length == 0 &&
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Empty cart !!</h3>

            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CartPage;

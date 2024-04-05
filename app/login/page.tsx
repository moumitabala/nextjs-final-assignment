"use client";

import { useRouter, redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login(e: any) {
    e.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const json = await response.json();
    //   router.push("/");
    // } catch (error) { }
    alert("Succefully Login:  "+ email);
    router.push("/");
  }
  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img className="object-cover w-full h-full" src="login-image-url.jpg" alt="Login" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Login to Your Account</h1>
              <form onSubmit={login}>
                <div>
                  <label className="block text-sm">Email</label>
                  {/* <input type="email" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="name@example.com" /> */}
                  <input
                    type="email"
                    className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm">Password</label>
                  {/* <input type="password" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="***************" /> */}
                  <input
                    type="password"
                    className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="***************"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="mt-6">
                  <button type="button" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300" onClick={login}>
                    Log in
                  </button>
                </div>
              </form>

              <p className="mt-4 text-xs text-center text-gray-600">
                Don't have an account? <Link href="/register" className="text-indigo-600 hover:underline">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

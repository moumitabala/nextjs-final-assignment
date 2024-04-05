"use client";

import { useRouter, redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const router = useRouter();

    async function register(e: any) {
        e.preventDefault();
        if (password == conpassword) {
            // try {
            //   const response = await fetch("http://localhost:3000/api/register", {
            //     method: "POST",
            //     body: JSON.stringify({ name, email, password }),
            //   });
            //   const json = await response.json();
            //   router.push("/");
            // } catch (error) { }
            alert("Welcome  " + name + "!!");
            router.push("/login");
        } else {
            console.log("ERROR: Password didn't match");
        }
    }
    return (
        <div className="flex items-center min-h-screen bg-gray-100">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="registration-image-url.jpg" alt="Register" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Create Your Account</h1>
                            <form>
                                <div>
                                    <label className="block text-sm">Name</label>
                                    <input type="text" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="John Doe"
                                        required
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }} />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Email</label>
                                    <input type="email" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="name@example.com"
                                        required
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Password</label>
                                    <input type="password" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="***************"
                                        required
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }} />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Confirm Password</label>
                                    <input type="password" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="***************"
                                        required
                                        onChange={(e) => {
                                            setConPassword(e.target.value);
                                        }} />
                                </div>

                                <div className="mt-6">
                                    <button type="button" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300" onClick={register}>
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-xs text-center text-gray-600">
                                Already have an account? <Link href="/login" className="text-indigo-600 hover:underline">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
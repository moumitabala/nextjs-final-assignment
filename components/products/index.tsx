"use client";

import Link from "next/link";
import Image from "next/image";
import { IProducts } from "@/lib/interface/products";

export interface ProductsProps {
    productsDesc: IProducts;
    image: string;
    width?: number;
    height?: number;
    alt: string;
}

const Products = ({ productsDesc, image, width = 50, height = 48, alt }: ProductsProps) => {
    return (
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full bg-white shadow-sm rounded-md overflow-hidden">
                <div className="lg:h-48 md:h-36 w-full object-cover object-center">

                </div>
                {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="product-image-url.jpg" alt="product name"> */}
                {/* <Image
                            width={50}
                            height={48}
                            src={image}
                            alt={alt}
                            className="object-cover object-center w-full h-full block"
                        /> */}
                <div className="p-6">
                    <h2 className="text-base font-medium text-indigo-600 mb-1">{productsDesc.name}</h2>
                    <h1 className="text-lg font-semibold mb-3">{productsDesc.name}</h1>
                    <p className="leading-relaxed mb-3">{productsDesc.shortDesc}</p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={`/product-details/${productsDesc.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <span className="text-gray-600 ml-auto">£{productsDesc.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
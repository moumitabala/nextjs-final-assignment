"use client"
import Image from "next/image";
export interface BannerProps {
    image: string;
    width?: number;
    height?: number;
    alt: string;
}

const Banner = ({ image, width = 1200, height = 400, alt }: BannerProps) => {

    return (
        <div className="bg-indigo-600">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white">Seasonal Sale</h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">Check out our latest collection on sale this season. Don't miss out on our best prices!</p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a href="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"> Shop Now </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <Image
                            width={width}
                            height={height}
                            src={image}
                            alt={alt}
                            className="rounded w-full"
                        /></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

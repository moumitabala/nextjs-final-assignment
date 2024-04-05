import Image from "next/image";
import { IProducts } from "@/lib/interface/products";
import AddToCart from '@/components/add-to-cart';

const ProductDetails = async ({ params }: any) => {

    const response = await fetch(`http://localhost:4000/products/${params.id}`);
    let products: IProducts = await response.json();

    products.qty = 1;

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="md:flex-shrink-0">
                    {/* <img className="rounded-lg md:w-56" src="product-image-url.jpg" alt="Product Name"> */}
                    <Image
                        width={100}
                        height={100}
                        src="https://via.placeholder.com/100x100"
                        alt="Product Name"
                        className="rounded-lg md:w-56"
                    />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                    <h1 className="text-xl font-bold text-gray-900">{products.name}</h1>
                    <p className="mt-2 text-gray-600">{products.description}.</p>
                    <div className="mt-3">
                        <span className="text-gray-500">Price:</span>
                        <span className="ml-1 text-gray-900 font-bold">£{products.price}</span>
                    </div>
                    <input type="text" value={products.qty} name="qty"/>
                    <AddToCart products ={products} />

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
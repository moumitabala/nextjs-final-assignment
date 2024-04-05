"use client"
import { IProducts } from "@/lib/interface/products";
import { useCart } from "../context/cart";

export interface IProductsProps {
    products: IProducts;
  }

const AddToCart = ({ products }: IProductsProps) => {

    const { addToCart } = useCart()

    return (
        <div className="mt-6">
            <button className="px-8 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700"
                onClick={() => {
                    addToCart(products);
                  }}>
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;

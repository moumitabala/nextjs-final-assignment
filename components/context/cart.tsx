"use client";

import { IProducts } from "@/lib/interface/products";
import { createContext, useContext, useEffect, useState } from "react";

export interface CartContext {
  items: IProducts[];
  addToCart(product: IProducts): void;
  removeFromCart(product: IProducts): void;
}

const CartContext = createContext<CartContext>({
  items: [],
  addToCart() { },
  removeFromCart() { },
});

const { Provider } = CartContext;

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<IProducts[]>([]);

  useEffect(() => {
    const cartString = window.localStorage.getItem("cart") || "";
    if (cartString) {
      setItems(JSON.parse(cartString) as IProducts[]);
    }
  }, []);

  const addToCart = (product: IProducts) => {
    const cartString = window.localStorage.getItem("cart") || "";
    if (cartString) {
      let items = JSON.parse(cartString);

      let itemIndex = items.filter((item: any) => item.id == product.id)[0]
      if (itemIndex) {
        itemIndex.qty++;
        const updateCart = [...items];
        setItems(updateCart);
        window.localStorage.setItem("cart", JSON.stringify(updateCart));
      } else {
        product.qty = 1;
        const updateCart = [...items, product];
        setItems(updateCart);
        window.localStorage.setItem("cart", JSON.stringify(updateCart));
      }
    } else {
      product.qty = 1;
      const updateCart = [...items, product];
      setItems(updateCart);
      window.localStorage.setItem("cart", JSON.stringify(updateCart));
    }
  };

  const removeFromCart = (product: IProducts) => {
    const cartString = window.localStorage.getItem("cart") || "";
    if (cartString) {
      let items = JSON.parse(cartString);
      items = items.filter((item: any) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(items));
      if (items.length === 0) {
        localStorage.removeItem("cart");
      }
    }
  };

  return (
    <Provider value={{ items, addToCart, removeFromCart }}>{children}</Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };

"use client"

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

export interface CartProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}


export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  totalCartPrice: number;
  totalCartQuantity: number;
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  deleteProduct: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  totalCartPrice: 0,
  totalCartQuantity: 0,
  toggleCart: () => { },
  addProduct: () => { },
  decreaseProductQuantity: () => { },
  increaseProductQuantity: () => { },
  deleteProduct: () => { },
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(!isOpen);
  const totalCartPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const totalCartQuantity = products.reduce((acc, product) => acc + product.quantity, 0);

  const addProduct = (product: CartProduct) => {
    const productIsAlredyOnCart = products.some(prevProduct => prevProduct.id === product.id);
    if (!productIsAlredyOnCart) {
      return setProducts([...products, product]);
    }
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity
          }
        }
        return prevProduct;
      }
      )
    })
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id === productId && prevProduct.quantity > 1) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity - 1
          }
        }
        return prevProduct;
      })
    })
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id === productId) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + 1
          }
        }
        return prevProduct;
      })
    })
  }

  const deleteProduct = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.filter(prevProduct => prevProduct.id !== productId);
    })
  }


  return <CartContext.Provider value={{
    isOpen,
    products,
    totalCartPrice,
    totalCartQuantity,
    toggleCart,
    addProduct,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProduct,
  }}>
    {children}
  </CartContext.Provider>
}
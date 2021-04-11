import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }
    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const stockProduct = await api
        .get<Stock>(`stock/${productId}`)
        .then((res) => res.data);

      const cartItem = cart.find((prod) => prod.id === productId);
      if (cartItem !== undefined) {
        if (cartItem.amount + 1 > stockProduct.amount) {
          toast.error("Quantidade solicitada fora de estoque");
        } else {
          const newCart = cart.map((item) =>
            item.id === productId
              ? { ...item, amount: cartItem.amount + 1 }
              : item
          );
          setCart(newCart);
          localStorage.setItem("@RocketShoes:cart", JSON.stringify(newCart));
        }
      } else {
        const product = await api
          .get<Product>(`products/${productId}`)
          .then((res) => res.data);

        const newCart = [...cart, { ...product, amount: 1 }];
        setCart(newCart);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(newCart));
      }
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const cartItem = cart.find((item) => item.id === productId);
      if (amount < 1 || cartItem === undefined) {
        toast.error("Erro na alteração de quantidade do produto");
      } else {
        const stockProduct = await api
          .get<Stock>(`stock/${productId}`)
          .then((res) => res.data);

        if (amount > stockProduct.amount) {
          toast.error("Quantidade solicitada fora de estoque");
        } else {
          const newCart = cart.map((item) =>
            item.id === productId ? { ...item, amount: amount } : item
          );
          setCart(newCart);
          localStorage.setItem("@RocketShoes:cart", JSON.stringify(newCart));
        }
      }
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const cartItem = cart.find((item) => item.id === productId);
      if (cartItem !== undefined) {
        const newCart = cart.filter((item) => item.id !== productId);
        setCart(newCart);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(newCart));
      } else {
        toast.error("Erro na remoção do produto");
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

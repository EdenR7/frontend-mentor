import { createContext, useContext, useState } from "react";

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  calculateTotalPrice: () => number;
  increaseItemQuantity: (name: string) => void;
  reduceItemQuantity: (name: string) => void;
  addNewItemToCart: (name: string, price: number) => void;
  getAllItems: () => number;
  removeItemFromCart: (name: string) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {},
  calculateTotalPrice: () => 0,
  increaseItemQuantity: () => {},
  reduceItemQuantity: () => {},
  addNewItemToCart: () => {},
  getAllItems: () => 0,
  removeItemFromCart: () => {},
});

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function calculateTotalPrice() {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }
  function increaseItemQuantity(name: string) {
    setCartItems((prevItems) => {
      return prevItems.map((item: CartItem) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      );
    });
  }
  function reduceItemQuantity(name: string) {
    setCartItems((prevItems) => {
      const newItems: CartItem[] = [];
      for (const cartItem of prevItems) {
        if (cartItem.name === name) {
          if (cartItem.quantity > 1) {
            newItems.push({
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalPrice: cartItem.price * (cartItem.quantity - 1),
            });
          }
        } else {
          newItems.push(cartItem);
        }
      }
      return newItems;
    });
  }
  function addNewItemToCart(name: string, price: number) {
    setCartItems((prevItems) => [
      ...prevItems,
      { name, quantity: 1, price, totalPrice: price },
    ]);
  }
  function removeItemFromCart(name: string) {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  }

  function getAllItems() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        calculateTotalPrice,
        increaseItemQuantity,
        reduceItemQuantity,
        addNewItemToCart,
        getAllItems,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartCtx() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
}

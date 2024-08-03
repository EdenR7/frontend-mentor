import { CartItem, useCartCtx } from "../Cart.context";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export interface CartSummaryItemProps {
  cartItem: CartItem;
}

export function CartSummaryItem({ cartItem }: CartSummaryItemProps) {
  const { removeItemFromCart } = useCartCtx();

  return (
    <li className=" py-2 flex justify-between items-center">
      <div className=" space-y-1">
        <h3 className=" text-sm font-custom_med text-clr_rose_900">
          {cartItem.name}
        </h3>
        <div className=" flex gap-4 text-sm">
          <span className=" text-clr_red font-custom_med">
            {cartItem.quantity}x
          </span>
          <p className=" text-clr_rose_300 font-custom_med">
            <span>@ </span>
            <span>${cartItem.price.toFixed(2)}</span>
          </p>
          <span className=" text-clr_rose_500 font-custom_med">
            ${cartItem.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        className=" transition-colors group border rounded-full h-4 w-4 flex items-center justify-center border-clr_rose_300 hover:border-clr_rose_900"
        onClick={() => {
          removeItemFromCart(cartItem.name);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          className=" fill-clr_rose_300 group-hover:fill-clr_rose_900 transition-colors"
          viewBox="0 0 10 10"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </li>
  );
}

interface CartSummaryProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartSummary({ setOpenModal }: CartSummaryProps) {
  const { getAllItems, cartItems, calculateTotalPrice } = useCartCtx();

  const totalItems = getAllItems();

  return (
    <article className=" bg-white p-5 pb-6 rounded-lg space-y-2 max-h-fit mx-auto max-w-96">
      <h2 className=" text-xl font-custom_bold text-clr_red">
        Your Cart ({totalItems})
      </h2>
      <div>
        {totalItems > 0 ? (
          <ul>
            {cartItems.map((cartItem) => {
              return (
                <div key={cartItem.name}>
                  <CartSummaryItem cartItem={cartItem} />
                  <Separator />
                </div>
              );
            })}
          </ul>
        ) : (
          <img
            className=" mx-auto"
            src="../assets/images/illustration-empty-cart.svg"
            alt=""
          />
        )}
      </div>
      <footer className=" text-center text-clr_rose_500 text-sm">
        {totalItems > 0 ? (
          <div>
            <p className=" py-4 flex items-center justify-between">
              <span className=" font-custom_med ">Order Total</span>
              <span className=" text-xl text-clr_rose_900 font-custom_bold">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </p>
            <div className=" flex justify-center items-center gap-2 bg-clr_rose_100 py-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>{" "}
              <p className=" text-clr_rose_900">
                This is a{" "}
                <span className=" text-clr_rose_900 font-custom_bold">
                  carbon-neutral
                </span>{" "}
                delivery
              </p>
            </div>
          </div>
        ) : (
          <p className=" font-custom_med mb-2">
            Your added items will appear here
          </p>
        )}
      </footer>

      {totalItems > 0 && (
        <Button
          variant={"primary"}
          className=" w-full rounded-full py-6 bg-clr_red text-clr_rose_50 hover:bg-[hsl(14_86%_32%)]"
          onClick={() => setOpenModal(true)}
        >
          Confirm Order
        </Button>
      )}
    </article>
  );
}

export default CartSummary;

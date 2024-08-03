import { useCartCtx } from "../Cart.context";
import { DessertI } from "../constants";

interface ChangeQuantityBtnProps {
  dessert: DessertI;
}
function ChangeQuantityBtn({ dessert }: ChangeQuantityBtnProps) {
  const { cartItems, increaseItemQuantity, reduceItemQuantity } = useCartCtx();

  const dessertQuantity = cartItems.find(
    (item) => item.name === dessert.name
  )?.quantity;

  return (
    <div className=" w-[148px] z-10  absolute bottom-[-20px] left-1/2 py-2 -translate-x-1/2 px-4 text-clr_rose_50 flex justify-between  gap-1 bg-clr_red rounded-full">
      <button
        className=" "
        onClick={() => {
          reduceItemQuantity(dessert.name);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          className=" border h-5 w-5 p-1 rounded-full fill-clr_rose_50 hover:fill-clr_red hover:bg-clr_rose_50 "
          height="2"
          viewBox="0 0 10 2"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span>{dessertQuantity}</span>
      <button
        className=" text-clr_rose_50 "
        onClick={() => {
          increaseItemQuantity(dessert.name);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          className=" border h-5 w-5 p-1 rounded-full fill-clr_rose_50 hover:fill-clr_red hover:bg-clr_rose_50 "
          viewBox="0 0 10 10"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      </button>
    </div>
  );
}

export default ChangeQuantityBtn;

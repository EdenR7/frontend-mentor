interface AddToCartBtnProps {
  onClickfunc: () => void;
}

function AddToCartBtn({ onClickfunc }: AddToCartBtnProps) {
  return (
    <button
      onClick={onClickfunc}
      className=" py-2 text-sm md:text-base w-[148px] absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-clr_rose_900 flex justify-center items-center font-custom_med gap-1 bg-background border-clr_rose_500 border rounded-full"
    >
      <img src="../assets/images/icon-add-to-cart.svg" alt="" />
      <span className=" hover:text-clr_red">Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;

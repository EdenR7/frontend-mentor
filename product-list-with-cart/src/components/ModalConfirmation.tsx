import { useCartCtx } from "../Cart.context";
import { dessertsData } from "../constants";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface ModalConfirmationProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalConfirmation({ setOpenModal }: ModalConfirmationProps) {
  const { cartItems, calculateTotalPrice } = useCartCtx();

  const confirmationCartItems = [];
  for (let index = 0; index < dessertsData.length; index++) {
    const dessert = dessertsData[index];
    const cartDessert = cartItems.find((item) => item.name === dessert.name);
    if (cartDessert) {
      confirmationCartItems.push({
        ...cartDessert,
        dessertImg: dessert.image.thumbnail,
      });
      console.log(confirmationCartItems);
    }
  }

  return (
    <>
      <div className=" fixed z-40 bg-black opacity-50 top-0 left-0 right-0 bottom-0"></div>
      <div className=" fixed rounded-md bg-clr_rose_50 w-full max-w-lg min-h-[50%] left-1/2 -translate-x-1/2 z-50 top-1/2 -translate-y-1/2 p-8 font-red-hat">
        <img src="../assets/images/icon-order-confirmed.svg" alt="" />
        <h1 className=" mt-4 mb-2 text-4xl font-custom_bold">
          Order Confirmed
        </h1>
        <p className=" text-clr_rose_400 font-custom_med text-[13px] mb-5">
          We hope you enjoy your food!
        </p>
        <div className=" bg-clr_rose_100 rounded-md px-4">
          <ul>
            {confirmationCartItems.map((item) => {
              return (
                <li>
                  <div className=" flex items-center justify-between py-4">
                    <div className=" flex gap-4">
                      <img
                        className=" h-12 rounded-md"
                        src={item.dessertImg}
                        alt=""
                      />
                      <div className="  justify-between flex flex-col ">
                        <h3 className=" font-custom_med">{item.name}</h3>
                        <div className=" flex gap-4">
                          <p className=" text-clr_red font-custom_med">
                            {item.quantity}x
                          </p>
                          <p className=" text-clr_rose_400">
                            <span className=" text-[12px]">@</span> $
                            {item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className=" text-lg font-custom_med ">
                      ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                  <Separator />
                </li>
              );
            })}
          </ul>
          <div className=" flex justify-between items-center py-6 text-clr_rose_900">
            <p className=" font-custom_med">Order Total</p>
            <p className=" text-2xl font-custom_bold">
              ${calculateTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>

        <Button
          variant={"primary"}
          className=" mt-6 py-6 w-full rounded-full text-clr_rose_50 font-custom_med bg-clr_red "
          onClick={() => setOpenModal(false)}
        >
          Start New Order
        </Button>
      </div>
    </>
  );
}

export default ModalConfirmation;

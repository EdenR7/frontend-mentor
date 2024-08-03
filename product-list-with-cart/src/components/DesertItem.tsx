import { DessertI } from "../constants";
import AddToCartBtn from "./AddToCartBtn";
import { useResizeWidth } from "../hooks";
import ChangeQuantityBtn from "./ChangeQuantityBtn";
import { useCartCtx } from "../Cart.context";

export interface DesertItemProps {
  dessert: DessertI;
}

function DesertItem({ dessert }: DesertItemProps) {
  const { cartItems } = useCartCtx();
  const { addNewItemToCart } = useCartCtx();
  const screenW = useResizeWidth();

  const isDesertSelected = cartItems.find((item) => item.name === dessert.name);

  let dessertImgSrc = dessert.image.mobile;
  if (screenW > 768) {
    dessertImgSrc = dessert.image.tablet;
  }
  if (screenW > 1024) {
    dessertImgSrc = dessert.image.desktop;
  }

  return (
    <li className="  overflow-hidden rounded-md gap-8 flex flex-col ">
      <div className=" relative">
        <img
          className={`z-10 rounded-md ${
            isDesertSelected && "border-clr_red border-2"
          }`}
          src={dessertImgSrc}
          alt=""
        />
        {isDesertSelected ? (
          <ChangeQuantityBtn dessert={dessert} />
        ) : (
          <AddToCartBtn
            onClickfunc={() => {
              addNewItemToCart(dessert.name, dessert.price);
            }}
          />
        )}
      </div>
      <div>
        <p className=" text-sm text-clr_rose_400 ">{dessert.category}</p>
        <h3 className=" font-custom_bold ">{dessert.name}</h3>
        <p className=" font-custom_bold text-clr_red">
          ${dessert.price.toFixed(2)}
        </p>
      </div>
    </li>
  );
}

export default DesertItem;

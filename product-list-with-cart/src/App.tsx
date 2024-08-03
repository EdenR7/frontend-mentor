import { useState } from "react";
import CartSummary from "./components/CartSummary";
import DesertItem from "./components/DesertItem";
import ModalConfirmation from "./components/ModalConfirmation";
import { dessertsData } from "./constants";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="font-red-hat p-4 text-clr_rose_900 w-full min-h-screen bg-clr_rose_50 md:p-8 lg:p-16 grid gap-6 md:grid-cols-[1fr_384px]">
        <div className=" flex flex-col min-w-full gap-6">
          <h1 className="text-3xl text-clr_rose_900 font-custom_bold text-left">
            Desserts
          </h1>
          <ul className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            {dessertsData.map((dessert) => {
              return <DesertItem key={dessert.name} dessert={dessert} />;
            })}
          </ul>
        </div>
        <div>
          <CartSummary setOpenModal={setOpenModal} />
        </div>
      </div>
      {openModal && <ModalConfirmation setOpenModal={setOpenModal} />}
    </>
  );
}

export default App;

import { useState } from "react";
import Card from "components/card";

const ProductCard = ({ title, price, image, extra }) => {
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-pink-100 ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />

        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-pink-700 dark:text-white">
              Precio: <span>$</span>{price} 
            </p>
          </div>
          <div flex justify-end className="grid grid-cols-2 gap-4">
          <button
            href=""
            className="linear rounded-[20px] bg-purple-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-purple-700 active:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-300 dark:active:opacity-90"
          >
            Editar
          </button>
          <button
            href=""
            className="linear rounded-[20px] bg-pink-700 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-pink-800 active:bg-pink-700 dark:bg-pink-400 dark:hover:bg-pink-300 dark:active:opacity-90"
          >
            Eliminar
          </button>
          </div>
          
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

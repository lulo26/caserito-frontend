import plimon from "assets/img/productos/plimon.jpg";
import ProductCard from "./components/ProductCard";

const Productos = () => {
  return (
    <div className="mt-3 h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Nuestros productos  <button
            href=""
            className="ml-5 linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Agregar Nuevo
          </button>
          </h4>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <ProductCard
            title="Postre de limón."
            price="8.000"
            image={plimon}
          />
        </div>
      </div>

    </div>
  );
};

export default Productos;

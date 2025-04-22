import plimon from "assets/img/productos/plimon.jpg";
import ProductCard from "./components/ProductCard";
import ModalProducto from "./components/ModalProducto";

const Productos = () => {
  return (
    <div className="mt-3 h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Nuestros productos <ModalProducto>  
               </ModalProducto>
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

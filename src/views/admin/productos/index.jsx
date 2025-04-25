import plimon from "assets/img/productos/plimon.jpg";
import ProductCard from "./components/ProductCard";
import ModalProducto from "./components/ModalProducto";

const Productos = () => {
  return (
    <div className="mt-3 h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          <ModalProducto/>        
        <div className="grid gap-5 md:grid-cols-3 mt-4">
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
import plimon from "assets/img/productos/plimon.jpg";
import ProductCard from "./components/ProductCard";
import ModalProducto from "./components/ModalProducto";


import { useState } from "react";
import axios from "axios";

const Productos = () => {
  const [response, setResponse] = useState([])
    const [pagina, setPagina] = useState()
    // Consumir api
    const leerApi = async()=>{
        let {data} = await axios.get('http://127.0.0.1:8000/api/producto')
        setResponse(data.data)
        setPagina(data.page)
        console.log(data);
        
    }
    // Crear registro
    const hacerPost = async()=>{
         let {data} = await axios.post('http://127.0.0.1:8000/api/producto',{
            name: 'waltuh',
            job: 'jugador'})
            setResponse(data.data)
    }
    // Actualizar registro
    const hacerPut = async ()=>{
        let {data} = await axios.put('http://127.0.0.1:8000/api/producto',{
            name: 'waltuh white',
            job: 'jugador de play'})
            setResponse(data.data)
    }
    // Eliminar registro
    const hacerBorrar = async ()=>{
        let {data} = await axios.delete('http://127.0.0.1:8000/api/producto')
        setResponse(data.data)
    }

    return (
      <>
      <button onClick={leerApi} className="rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            mostrar
        </button>
        {response.map((producto)=>{
            return (
                <div className="mt-3 h-full grid-cols-1 gap-5 xl:grid-cols-3 2xl:grid-cols-3">
                <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
                    <ModalProducto/>        
                  <div className="grid gap-5 md:grid-cols-3 mt-4">
                    <ProductCard
                      title={producto.nombre}
                      price={producto.precio}
                      image={plimon}
                    />
                  </div>
                </div>
              </div>
          )
          })}
      </>    
      )
};

export default Productos;
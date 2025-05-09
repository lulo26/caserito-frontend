import {
Modal,
ModalOverlay,
ModalContent,
ModalBody,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import CardHorizon from "../../../../components/card/CardHorizon"
import InputField from "../../../../components/input/InputField";
 
import { useState } from "react";
import axios from "axios";

const ModalProducto = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
const [response, setResponse] = useState([])
const [nombre, setNombre, descripcion, setDescripcion, precio, setPrecio, stock, setStock, imagen] = useState()

const crearProducto = async()=>{
  let {data} = await axios.post('http://127.0.0.1:8000/api/producto',{
     nombre: nombre,
     descripcion: descripcion,
     precio: precio,
     stock: stock,
     imagen: imagen
    })
     setResponse(data.data)
}
return (
 
<>
  <div onClick={onOpen}>
    <button className="linear bg-pink-600 hover:bg-pink-700 active:bg-pink-800 dark:bg-pink-400 dark:hover:bg-pink-300 dark:active:bg-pink-200 rounded-xl px-5 py-3 text-base font-medium text-white transition duration-200 dark:text-white">
      Agregar nuevo
    </button>
  </div>
  <Modal isOpen={isOpen} onClose={onClose} className="!z-[1010]">
    <ModalOverlay className="bg-[#000] !opacity-30" />
    <ModalContent className="!z-[1002] !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[12vh]">
      <ModalBody>
        <CardHorizon extra="px-[30px] pt-[35px] pb-[40px] max-w-[450px] flex flex-col !z-[1004]">
          <h1 className="mb-[20px] text-2xl font-bold">Agregar nuevo producto</h1>
          <div className="flex flex-col w-72 items-center">
          <div className="w-72">
            <InputField label="Nombre" type="text" name="nombre" value="nombre" onChangeText={(text) => setNombre(text)}/>
            <InputField label="Descripción" type="text" name="descripcion"/>
            <InputField label="Precio" type="number" name="precio"/>
            <InputField label="Cantidad" type="number" name="stock"/>
            <InputField label="Foto" type="file" name="imagen"/>
    </div>
    </div>
          <div className="flex gap-2 mt-5">
            <button
              onClick={onClose}
              className="linear rounded-xl border-2 border-red-500 px-5 py-3 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10"
            >
              Cerrar
            </button>
            <button onClick={crearProducto} className="linear text-navy-700 rounded-xl bg-pink-400 px-5 py-3 text-base font-medium transition duration-200 hover:bg-pink-500 active:bg-active dark:bg-white/10 dark:text-white text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              Guardar
            </button>
          </div>
        </CardHorizon>
      </ModalBody>
    </ModalContent>
  </Modal>
</>
); };
export default ModalProducto;
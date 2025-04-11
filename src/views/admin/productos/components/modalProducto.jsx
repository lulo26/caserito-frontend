import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    } from "@chakra-ui/modal";
    import { useDisclosure } from "@chakra-ui/hooks";
    import ProductCard from "./ProductCard";
     
    const ModalExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
     
    <>
    <button onClick={onOpen}
            href=""
            className="ml-5 linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Agregar Nuevo
          </button>
      <Modal isOpen={isOpen} onClose={onClose} className="!z-[1010]">
        <ModalOverlay className="bg-[#000] !opacity-30" />
        <ModalContent className="!z-[1002] !m-auto !w-max min-w-[350px] !max-w-[85%] md:top-[12vh]">
          <ModalBody>
            <ProductCard extra="px-[30px] pt-[35px] pb-[40px] max-w-[450px] flex flex-col !z-[1004]">
              <h1 className="mb-[20px] text-2xl font-bold">Modal Title</h1>
              <p className="mb-[20px]">
                A modal is a type of modal window with critical information which
                disable all app functionality when they appear and remains on screen
                until confirmed/dismissed.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={onClose}
                  className="linear rounded-xl border-2 border-red-500 px-5 py-3 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10"
                >
                  Close
                </button>
                <button className="linear text-navy-700 rounded-xl bg-gray-100 px-5 py-3 text-base font-medium transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                  Secondary
                </button>
              </div>
            </ProductCard>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    ); };

    export default ModalExample;
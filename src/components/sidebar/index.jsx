/* eslint-disable */
import logo from "assets/img/layout/logo.jpg"
import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[20px] mt-[20px] flex items-center`}>
      <img 
         className="h-20 w-20 rounded-full"
         src={logo} 
         alt="logo de la página" />
        <div className="ml-1 font-poppins text-[20px] font-bold uppercase text-navy-700 dark:text-white">
          Caserito <span class="font-medium">Postres</span>
        </div>
      </div>
      <div class="mt-[20px] mb-3 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;

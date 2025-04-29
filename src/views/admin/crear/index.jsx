import InputField from "components/fields/InputField";
import Card from "components/card";


export default function Crear() {
  return (
    <div className="mt-5 mb-16 flex h-full w-full items-center justify-center px-2 mx-0 px-0">
      {/* Sign in section */}
      <Card className="w-full pb-10 p-4 h-full bg-white max-w-[600px] rounded-xl">
      <div className="mt-[5vh] w-full max-w-full flex-col items-center pl-0 ">
        <h4 className="mb-2.5 text-4xl font-bold text-pink-900 dark:text-white">
          Crear Usuario
        </h4>
        
        <InputField
          variant="auth"
          extra="mb-3"
          label="Nombre*"
          placeholder="Nombre"
          id="nombre"
          type="text"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Apellidos*"
          placeholder="Apellidos"
          id="apellidos"
          type="text"
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Documento*"
          placeholder="Documento"
          id="documento"
          type="number"
        />
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Correo electrónico*"
          placeholder="correo@gmail.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Contraseña*"
          placeholder="******"
          id="password"
          type="password"
        />
        <button className="linear mt-2 w-full rounded-xl bg-pink-600 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-pink-700 active:bg-pink-800 dark:bg-pink-400 dark:text-white dark:hover:bg-pink-300 dark:active:bg-pink-200">
          Iniciar
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Ya tiene cuenta?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-pink-500 hover:text-pink-600 dark:text-white"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
      </Card>
    </div>
  );
}
import {
  columnsDataColumns,
} from "./variables/columnsData";

import tableDataColumns from "./variables/tableDataColumns.json";

import UsuariosTable from "./components/UsuariosTable";
import ModalUsuario from "./components/ModalUsuario";

const Tables = () => {
  return (
    <div>
      <div className="mt-5 h-full grid-cols-1">
        <div className="mb-4">
        <ModalUsuario/>
        </div>
        <UsuariosTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </div>
    </div>
  );
};

export default Tables;

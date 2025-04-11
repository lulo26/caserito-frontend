import {
  columnsDataColumns,
} from "./variables/columnsData";

import tableDataColumns from "./variables/tableDataColumns.json";

import UsuariosTable from "./components/UsuariosTable";


const Tables = () => {
  return (
    <div>
      <div className="mt-5 h-full grid-cols-1">
        <UsuariosTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </div>
    </div>
  );
};

export default Tables;

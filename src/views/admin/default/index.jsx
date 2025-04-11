import ProductosTable from "./components/ProductosTable";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";

import {
  columnsDataColumns,
} from "./variables/columnsData";

import tableDataColumns from "./variables/tableDataColumns.json";

const Dashboard = () => {
  return (
    <div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <PieChartCard />
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          <ProductosTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}/>
      </div>
    </div>
  );
};

export default Dashboard;

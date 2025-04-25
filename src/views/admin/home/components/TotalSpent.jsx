import React from "react";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <span className="text-sm font-medium text-gray-600">Ventas este día</span>
        </button>

      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-green-500">
            $0000
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Ayer</p>
            <div className="flex flex-row items-center justify-center">
              <p className="text-sm font-bold dark:text-white"> $0000 </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;

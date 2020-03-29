import React, { useContext } from "react";
import EmployeeBody from "./EmployeeBody";
// import "../styles/EmployeeTable.css";
import EmployeeAreaContext from "../utils/EmployeeAreaContext";

const EmployeeTable = () => {
  const context = useContext(EmployeeAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // context.handleSort(name.toLowerCase());
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <EmployeeBody />
      </table>
    </div>
  );
}

export default EmployeeTable;
import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const TodosTable = ({ dats }) => {
  return (
      <BootstrapTable
        data={dats}
        containerClass="my-container-class"
        headerClass="my-header-class"
        bodyclass="my-body-class"
      >
        <TableHeaderColumn dataField="id" isKey={true}>
          ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="text" dataSort={false}>
          App
        </TableHeaderColumn>
        <TableHeaderColumn dataField="createdAt" dataSort={true}>
          Create Date
        </TableHeaderColumn>
      </BootstrapTable>
  );
};

/**
 * propTypes
 * @property {string} dats data
 */

//QuotesTable.propTypes = {
// dats: React.PropTypes.array.isRequired
// };

export default TodosTable;

import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = (props) => {
  const { items, onLike, onDelete, onSort, sortColumn, columns } = props;

  return (
    <table className="table">
      <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
      <TableBody
        items={items}
        onLike={onLike}
        onDelete={onDelete}
        columns={columns}
      />
    </table>
  );
};

export default Table;

import React from "react";
import {
  Table,
  TableBody,
  TableHeader,

  TableRow,
  TableRowColumn
} from "material-ui/Table";
import EditIcon from "material-ui/svg-icons/image/edit";

import InlineForm from "./InlineForm";

const row = (
  x,
  i,
  header,

  startEditing,
  editIdx,
  handleSave,
  stopEditing
) => {
  const currentlyEditing = editIdx === i;
  return currentlyEditing ? (
    <TableRow key={`inline-form-${i}`} selectable={false}>
      <InlineForm
        handleSave={handleSave}
        header={header}
        x={x}
        i={i}
        stopEditing={stopEditing}
      />
    </TableRow>
  ) : (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
      ))}
      <TableRowColumn>
        <EditIcon onClick={() => startEditing(i)} />
        
      </TableRowColumn>
    </TableRow>
  );
};

export default ({
  data,
  header,
 
  startEditing,
  editIdx,
  handleSave,
  stopEditing,

}) => (
    <div>
        
        {data.map((x, i) =>
        row(
          x,
          i,
          header,
          startEditing,
          editIdx,
          handleSave,
          stopEditing
        )
      )}
    </div>
      
    
);
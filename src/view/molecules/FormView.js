import { Box, Typography } from "@mui/material";
import { Document, Page } from "react-pdf";
import { BoxView } from "../molecules";
import { useState } from "react";

export default function FormView({ form }) {
  const onDocumentLoadSuccess = function (e) {};

  const [xy, setXY] = useState(undefined);

  const onMouseDown = function (e) {
    const x2 = e.clientX;
    const y2 = e.clientY;

    if (xy !== undefined) {
      const [x1, y1] = xy;
      console.debug(
        `new DataField("unknown", [new Box([${x1}, ${y1}], [${x2}, ${y2}])]),`
      );
    }
    setXY([x2, y2]);
  };

  return (
    <Box>
      <Typography variant="h6">{form.name}</Typography>
      <Document
        file={form.pdfURL}
        onLoadSuccess={onDocumentLoadSuccess}
        onMouseDown={onMouseDown}
      >
        <Page pageNumber={1} />
      </Document>
      {form.dataFieldList.map(function (dataField, iDataField) {
        return dataField.boxList.map(function (box, iBox) {
          const key = `box-${iDataField}-${iBox}`;
          return <BoxView key={key} box={box} />;
        });
      })}
      ;
    </Box>
  );
}

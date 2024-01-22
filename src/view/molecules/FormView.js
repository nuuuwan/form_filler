import { Box, Typography } from "@mui/material";
import { Document, Page } from "react-pdf";

export default function FormView({ form }) {
  console.debug(form.pdfURL);

  const onDocumentLoadSuccess = function (e) {};

  const onMouseDown = function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.debug({ x, y });
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
    </Box>
  );
}

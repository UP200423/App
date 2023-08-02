import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadPDF = async (tabla, cells, id) => {
  var doc = new jsPDF("p", "cm", [8, 25]);
  // var htmlstring = '';
  doc.setDrawColor(0);
  doc.setFillColor(118, 132, 143);
  doc.rect(0.2, 0.2, 7.5, 2.3, "FD"); //Fill and Border
  doc.setFontSize(12);
  const fechaActual = new Date();
  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const fechaYHoraLegible = fechaActual.toLocaleString("es-ES", opciones);

  // var tempVarToCheckPageHeight = 0;
  // var pageHeight = 0;
  // pageHeight = doc.internal.pageSize.height;

  doc.margins = {
    top: 0.5,
    bottom: 0.5,
    left: 0,
    right: 0,
    width: 7.4,
  };
  // var y = 20;
  doc.setLineWidth(2);
  // doc.setFillColor("Gray");

  doc.setFontSize(14);
  let header = "Gracias por venir";

  let fecha = fechaYHoraLegible;

  doc.text(header, 0.5, 0.5, {
    baseline: "top",
  });
  doc.setFontSize(12);
  doc.text(fecha, 0.5, 1.0, {
    baseline: "top",
  });
  doc.text("Pedido " + id, 0.5, 1.6, {
    baseline: "top",
  });
  doc.setFontSize(10);
  var cStyles = {};
  if (cells === 5) {
    cStyles = {
      0: {
        cellWidth: 0.1,
      },
      1: {
        cellWidth: 4,
      },
      2: {
        cellWidth: 1,
      },
      3: {
        cellWidth: 1.5,
      },
      4: {
        cellWidth: 1.5,
      },
    };
  } else {
    cStyles = {
      0: {
        cellWidth: 0.7,
      },
      1: {
        cellWidth: 4,
      },
      2: {
        cellWidth: 1,
      },
      3: {
        cellWidth: 2.5,
      },
    };
  }
  autoTable(doc, {
    html: "#" + tabla,

    margin: {
      left: 0,
    },
    startY: 3,
    valign: "bottom",
    theme: "plain",
    columnStyles: cStyles,
    styles: {
      minCellHeight: 0.3,
      fontSize: 8,
      halign: "left",
      valign: "top",
    },
  });

  doc.output("dataurlnewwindow");
  doc.autoPrint({
    variant: "non-conform",
  });

  doc.save("cuenta.pdf");
};

import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ProductoBuscado = ({ productos, createPedido }) => {
  return (
    <table className="table table-striped table-hover table-dark table-responsive-sm">
      <thead>
        <tr><th colSpan={3} className="table-primary">Coincidencias</th></tr>
      </thead>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productos.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>
                <Button
                  variant="success"
                  onClick={(e) => {
                    e.preventDefault();
                    createPedido({
                      id_producto: item.id_producto,
                      nombre: item.nombre,
                      descripcion: item.descripcion,
                      precio: item.precio,
                      cantidad: 1,
                    });
                  }}
                >
                  +
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductoBuscado;

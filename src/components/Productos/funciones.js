// import { useState } from "react"

export function DeleteProducto(id) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta='http://localhost:3001/api/productos/'+ id;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
        
        // console.log(respuesta)
}

export function DeleteProductoDetalle(id_prod, id_det) {
    
    const requestOptions = {
        method: "DELETE"
    }
    const ruta=`http://localhost:3001/api/producto_detalle/${id_prod}/${id_det}`;

    fetch(ruta, requestOptions)
            .then((res) => res.json())
            .then((data)=>console.log(data))
}

export function UpdateProducto(id) {
    const requestOptions = {
        method: "PATCH"
    }
    const ruta = 'http://localhost:3001/api/productos/'+id;

    fetch(ruta, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
}
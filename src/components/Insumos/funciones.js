// import { useState } from "react"

export function DeleteInsumo(id, nombre) {
    
  if(window.confirm("Estás seguro que deseas eliminar este insumo"+ " " + nombre)){
    const requestOptions = {
      method: "DELETE"
  }
  const ruta='http://localhost:3000/api/insumos/'+ id;

  fetch(ruta, requestOptions)
          .then((res) => res.json())
          .then((data)=>window.alert("Se ha eliminado correctamente"))
          .catch((error) =>window.alert("No se pudo eliminar correctamente"))
  }
}

export function UpdateInsumo (id) {
    const requestOptions = {
        method: "PATCH"
    }
    const ruta = 'http://localhost:3000/api/insumos/'+id;

    fetch(ruta, requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data))
}

export function GetUnidades() {
    return fetch("http://localhost:3000/api/unidades_de_medida")
    .then((res) => res.json())
    .then(async (data)=>  data )
    .catch((error) => {
        console.error("Error fetching tipos de insumos:", error);
        return [];
    });
  }
  
  export function GetTiposDeInsumos() {
    return fetch("http://localhost:3000/api/tiposInsumo")
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching tipos de insumos:", error);
        return [];
      });
  }
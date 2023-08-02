import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlreadyAgregados from "./AlreadyAgregados";
// import "./Pedidos.css";
import ProductoBuscado from "./ProductoBuscado";
import ProdcutosAgregados from "./ProductosAgregados";

const Detalles = () => {
  const { id } = useParams();
  // console.log(id)

  const [pedidos, setPedidos] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [pedidoInput, setPedidoInput] = useState("");
  const [productos, setProductos] = useState([]);
  const [mesa, setMesa] = useState(0);
  const [insertedIdPedidos, setInsertedIdPedidos] = useState(0);
  const [alredyInserted, setAlredyInserted] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/detallepedidos/" + id)
      .then((res) => res.json())
      .then((resjson) => setAlredyInserted(resjson));
    fetch("http://localhost:3000/api/pedidos/" + id)
      .then((res) => res.json())
      .then((resjson) => setMesa(resjson.mesa));
    // console.log(alredyInserted);
  }, []);

  useEffect(() => {
    // console.log("InsertedIdPedidos: " + insertedIdPedidos);
    let rows = false;
    pedidos.map((ped) => {
      rows = true;
      const jsonPedidos = {
        id_pedido: insertedIdPedidos,
        id_producto: ped.id_producto,
        cantidad: ped.cantidad,
        precio_unitario: ped.precio,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonPedidos),
      };
      try {
        fetch("http://localhost:3000/api/detallePedidos", requestOptions)
          .then((res) => res.json())
          .then((resjson) => {
            if (!resjson.affectedRows > 0) throw resjson.message;
          });

        window.location.reload();
      } catch (error) {
        alert("no fue posible hacer el registro del pedido");
      }
    });
    // if (rows) window.location.replace("/pedidos");
  }, [insertedIdPedidos]);

  useEffect(() => {
    buscarProduto();
  }, [pedidoInput]);
  //funcion para hacer el registro del pedido
  const handleSubmit = (e) => {
    e.preventDefault();

    if (pedidos.length === 0 || mesa === 0) {
      alert(
        "Agrega primero un producto y asegúrate de colocar el número de mesa"
      );
    } else {
      if (
        window.confirm("Estas a punto de agregar nuevos productos al pedido")
      ) {
        setInsertedIdPedidos(id);
      }
    }


  };

  //funcion para pasarla a cada elemento de la lista para agregar un producto al pedido
  function createPedido(NewPedido) {
    if (pedidos.length === 0) {
      setPedidos([NewPedido]);
    } else {
      //programacion para sumar 1 a cantidad si ya existe
      let indexOfRepete = pedidos.findIndex(
        (element) => element.id_producto === NewPedido.id_producto
      );
      if (indexOfRepete === -1) {
        setPedidos([...pedidos, NewPedido]);
      } else {
        let copia = [...pedidos];
        copia[indexOfRepete].cantidad++;
        setPedidos(copia);
      }
    }
  }
  function createAlready(NewPedido) {
    if (alredyInserted.length === 0) {
      setAlredyInserted([NewPedido]);
    } else {
      //programacion para sumar 1 a cantidad si ya existe
      let indexOfRepete = alredyInserted.findIndex(
        (element) => element.id_producto === NewPedido.id_producto
      );
      if (indexOfRepete === -1) {
        setAlredyInserted([...alredyInserted, NewPedido]);
      } else {
        let copia = [...alredyInserted];
        copia[indexOfRepete].cantidad++;
        setAlredyInserted(copia);
      }
    }

  }

  function restarProducto(producto) {
    let indexOfRestar = pedidos.findIndex(
      (element) => element.id_producto === producto.id_producto
    );
    const copia = [...pedidos];
    if (copia[indexOfRestar].cantidad <= 1) {
      eliminarPedido(copia[indexOfRestar].id_producto);
    } else {
      copia[indexOfRestar].cantidad--;
      setPedidos(copia);
    }
  }

  function restarAlready(producto) {
    let indexOfRestar = alredyInserted.findIndex(
      (element) => element.id_producto === producto.id_producto
    );
    const copia = [...alredyInserted];
    if (copia[indexOfRestar].cantidad <= 1) {
      eliminarAlready(copia[indexOfRestar].id_producto);
    } else {
      copia[indexOfRestar].cantidad--;
      setAlredyInserted(copia);
    }
  }

  const eliminarPedido = (id) => {
    if (window.confirm("¿Estas seguro que quieres eliminar este producto?")) {
      const nuevosPedidos = pedidos.filter(
        (pedido) => pedido.id_producto !== id
      );
      setPedidos(nuevosPedidos);
      // setTotal(total - 1);
    }
  };
  const eliminarAlready = (id) => {
    if (window.confirm("¿Estas seguro que quieres eliminar este producto?")) {
      const nuevosPedidos = alredyInserted.filter(
        (pedido) => pedido.id_producto !== id
      );
      setAlredyInserted(nuevosPedidos);
      // setTotal(total - 1);
    }
  };
  const buscarProduto = () => {
    // e.preventDefault();
    fetch("http://localhost:3000/api/productos/" + pedidoInput)
      .then((res) => res.json())
      .then((productos) => setProductos(productos));
    // console.log(productos);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 detalles text-white text-center">
          <form className="pedidos" onSubmit={(e) => handleSubmit(e)}>

            <label htmlFor="input_mesa" style={{ marginRight: '10px' }}>No. de mesa </label>

            <input
              id="input_mesa"
              placeholder="Numero de mesa"
              type="number" value={mesa} disabled onChange={(e) => {
                setMesa(e.target.value);
              }}
              min={0}
              style={{ padding: "10px", marginBlockEnd: "10px", width: "70px" }}
            />

            <a className={`btn btn-outline-light    ${!hidden ? 'active' : ' '}`} style={{ marginLeft: "20px" }} onClick={() => setHidden(!hidden)}>Agregados previamente</a> <br />
            <div style={{ height: "400px", overflowY: "auto" }} className="col-md bg-secondary text-center text-white" hidden={hidden}>

              <AlreadyAgregados
                pedidos={alredyInserted}
                eliminarPedido={eliminarAlready}
                restarProducto={restarAlready}
                createPedido={createAlready}
              />
            </div>
            <label htmlFor="input_buscar" style={{ marginRight: '10px' }}>Buscar Producto</label>
            <input
              id="input_buscar" type="text" value={pedidoInput}
              onChange={(e) => {
                setPedidoInput(e.target.value);
                e.preventDefault();
              }}
            />
            <br />
            <br />
            <div
              className="nuevosProductos d-flex flex-wrap justify-content-center"
              style={{
                textAlign: "center",
              }}
            >
              <div className="row" style={{ display: "flex", flex: 1 }}>
                <div className="col-md-5" style={{ flex: "1 1 50%" }}>
                  <ProductoBuscado
                    productos={productos}
                    createPedido={createPedido}
                  />
                </div>
                <div className="col-md-5" style={{ flex: "1 1 50%" }}>
                  <ProdcutosAgregados
                    key={2}
                    pedidos={pedidos}
                    eliminarPedido={eliminarPedido}
                    restarProducto={restarProducto}
                    createPedido={createPedido}
                  />
                </div>
              </div>
            </div>

            <div className="alinear-derecha">
              <input
                className="button btn btn-primary"
                type="submit"
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detalles;

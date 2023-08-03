import { BsFillArrowUpRightSquareFill } from "react-icons/bs";


export function PedidosActivos(props) {

  const { id_pedido, fecha, total, mesa, pagado } = props;


  return (
    <div>
      
          <div key={id_pedido}>
            <h1>Mesa {mesa}</h1>
            <h2>Numero de pedido {id_pedido} </h2>
            <h3>Fecha {fecha} </h3>
            <h3>Total ${total} </h3>
            <h3>Pagado ${pagado} </h3>
            <h3>Resto ${total-pagado} </h3>
            
            <h3>Activo</h3>
          </div>
        <button style={{ fontSize: "1.5 rem", padding: "1rem 2rem", marginBottom: "20px" }} className="btn btn-dark btn-lg" 
        onClick={()=>window.location.href="/pedidos/detalles/" + id_pedido } ><BsFillArrowUpRightSquareFill /></button>
      </div>
  );
}

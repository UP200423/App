import React, { useContext } from 'react'
import { CuentasContext } from '../../views/Pedidos/PedidosDetalles'
import { SiCashapp } from 'react-icons/si'
import { AiTwotoneEdit, AiFillCloseSquare } from 'react-icons/ai'
import { ClosePedido } from './fetch'

function Nav_pagar_add() {
    const { action, UpdateAction, nota, CuentaActiva, id } = useContext(CuentasContext)
    return (
        <div className='text-center' style={{ marginTop: '10px', marginBottom: '10px' }}>
            <button className={`btn btn-outline-light ${!action ? "active" : ""}`} onClick={() => UpdateAction(false)}>
                <AiTwotoneEdit fontSize={50} style={{ display: 'inline-block', marginRight: '10px' }} /> Modificar
            </button>
            <button style={{ marginLeft: "20px" }} className={`btn btn-outline-light ${action ? "active" : ""}`} onClick={() => UpdateAction(true)}>
                <SiCashapp fontSize={50} style={{ display: 'inline-block', marginRight: '10px' }} /> Cuenta
            </button>
            <button style={{ marginLeft: "20px" }} className={`btn btn-outline-danger`} onClick={async () => {
                if (nota.length > 0 || CuentaActiva.length > 0) {
                    if (window.confirm("Existen productos en este pedido que no han sido pagados\n¿Quieres cerrarlo de todos modos?")) {
                        const response = await ClosePedido(id)
                        if (response.serverStatus === 2) {
                            // console.log(afectedRows.afectedRows)
                            window.alert("Se ha cerrado el pedido")
                            window.location.href='/pedidos'
                        } else alert("No fue posible cerrar el pedido, inetentelo en unos momentos")
                    }
                } else {
                    if (window.confirm("Cerrar el pedido")) {
                        const response = await ClosePedido(id)
                        if (response.serverStatus === 2) {
                            window.alert("Se ha cerrado el pedido")
                            window.location.href='/pedidos'
                        } else alert("No fue posible cerrar el pedido, inetentelo en unos momentos")
                        
                    }
                }
            }} >
                <AiFillCloseSquare fontSize={50} style={{ display: 'inline-block', marginRight: '10px' }} /> Cerrar
            </button>

        </div>
    )
}

export default Nav_pagar_add

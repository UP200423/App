import { useState, createContext, useEffect } from "react";
import InsumosList from "../../components/Insumos/InsumosList";
import { useParams } from "react-router-dom";
import OpcionesInsumos from "../../components/Insumos/OpcionesInsumos";
import TablaInsumos from "../../components/Insumos/TablaInsumos";
export const DataContext = createContext()
function InsumosGlobal() {
    const { variante } = useParams();
    const [data, setData] = useState([]);
    const [dataFiltered, setDataFiltered] = useState([])
    useEffect(() => {
        // Realiza la solicitud HTTP a tu API y obtén los datos de la base de datos
        fetch('http://localhost:3000/api/insumos')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setDataFiltered(data)
            })
            .catch(error => console.log(error));
        setDataFiltered(data)
    }, []);
    const typing = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log(searchTerm);
        setDataFiltered(data.filter(item => item.nombre.toLowerCase().includes(searchTerm)));
    }
    const renderComponent = () => {
        switch (variante) {
            case 'tabla':
                return <TablaInsumos />;
            case 'card':
                return <InsumosList />;
            default:
                return <TablaInsumos />;
        }
    };
    return (
        <DataContext.Provider value={{ dataFiltered, typing }} >
            <OpcionesInsumos />
            {renderComponent()}
        </DataContext.Provider>
    )
}
export default InsumosGlobal
import { useEffect, useState } from "react"

const MiApi = () => {
    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mindicador.cl/api')
                if (!response.ok) {
                    throw new Error('ERROR. No se pueden obtener datos de la API')
                }
                const data = await response.json()
                setDatosAPI(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return datosAPI
}

export default MiApi
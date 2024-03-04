import { Table } from 'react-bootstrap'

const Tabla = ({ datos, ordenAscendente }) => {
 
 
  const compararDatosTabla = (a, b) => {
    const nombre1 = a.nombre.toLowerCase()
    const nombre2 = b.nombre.toLowerCase()
    if (nombre1 < nombre2) {
      return ordenAscendente ? -1 : 1
    }
    if (nombre1 > nombre2) {
      return ordenAscendente ? 1 : -1
    }
    return 0
  }

  const datosOrdenados = datos.slice().sort(compararDatosTabla)

  const datosFiltrados = datosOrdenados.filter(indicador => {
    return indicador.nombre && indicador.valor && indicador.unidad_medida && indicador.fecha
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre de moneda</th>
          <th>Valor</th>
          <th>Unidad de medida</th>
          <th>Fecha de última actualización</th>
        </tr>
      </thead>
      <tbody>
        {datosFiltrados.map((indicador, index) => (
          <tr key={index}>
            <td>{indicador.nombre}</td>
            <td>{indicador.valor}</td>
            <td>{indicador.unidad_medida}</td>
            <td>{indicador.fecha.substring(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Tabla
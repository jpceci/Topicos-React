import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample({ tuplas }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {tuplas.map((tupla, index) => {
          return (
            <tr>
              <td>{tupla.fecha}</td>
              <td>{tupla.producto}</td>
              <td>{tupla.cantidad}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;

import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample({ tuplas }) {
  console.log(tuplas);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {tuplas.map((tupla, index) => {
          return (
            <tr>
              {tupla._id && (
                <td>{tupla._id.name + " (" + tupla._id.type + ") Talla " + tupla._id.size}</td>
                )
              }
              {tupla.quantity && (
                <td>
                  {tupla.quantity}
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;

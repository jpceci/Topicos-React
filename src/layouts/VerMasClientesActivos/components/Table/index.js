import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
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
        <tr>
          <td>18-10-2022</td>
          <td>Adore You (Polera)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>18-10-2022</td>
          <td>Adore You (Polera)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>18-10-2022</td>
          <td>Adore You (Polera)</td>
          <td>2</td>
        </tr>
        <tr>
          <td>18-10-2022</td>
          <td>Adore You (Polera)</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
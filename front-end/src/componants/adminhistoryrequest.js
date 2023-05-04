import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
export const AdminRequest = (items) => {
  return (
    <Table striped bordered hover  >
    
        <tr>
        <td style={{width:'  7cm'}}>{items.name}</td>
    <td style={{width:'  7cm'}}>{items.id}</td>
    <td style={{width:'  7cm'}}>{items.warehouseId}</td>
    <td style={{width:'  7cm'}}>{items.stock}</td>
    <td style={{width:'  7cm'}}>{items.request}</td>
    <td style={{width:'  7cm'}}>
      <Form.Select size="lg">
      <option value="Bending">Bending</option>
        <option value="Accepted">Accepted</option>
        <option value="Declined">Declined</option>
        
      </Form.Select>
      <br />
      </td>
        </tr>
        
      
    </Table>
  );
}


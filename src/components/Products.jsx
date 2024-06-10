import React from "react";
import { Table, Button, Form } from "react-bootstrap";

const ProductCard = ({ onItemizedItemEdit, onRowAdd, onRowDel, currency, items = [] }) => {
  return (
    <div>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.itemId}>
              <td>
                <Form.Control
                  type="text"
                  name="itemName"
                  value={item.itemName}
                  onChange={(e) => onItemizedItemEdit(e, item.itemId)}
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  name="itemDescription"
                  value={item.itemDescription}
                  onChange={(e) => onItemizedItemEdit(e, item.itemId)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="itemPrice"
                  value={item.itemPrice}
                  onChange={(e) => onItemizedItemEdit(e, item.itemId)}
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  name="itemQuantity"
                  value={item.itemQuantity}
                  onChange={(e) => onItemizedItemEdit(e, item.itemId)}
                />
              </td>
              <td>{(item.itemPrice * item.itemQuantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" onClick={() => onRowDel(item)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

export default ProductCard;

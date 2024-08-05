import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/payments.css'; // Add your own CSS file or use inline styles
import axios from "axios"
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { items = [], total = 0 } = location.state || {};
  const [username, setUsername] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('username');
    setUsername(user);
  }, []);

  // Second useEffect to send cart details after username is set
  useEffect(() => {
    if (username) {
      const sendCartDetails = async () => {
        try {
          const response = await axios.post('http://localhost:8000/api/details/cart', {
            username,
            total,
          });

          if (response.status === 201) {
            console.log('Cart entry created successfully:', response.data);
          } else {
            console.error('Failed to create cart entry');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };

      sendCartDetails();
    }
  }, [username, total]);


  // Filter out items with quantity 0
  const filteredItems = items.filter(item => item.count > 0);

  return (
    <div className="payment-container">
      <h2>Order Summary</h2>
      {filteredItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>₹ {(item.price * item.count).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2"><strong>Total</strong></td>
              <td><strong>₹ {total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      )}

      <div id='Gt'>Grand Total:₹ {total.toFixed(2)}</div>

      <div id='home' onClick={()=>navigate("/")}>Home...</div>
    </div>
  );
};

// PropTypes for validation
Payment.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  total: PropTypes.number,
};

export default Payment;

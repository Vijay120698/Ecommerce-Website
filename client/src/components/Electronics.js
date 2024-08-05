// import React, { useState ,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// import '../style/electronics.css';

// const Electronics = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchAllProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/details/products');
//         setItems(response.data);
//       } catch (error) {
//         console.error('Failed to fetch products:', error);
//       }
//     };
//     fetchAllProducts();
//   }, []);



//   const navigate = useNavigate();

//   const increment = (id) => {
//     const updatedItems = items.map(item =>
//       item.id === id ? { ...item, count: item.count + 1 } : item
//     );
//     setItems(updatedItems);
//   };

//   const decrement = (id) => {
//     const updatedItems = items.map(item =>
//       item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
//     );
//     setItems(updatedItems);
//   };

//   const total = () => {
//     return items.reduce((acc, item) => acc + item.count * item.price, 0);
//   };

//   const goToPayments = () => {
//     navigate("/payments", { state: { items, total: total() } });
//   };

//   return (
//     <>
//       <div className="topnav1">
//         <div id="nav1">
//           <a className="active" href="/">
//             Home
//           </a>
//           <a href="/">News</a>
//           <a href="#contact">Contact</a>
//           <a href="#about">About</a>
//           <a href='/'   key="logout" onClick={() => { 
//     sessionStorage.clear();
//     navigate('/'); 
//   }}>Logout </a>
//         </div>

//         <div id="t1c">
//           <div id="tittle" style={{ color: 'white' }}>
//             e-Commerse Website
//           </div>
//           <div id="cart">Cart: {items.reduce((acc, item) => acc + item.count, 0)} Items</div>
//         </div>
//       </div>

//       <div id="dis">
//         <div className="pic">
//           {items.map(item => (
//             <div className="p1" key={item.id}>
//               <div>
//                 <img src={item.image} width={'250px'} height={'250px'} alt={item.name} />
//               </div>
//               <div style={{ color: 'white' }}>
//                 {item.name} Price: ₹ {item.price}.
//               </div>
//               <div id="btn">
//                 <div className="btn" onClick={() => decrement(item.id)}>
//                   -
//                 </div>
//                 <div className="btn">{item.count}</div>
//                 <div className="btn" onClick={() => increment(item.id)}>
//                   +
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div id="btnpay" onClick={goToPayments}>
//         Go to Payments
//       </div>
//     </>
//   );
// };

// export default Electronics;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import '../style/electronics.css';

const Electronics = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/details/products');
        const productsWithCount = response.data.map(product => ({ ...product, count: 0 }));
        setItems(productsWithCount);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchAllProducts();
  }, []);

  const navigate = useNavigate();

  const increment = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrement = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
    );
    setItems(updatedItems);
  };

  const total = () => {
    return items.reduce((acc, item) => acc + item.count * item.price, 0);
  };

  const goToPayments = () => {
    navigate("/payments", { state: { items, total: total() } });
  };

  return (
    <>
      <div className="topnav1">
        <div id="nav1">
          <a className="active" href="/">
            Home
          </a>
          <a href="/">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href='/' key="logout" onClick={() => {
            sessionStorage.clear();
            navigate('/');
          }}>Logout </a>
        </div>

        <div id="t1c">
          <div id="tittle" style={{ color: 'white' }}>
            e-Commerse Website
          </div>
          <div id="cart">Cart: {items.reduce((acc, item) => acc + item.count, 0)} Items</div>
        </div>
      </div>

      <div id="dis">
        <div className="pic">
          {items.map(item => (
            <div className="p1" key={item.id}>
              <div>
                <img src={item.image} width={'250px'} height={'250px'} alt={item.name} />
              </div>
              <div style={{ color: 'white' }}>
                {item.name} Price: ₹ {item.price}.
              </div>
              <div id="btn">
                <div className="btn" onClick={() => decrement(item.id)}>
                  -
                </div>
                <div className="btn">{item.count}</div>
                <div className="btn" onClick={() => increment(item.id)}>
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="btnpay" onClick={goToPayments}>
        Go to Payments
      </div>
    </>
  );
};

export default Electronics;


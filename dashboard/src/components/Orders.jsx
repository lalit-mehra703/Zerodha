import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3002/addOrders').then((res)=>{
      setAllOrders(res.data);
    },[])
  })
  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Buy/Sell</th>
            <th>LTP</th>
          </tr>

          {allOrders.map((stock, index) => {

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.mode}</td>
                <td>{stock.price.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>
        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
    </>
  );
};

export default Orders;
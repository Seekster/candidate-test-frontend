import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { getOrdersAPI } from "../../services/orderService.js";

import "./OrderPage.scss";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await getOrdersAPI();
      setOrders(data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(error.message);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="content">
      <div className="title">รายการ</div>
      <div className="card">
        {orders.map((order) => (
          <div className="card-item" key={order._id}>
            <div className="card-body">
              <div className="card-title">{order.service.name}</div>
              <div className="card-option">
                <div className="card-start">เริ่มต้น</div>
                <div className="card-price">฿ {order.service.price}</div>
              </div>
            </div>
            <div className="card-footer">
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.52"
                    height="15.52"
                    viewBox="0 0 15.52 15.52"
                  >
                    <path
                      id="calendar"
                      d="M16.629,4.434a2.217,2.217,0,0,0-2.217-2.217h-.554V1.678a.565.565,0,0,0-.528-.569.554.554,0,0,0-.581.554v.554H4.989V1.678a.565.565,0,0,0-.528-.569.554.554,0,0,0-.581.554v.554H3.326A2.217,2.217,0,0,0,1.109,4.434V4.85a.139.139,0,0,0,.139.139H16.49a.139.139,0,0,0,.139-.139ZM1.109,14.411a2.217,2.217,0,0,0,2.217,2.217H14.411a2.217,2.217,0,0,0,2.217-2.217V6.2a.1.1,0,0,0-.1-.1H1.213a.1.1,0,0,0-.1.1ZM13.026,7.206a.831.831,0,1,1-.831.831A.831.831,0,0,1,13.026,7.206Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,13.026,9.977ZM10.254,7.206a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,7.206Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,10.254,12.749ZM7.483,9.977a.831.831,0,1,1-.831.831A.831.831,0,0,1,7.483,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,7.483,12.749ZM4.711,9.977a.831.831,0,1,1-.831.831A.831.831,0,0,1,4.711,9.977Zm0,2.771a.831.831,0,1,1-.831.831A.831.831,0,0,1,4.711,12.749Z"
                      transform="translate(-1.109 -1.109)"
                      fill="#007aff"
                    />
                  </svg>
                  {format(new Date(order.createdAt.toString()), "dd MMM yyyy")}
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="clock-regular"
                      d="M18,8A10,10,0,1,0,28,18,10,10,0,0,0,18,8Zm0,18.065A8.065,8.065,0,1,1,26.065,18,8.062,8.062,0,0,1,18,26.065Zm2.492-4.21-3.423-2.488a.487.487,0,0,1-.2-.391V12.355a.485.485,0,0,1,.484-.484h1.29a.485.485,0,0,1,.484.484v5.714l2.694,1.96a.484.484,0,0,1,.1.677l-.758,1.044a.487.487,0,0,1-.677.1Z"
                      transform="translate(-8 -8)"
                      fill="#007aff"
                    />
                  </svg>
                  {format(new Date(order.createdAt.toString()), "HH:mm")}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;

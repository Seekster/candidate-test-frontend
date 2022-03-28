import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getServicesAPI } from "../../services/serviceService";
import "./LandingPage.scss";

const LandingPage = () => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    const { data } = await getServicesAPI();
    setServices(data);
  };

  useEffect(() => {
    getServices();
  }, []);

  const truncate = (source, size) => {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  };

  return (
    <>
      <div className="service-title">งานบริการ</div>
      <div className="card-wrap">
        {services.map((service) => (
          <Link
            key={service._id}
            to={`/services/${service._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card-item">
              <img src={service.picture} alt="" />
              <div className="card-body">
                <div className="card-title">{truncate(service.name, 16)}</div>
                <div className="card-option">
                  <div className="card-start">เริ่มต้น</div>
                  <div className="card-price">฿ {service.price}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LandingPage;

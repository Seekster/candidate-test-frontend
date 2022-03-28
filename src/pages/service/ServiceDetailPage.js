import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  findServiceByIdAPI,
  bookingServiceAPI,
} from "../../services/serviceService";

import "./ServiceDetailPage.scss";

const ServiceDetailPage = () => {
  const { id: serviceId } = useParams();
  const [service, setService] = useState({});

  const findServiceById = async (serviceId) => {
    const { data } = await findServiceByIdAPI(serviceId);
    setService(data);
  };

  useEffect(() => {
    findServiceById(serviceId);
  }, [serviceId]);

  const bookingService = async () => {
    try {
      await bookingServiceAPI(serviceId);
      alert("Service is booked");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        return;
      }
      alert(error.message);
    }
  };

  return (
    <div className="content">
      <div className="title">{service.name}</div>
      <div className="sub-title">฿ {service.price}</div>
      <div className="description">{service.description}</div>
      <button onClick={bookingService}>จองบริการ</button>
    </div>
  );
};

export default ServiceDetailPage;

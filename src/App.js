import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing/LandingPage";
import ServiceDetailPage from "./pages/service/ServiceDetailPage";
import OrderPage from "./pages/order/OrderPage";
import Layout from "./layout/Layout";

import "./App.css";

function App({ basename }) {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHeader={true}>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <OrderPage />
            </Layout>
          }
        />
        <Route
          path="/services/:id"
          element={
            <Layout>
              <ServiceDetailPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

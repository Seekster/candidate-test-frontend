import React from "react";
import PropTypes from "prop-types";

import Header from "./header/Header";

const Layout = ({ showHeader, children }) => {
  return (
    <>
      <Header showHeader={showHeader} />
      <div className="container">{children}</div>
    </>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  children: PropTypes.element,
};

export default Layout;

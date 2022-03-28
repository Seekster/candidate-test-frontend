import React from "react";
import PropTypes from "prop-types";

import NavBar from "../navbar/NavBar";
import "./Header.scss";

const Header = ({ showHeader = false }) => {
  return (
    <>
      {showHeader ? (
        <header>
          <NavBar />
          <div className="title">คำบรรยายต่างๆนานา</div>
          <div className="description">
            เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
            ทุกๆด้านอย่างที่คุณต้องการ
          </div>
        </header>
      ) : (
        <NavBar />
      )}
    </>
  );
};

Header.propTypes = {
  showHeader: PropTypes.bool,
};

export default Header;

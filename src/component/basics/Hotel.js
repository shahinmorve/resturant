import React, { useState } from "react";
import "./style.css";
import Menu from "../Menuapi";
import Menucard from "../Menucard";
const Hotel = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <Menucard menuData={menuData} />
    </>
  );
};

export default Hotel;

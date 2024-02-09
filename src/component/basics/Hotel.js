import React, { useState } from "react";
import "./style.css";
import Menu from "../Menuapi";
import Menucard from "../Menucard";

const uniqueList=new Set(Menu.map((curElem)=>{
  return curElem.category;
}))
console.log(uniqueList)
const Hotel = () => {
  const [menuData, setMenuData] = useState(Menu);
  
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===category;
    })
    setMenuData(updatedList)
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=>filterItem ("breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filterItem ("lunch")}>lunch</button>
          <button className="btn-group__item" onClick={()=>filterItem ("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=>filterItem ("evening")}>evening</button>
          <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
        </div> 
      </nav>
      <Menucard menuData={menuData} />
    </>
  );
};

export default Hotel;

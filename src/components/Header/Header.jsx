import React from "react";
import logo from "../Header//logo.avif";
// import Card from "../Shope/Shope";
const Header = () => {
  

  let search=()=>{
    let get1=document.getElementById("input").value
    
  
  }


  return (
    <div>
      <div className="w-full h-20 px-20 bg-gray-800 flex justify-between items-center">
        <div>
          <img src={logo} className="w-32" alt="" />
        </div>
        <div>
          <input id="input"type="text" className="py-3 rounded-lg text-center w-96" placeholder="search your food free"  />
          <button  onClick={search} className="text-white py-3 px-7 rounded-lg bg-gray-400 ml-4">search</button>
        </div>
        <div className="text-white">
          <a className="pl-4" href="#">
            Home
          </a>
          <a className="pl-4" href="#">
            Home
          </a>
          <a className="pl-4" href="#">
            Home
          </a>
          <a className="pl-4" href="#">
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

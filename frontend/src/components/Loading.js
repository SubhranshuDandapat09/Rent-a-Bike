import React from "react";
import "./Loadin.css";
import logo from "./img/logo.png"

const Loading = () => {
  return (
    <div className='bg-slate-100'>
      <div className='flex items-center justify-center h-screen max-w-screen'>
        <img
          className='object-cover object-center w-48 rounded'
          alt='logo'
          src={logo}
        />
      </div>
      <div className='loader'>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        {/*         <div className="loader--text"></div> */}
      </div>
    </div>
  );
};

export default Loading;

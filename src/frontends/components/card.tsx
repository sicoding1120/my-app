import React from 'react'
import { IoMdBook } from 'react-icons/io';
import { IoTimerOutline } from "react-icons/io5";

const CardDemo = () => {
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-md rounded-md">
      <div className="w-full h-1/2 bg-red-500"></div>
      <div className="p-4 flex flex-col justify-between w-full h-1/2 ">
        <h3>javascript</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. .</p>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <IoMdBook />
            12 lesson
          </div>
          <div className="flex gap-2 items-center">
            <IoTimerOutline />
            3 hr 35 min
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDemo
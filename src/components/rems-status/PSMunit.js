import React from "react";
import { GiThermometerScale } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";

export default function PSMunit({title}){
    return(
        <>
        {/* <div className="p-2">
            <ul className="d-flex gap-2 align-items-center">
                <li className="p-2 bg-light border rounded-1"><GiThermometerScale fontSize={20}/></li>
                <li className="p-2 bold fs-5 text-black ">{title}</li>
                <li className="fs-5">|</li>
                <li className="fs-5">
                    <Link className="">Back</Link>
                    </li>
            </ul>
        </div> */}

         <div className="d-flex justify-content-between align-items-center p-2 ">
            <div className="d-flex gap-2 align-items-center">
              <div className=" p-3 rounded bg-light">
                <IoMdCart className="text-primary fs-3" />
              </div>
              <h4>
              {title} <Link> | Back</Link>
              </h4>
            </div>
            <div>
              <IoIosShareAlt className="fs-2" />
            </div>
          </div>
          </>
    )
} 
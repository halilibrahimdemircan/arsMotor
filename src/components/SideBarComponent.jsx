import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { TfiMinus } from "react-icons/tfi";
import Sublist from './Sublist';

const SideBarComponent = ({ title, subList }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="">
            <p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <button
                            className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                            type="button"
                            // data-bs-toggle="collapse"
                            // data-bs-target="#collapseExample1"
                            aria-expanded="false"
                            // aria-controls="collapseExample"
                            onClick={handleClick}
                        >
                            {" "}
                            {title}
                        </button>
                    </div>
                    <div className="mt-3">
                        <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
                    </div>
                </div>
                <hr className="text-dark d-none d-sm-block"></hr>
            </p>

            <div  >
                <ul className=" card-body list-unstyled ">
                    <Sublist subList={subList} isOpen={isOpen} />
                    {/* {isOpen && subList?.map((el, index) => {
                        return (
                            <li key={index}>{el}</li>
                        )
                    })} */}
                </ul>
            </div>
        </div>
    )
}

export default SideBarComponent
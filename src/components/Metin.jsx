import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineViewGrid } from "react-icons/hi";
import FilterModal from "./FilterModal";
import SıralaModal from "./SıralaModal";
import SıralaButtonModal from "./SıralaButtonModal";
const Metin = ({ setCardClass}) => {
  
  return (
    <div className="d-flex align-items-center justify-content-between gap-2 m-5 ">
      <div className=" d-flex d-md-none align-items-center">
        <FilterModal />
        <p>Filtrele</p>
        <SıralaButtonModal />
        <p>sırala</p>
      </div>
      <div className="d-md-flex d-none ">
        <div className="mt-2">
          <h6>Sırala</h6>
        </div>

        <div className="dropdown ">
          <button
            className="btn  dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Düşükten Yükseğe
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Yüksekten Düşüğe
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                İndirim Oranı Artan
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                İndirim Oranı Azalan
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ilk eklenen
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                son Eklenen
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex gap-4 color ">
        <div className="d-md-flex d-none gap-2 align-items-center ">
          <h6 className="">Göster</h6>
          <div className="d-flex gap-2 align-items-center pt-2">
            <p>24</p>
            <p>36</p>
            <p>48</p>
          </div>
        </div>
        <div className="d-flex gap-2 ">
          <div className="d-flex align-items-center d-md-flex d-none">
            <h6 className="p-2">Görünüm</h6>
          </div>
          <div className="p-2 d-flex flex-nowrap">
            <HiOutlineViewGrid
              className="text-danger fs-4 "
              onClick={() => setCardClass(true)}
            />
            <GiHamburgerMenu
              className="text-warning fs-4"
              onClick={() => setCardClass(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metin;

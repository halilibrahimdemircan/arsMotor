import React, { useState } from "react";

import Cards from "./Cards";
import Metin from "./Metin";
import Pagination from "./Pagination";
import CardContainter from "./CardContainter";


const Main = () => {

      const [cardClass, setCardClass] = useState(false);


    
  return (
    <>
      <Metin setCardClass={setCardClass} />
      <CardContainter  cardClass={cardClass} />

      <Pagination />
    </>
  );
};

export default Main;

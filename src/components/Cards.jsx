
const Cards = ({ item, cardClass }) => {
  const { img, price, title } = item;

  
  return (
    <>
      {cardClass && (
        <div className="cardHe m-auto">
          <img src={img} className="card-img-top" alt="..." />
          <div>
            <p className="card-text">{title}</p>

            <p className={"d-none"}>
              [genel] GENEL• AIM + karbon dış yüzey (Advanced Integrated
              matrix)• Çift kat astar (Hyper Dual Liner II)• Rüzgar testi
              tünelinde geliştirilmiş aerodinamik yapı • 4 farklı dış kabuk
              boyutu (XS-S/ M/ L/ XL-XXL)• Profesyonel bir yarış kaskıdır{" "}
            </p>
          </div>
          <p className="card-text text-danger text-center"> ₺{price}</p>
        </div>
      )}
      {!cardClass && (
        <div className="col-12 d-flex  justify-content-between">
          <img src={img} className="card-img-top" style={{width:"200px"}} alt="..." />
          <div>
            <p className="card-text">{title}</p>

            <p>
              [genel] GENEL• AIM + karbon dış yüzey (Advanced Integrated
              matrix)• Çift kat astar (Hyper Dual Liner II)• Rüzgar testi
              tünelinde geliştirilmiş aerodinamik yapı • 4 farklı dış kabuk
              boyutu (XS-S/ M/ L/ XL-XXL)• Profesyonel bir yarış kaskıdır{" "}
            </p>
            <a href="#"  className="">Detayı görüntüle</a>
          </div>
          <p className="card-text text-danger text-center"> ₺{price}</p>
        </div>
      )}
    </>
  );
};

export default Cards;

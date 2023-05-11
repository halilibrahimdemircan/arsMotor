import SideBarComponent from "./SideBarComponent";


const SlideBar = () => {

  const productList = [
    {
      title: 'Alt Kategoriler',
      subList: [
        "Açık Kasklar",
        "Buhar Camları",
        "Kapalı Kasklar",
        "Kask Camları",
        "Kask Taşıma",
        "Kask Yedek Parçaları",
        "Kros ve Enduro Kasklar",
        "Çene Açılır Kasklar",
        "Çocuk Kaskları",
      ]
    },
    {
      title: 'Marka',
      subList: ["AGV", "ARAI", "COX", "GIVI", "KAPPA"]
    },
    {
      title: 'Beden',
      subList: ["2XL", "XL", "L", "M", "S", "XS"]
    },
    {
      title: 'Renk',
      subList: [
        "SARI",
        "MAVİ",
        "YEŞİL",
        "KIRMIZI",
        "SİYAH",
        "BEYAZ",
        "MOR",
        "KREM",
      ]
    },
    {
      title: 'Fiyat',
      subList: [
        "₺ 0.00 - ₺ 1,000.00",
        "₺ 1,000.00 - ₺ 2,000.00",
        "₺ 2,000.00 - ₺ 5,000.00",
        "₺ 5,000.00 - ₺ 10,000.00",
        "₺ 10,000.00 - ₺ 60,000.00",
      ]
    },
  ]
  return (
    <div className="overflow-x-hidden sticky top-0 h-50  pe-2 m-1 ps-1">
      {/* düeltme */}
      <h4 className="p-5 ps-0 pb-3 fon">Filtreler</h4>
      <hr className="text-dark d-none d-sm-block"></hr>
      {productList?.map((el, index) => {
        return (
          <div key={index}>
            <SideBarComponent title={el.title} subList={el.subList} />
          </div>
        )
      })}
      {/* <div className="border border-primary">
        <p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button
                className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handleClick}
              >
                {" "}
                Alt Kategoriler
              </button>
            </div>
            <div className="mt-3">
              <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
            </div>
          </div>
          <hr className="text-dark d-none d-sm-block"></hr>
        </p>
        <div className="collapse  " id="collapseExample1">
          <ul className=" card-body list-unstyled ">
            {altKategoriler.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="border border-danger">
        <p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button
                className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handleClick}
              >
                {" "}
                Markalar
              </button>
            </div>
            <div className="mt-3">
              <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
            </div>
          </div>

          <hr className="text-dark d-none d-sm-block"></hr>
        </p>
        <div className="collapse text-center " id="collapseExample2">
          <div className="row">
            {marka.map((item) => {
              return (
                <div className="card card-body-box mb-2 col-4 position-relative d-flex gap-3 align-items-center justify-content-between rounded-3 ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button
                className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handleClick}
              >
                {" "}
                Fiyat Aralığı
              </button>
            </div>
            <div className="mt-3">
              <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
            </div>
          </div>
          <hr className="text-dark d-none d-sm-block"></hr>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className=" card-body">
            <div>
              {fiyat.map((item) => {
                return (
                  <div className="form-check d-md-flex align-items-md-center gap-2 ">
                    <input
                      className="form-check-input rounded-1 d-md-flex p-2 "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button
                className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample4"
                onClick={handleClick}
              >
                {" "}
                Beden
              </button>
            </div>
            <div className="mt-3">
              <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
            </div>
          </div>
          <hr className="text-dark d-none d-sm-block"></hr>
        </p>
        <div className="collapse text-center" id="collapseExample4">
          <div className="row">
            {beden.map((item) => {
              return (
                <div className="card card-body-box mb-2 col-4 position-relative d-flex align-items-center justify-content-between rounded-3 ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <button
                className="btn-aside bg-transparent align-items-center text-start d-flex justify-content-between  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample5"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={handleClick}
              >
                {" "}
                Renk
              </button>
            </div>
            <div className="mt-3">
              <span>{isOpen ? <FaAngleDown /> : <TfiMinus />}</span>
            </div>
          </div>
          <hr className="text-dark d-none d-sm-block"></hr>
        </p>
        <div className="collapse" id="collapseExample5">
          <div className="row">
            {renk.map((item) => {
              return (
                <div className="card card-body-box mb-2 col-3 position-relative d-flex align-items-center justify-content-between rounded-3 ">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SlideBar;

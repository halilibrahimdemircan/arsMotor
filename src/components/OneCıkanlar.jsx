import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function OneCıkanlar() {
        const images = [
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
          "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
        ];
        const responsive = {
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1200, min: 992 },
            items: 4,
          },
          mobile: {
            breakpoint: { max: 991, min: 768 },
            items: 3,
          },
          mobile2: {
            breakpoint: { max: 767, min: 418 },
            items: 2,
          },
          mobile3: {
            breakpoint: { max: 417, min: 0},
            items: 1,
          },
        };
  return (
    <>
      <div>
        <p className="fw-bold fs-5">Öne Çıkanlar</p>
      </div>
      <Carousel responsive={responsive} className="container">
        {images.map((item) => (
          <div className="card" style={{ width: "14rem" }}>
            <img src={item} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text text-danger">₺ 1,399.00</p>
              <p className="card-text">
                Agv Pista GP RR İtalia Carbonia Forgiato Kapalı
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <button type="button" class="btn btn-danger mt-4 fw-bold p-2">
        Tümünü Gör
      </button>
      <div
        className="p-2"
        style={{ color: "white", backgroundColor: "#291784" }}
      >
        <h5>HAVALE İLE ÖDE EKSTRA %5 İNDİRİM</h5>
      </div>
    </>
  );
}

export default OneCıkanlar;

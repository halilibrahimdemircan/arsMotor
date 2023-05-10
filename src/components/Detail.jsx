import ReactImageMagnify from "react-image-magnify";
import { AiFillTwitterCircle, AiOutlineStar } from "react-icons/ai";
import React, { Component } from "react";
import NewSlider from "./NewSlider";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { useState } from "react";
function Detail() {
  const imgs = [
    "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/4ba6c7cd-1a24-4390-9447-84b89f4a4762/image_540.webp",
    "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/df163e96-92cd-4e7e-86c5-f1ab4ec750d1/image_540.webp",
    "https://cdn.myikas.com/images/880bcd69-f5a1-4820-855b-e59396137ba8/6b1cb47b-4622-4940-b4ff-22e3a8bcefd1/720/revit-roamer-deri.webp",
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleclick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  const size = window.screen.width;
  return (
    <Container>
      <div className="d-flex flex-column flex-md-row ">
        <div className=" d-flex flex-column-reverse flex-sm-row ">
          <div className=" d-flex  flex-md-column justify-content-md-start flex-sm-column align-items-sm-center ">
            {imgs.map((img, i) => (
              <img
                style={{ marginTop: "20px", padding: "10px" }}
                src={img}
                alt="6"
                width={71}
                onClick={() => handleclick(i)}
              />
            ))}
          </div>
          <div className="d-sm-none">
            {/* <NewSlider imgs={ imgs} /> */}
            <TransformWrapper
              initialScale={1}
              initialPositionX={10}
              initialPositionY={10}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <React.Fragment>
                    <TransformComponent>
                      <NewSlider imgs={imgs} />
                      {/* <img src={sliderData} alt="test" /> */}
                    </TransformComponent>
                  </React.Fragment>
                  <div className="tools d-flex justify-content-end ">
                    <button
                      className="btn border border-2"
                      onClick={() => zoomIn()}
                    >
                      🔍Yakınlaştır
                    </button>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          <div className="d-none d-sm-flex">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: sliderData,
                },
                largeImage: {
                  src: sliderData,

                  width: 1000,
                  height: 1000,
                },
                isHintEnabled: true,
                enlargedImagePosition: size < 700 ? "over" : "beside",
              }}
            />
          </div>
        </div>
        <div className="col-md-6 text-start p-3">
          <h1 className="fs-4 text-danger ">REVIT</h1>
          <h2>REVIT DEMINATOR GORE-TEX MONT SIYAH</h2>
          <p>VADE FARKSIZ 6 TAKSİT / HAVALE İLE %5 İNDİRİM</p>
          <div className="d-flex gap-3  ">
            <div className=" d-flex fs-3  justify-content-center text-warning mainColor">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <div>
              <p>0 Değerlendirme</p>
            </div>
          </div>

          <p className="text-primary">₺ 32,309.00</p>
          <h5>SKU M1134610-02</h5>
          <p>Beden:XXL</p>
          <div className="d-flex gap-2 bg-transparent ">
            <button type="button" className="btn  btn-outline">
              XXL
            </button>

            <button type="button" className="btn  btn-outline ">
              XL
            </button>
          </div>
          <p>Renk:SİYAH</p>
          <div className="p-3">
            <button type="button" className="btn btn-outline ">
              SIYAH
            </button>
          </div>

          <div className="d-flex gap-3">
            <div className=" ">
              <select
                className="form-select "
                aria-label="Default select example"
                label="miktar"
              >
                <option selected>Miktar</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="+10">+10</option>
              </select>
            </div>

            <div className=" flex-grow-1 ">
              <button
                type="button"
                class="btn btn-outline-danger w-100 bg-white text-danger mainColor "
              >
                Sepete ekle
              </button>
            </div>
            <div className="d-flex align-items-center">
              {/* <AiOutlineHeart className="fs-3 text-danger border border-danger " /> */}
              <button type="button" class="btn btn-outline-danger bg-white">
                <AiOutlineHeart className="fs-5 text-danger  " />
              </button>
            </div>
          </div>
          <div className="flex-grow-1 my-2">
            <button type="button" class="btn btn-danger w-100 ">
              Satın Al
            </button>
          </div>

          <p>
            [kumas]MALZEME• 4 kat preslenmiş güçlü kumaş teknolojisi• 3L Goretex
            ve Armacor kumaş birleşimi• Omuz ve dirseklerde darbe direncini
            azaltan özel kumaş yapısı• Dört mevsim kullanıma uygun• Enduro ve
            Touring kullanıcıları için özel tasarım [koruma] KORUMA• Level 2
            koruma düzeyine sahip ve çıkarılabilir omuz, dirsek ve sırt
            korumaları• Red DOT tasarım ödüllü koruma teknolojisi ( Seeflex )
            [ergonomi] ERGONOMİ• Boyun korumalarıyla sabitleme için hazır
            bağlantı noktaları• Yüksek yansıtıcı özelliğine sahip reflekte
            şeritler• Dirsek korumaları vucut yapısına göre yukarı ve aşağıya
            ayarlanabilir• Entegre böbrek koruma kemeri• Revit Connector yelek
            ile sabitlenebilmesi için hazır kancalar• Entegre eldiven rüzgar
            kesici• Ayarlanabilir sıkıştırma kayışları• Geliştirilmiş patentli
            VCS havalandırma kanalları• Kol ağızlarında streç paneller• Arkada
            ve kollarda aero cool 3D file paneller[isi_dengesi] ISI VE ASTAR•
            Tamamen hava alabilen yapı• Goretex teknolojisi[ozellikler] ÖZELLİK•
            Aşınma ve yırtılma direnci • Su geçirmez ön cepler• Su geçirmez iç
            cepler• Genişleyebilir arka cep
          </p>
          <div className="d-flex gap-2 fs-3    ">
            <a className=" icon-link-hover opacity-25" href="#">
              <AiFillTwitterCircle />
            </a>

            <a
              className=" icon-link-hover1  link-underline-danger opacity-25"
              href="#"
            >
              <BsFacebook />
            </a>

            <a
              className=" icon-link-hover2  link-underline-danger opacity-25"
              href="#"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Detail;

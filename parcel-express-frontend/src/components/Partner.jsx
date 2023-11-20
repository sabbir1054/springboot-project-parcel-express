/* eslint-disable react/jsx-key */
import { Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Partner = () => {
  const images = [
    { url: "public/partner (1).png" },
    { url: "public/partner (2).png" },
    { url: "public/partner (3).png" },
    { url: "public/partner (4).png" },
    { url: "public/partner (5).png" },
    { url: "public/partner (6).png" },
    { url: "public/partner (7).png" },
    { url: "public/partner (8).png" },
    { url: "public/partner (9).png" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Container maxWidth={"xl"} style={{ padding: "10vh 0" }}>
        <Typography
          variant="h4"
          style={{ padding: "5vh 0" }}
                  textAlign={"center"}
                  fontFamily={"Poppins"}
        >
          {" "}
          Our Official Partner{" "}
        </Typography>
        <div>
          <Slider {...settings}>
            {images?.map((image,idx) => (
              <div key={idx} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src={image?.url} width={"200px"} height={"80px"}/>
              </div>
            ))}
            
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Partner;

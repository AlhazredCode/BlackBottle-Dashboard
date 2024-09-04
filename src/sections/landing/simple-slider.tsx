import React from "react";
import Slider from "react-slick";
import { Grid, Typography } from "@mui/material";
import MainCard from "components/MainCard";
import Image from "next/image";

const features = [
  {
    image: '/assets/images/landing/img-feature1.svg',
    title: 'Bottle Databases',
    description: 'Access our extensive bottle database with 10,000+ products.  Effortlessly add spirits, wines, beers, and more to your inventory.'
  },
  {
    image: '/assets/images/landing/img-feature2.svg',
    title: 'Open AI Integration',
    description: ' Leverage the power of AI to forecast demand, automate purchase orders, and optimize your stock levels.'
  },
  {
    image: '/assets/images/landing/img-feature3.svg',
    title: 'Variance Calculator',
    description: 'Identify and address discrepancies between your theoretical and actual usage. Optimize your bar\'s performance and profitability with data-driven insights.'
  },
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", opacity: 0 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", opacity: 0 }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    rows: 1,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div>
      <Grid container xs={12}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="slider-container">
            <Slider {...settings}>
              {features.map((feature, index) => (
                <div key={index}>
                  <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2, mb: 2, px: 2 }}>
                    <Grid item xs={12} md={12} lg={12}>
                      <MainCard contentSX={{ p: 3 }}>
                        <Grid container alignItems="center" spacing={3}> {/* Ajustado spacing */}
                          <Grid item xs={12} md={4}> {/* Imagen ocupa 4 columnas en pantallas medianas y grandes */}
                            <Image src={feature.image} alt="feature" width={144} height={144} /> {/* Ajustado tamaño de imagen */}
                          </Grid>
                          <Grid item xs={12} md={8}> {/* Texto ocupa 8 columnas en pantallas medianas y grandes */}
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}> {/* Ajustado margen inferior */}
                              {feature.title}
                            </Typography>
                            <Typography variant="body1" color="secondary">
                              {feature.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </MainCard>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default SimpleSlider;
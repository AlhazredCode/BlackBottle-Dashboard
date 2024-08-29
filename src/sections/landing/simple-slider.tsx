import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import MainCard from "components/MainCard";
import Typography from '@mui/material/Typography';
import Image from "next/image";
import CardMedia from "@mui/material";
const imgfeature1 = '/assets/images/landing/img-feature1.svg';
const imgfeature2 = '/assets/images/landing/img-feature2.svg';
const imgfeature3 = '/assets/images/landing/img-feature3.svg';

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
        <Grid item xs={1} >
        </Grid>
        <Grid item xs={10} >
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>
                  <Grid item xs={12} md={12} lg={12}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Image src={imgfeature1} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Productsxx
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="secondary">
                            Manage your bar's products with ease. Add, edit, and track all your offerings.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>










                </Grid>
              </div>
              <div>
                <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>
                  <Grid item xs={12} md={12} lg={12}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Image src={imgfeature1} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Productsxx
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="secondary">
                            Manage your bar's products with ease. Add, edit, and track all your offerings.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>










                </Grid>
              </div>
              <div>
                <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>
                  <Grid item xs={12} md={12} lg={12}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={4}>
                          <Image src={imgfeature1} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Productsxxads
                          </Typography>
                        
                          <Typography variant="body1" color="secondary">
                            Manage your bar's products with ease. Add, edit, and track all your offerings.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>










                </Grid>
              </div>






            </Slider>
          </div>
        </Grid>
        <Grid item xs={1} >
        </Grid>
      </Grid>
    </div>

  );
}

export default SimpleSlider;



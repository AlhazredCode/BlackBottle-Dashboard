import React from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import MainCard from "components/MainCard";
import Typography from '@mui/material/Typography';
import Image from "next/image";

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
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", opacity: 0}}
        onClick={onClick}
      />
    );
  }
  


function SimpleSlider() {
  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9999,
    waitForAnimate: false,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <MainCard>
    <Grid container xs={12}>
    <Grid item xs={1} >
    </Grid>
        <Grid item xs={10} >
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature1} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Products
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

<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature2} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Bottle Database
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Instantly access 10,000+ bottles. Quickly add spirits, wines, beers, and more. 
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>

<Grid item xs={12} md={6} lg={4}> 
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature3} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Recipes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Craft your cocktail menu and calculate ingredient costs and potential profits.
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>
</Grid>
        </div>
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature1} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Products
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

<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature2} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Bottle Database
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Instantly access 10,000+ bottles. Quickly add spirits, wines, beers, and more. 
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>

<Grid item xs={12} md={6} lg={4}> 
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature3} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Recipes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Craft your cocktail menu and calculate ingredient costs and potential profits.
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>
</Grid>
        </div>
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature1} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Products
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

<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature2} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Bottle Database
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Instantly access 10,000+ bottles. Quickly add spirits, wines, beers, and more. 
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>

<Grid item xs={12} md={6} lg={4}> 
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature3} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Recipes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Craft your cocktail menu and calculate ingredient costs and potential profits.
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>
</Grid>
        </div>
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature1} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
          Recipes
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

<Grid item xs={12} md={6} lg={4}>
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature2} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Bottle Database
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Instantly access 10,000+ bottles. Quickly add spirits, wines, beers, and more. 
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
</Grid>

<Grid item xs={12} md={6} lg={4}> 
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Image src={imgfeature3} alt="feature" width={48} height={48} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
            Recipes
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="secondary">
            Craft your cocktail menu and calculate ingredient costs and potential profits.
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
    </MainCard>
  );
}

export default SimpleSlider;
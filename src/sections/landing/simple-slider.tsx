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
    rows: 2,
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


    {/* Second Feature  */}
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
                            Say goodbye to manual entry! Search our database of over 10,000 bottles, add them to your inventory, and keep track of everything.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>

 {/* Third Feature */}
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
                           Craft your perfect menu. Calculate costs, ingredient quantities, and potential earnings for each recipe, ensuring maximum profitability.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>





</Grid>
        </div>
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>

{/* Fourth Feature  */}
<Grid item xs={12} md={6} lg={4}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Image src={imgfeature1} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Barlog
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="secondary">
                           Maintain airtight inventory control. Start and stop inventory sessions, review logs, calculate variance, and identify potential issues.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>
                  {/* Fifth Feature  */}
                   <Grid item xs={12} md={6} lg={4}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Image src={imgfeature2} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Auto-Orders
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="secondary">
                          Never run out of essentials again.  Our AI-powered system integrates with WhatsApp to automate orders from your vendors.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>
                  {/* Sixth Feature  */}
                   <Grid item xs={12} md={6} lg={4}>
                    <MainCard contentSX={{ p: 3 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Image src={imgfeature3} alt="feature" width={48} height={48} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                            Par Flow
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body1" color="secondary">
                            Set your ideal stock levels (Par) for every item. Our system automatically calculates your inventory needs.
                          </Typography>
                        </Grid>
                      </Grid>
                    </MainCard>
                  </Grid>



</Grid>
        </div>

        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>


 {/* Seventh Feature  */}
 <Grid item xs={12} md={6} lg={4}>
 <MainCard contentSX={{ p: 3 }}>
   <Grid container spacing={1}>
     <Grid item xs={12}>
       <Image src={imgfeature3} alt="feature" width={48} height={48} />
     </Grid>
     <Grid item xs={12}>
       <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
        Vendors
       </Typography>
     </Grid>
     <Grid item xs={12}>
       <Typography variant="body1" color="secondary">
        Source everything effortlessly. Browse our vendor marketplace or add your own contacts instantly with just a phone number. 
       </Typography>
     </Grid>
   </Grid>
 </MainCard>
</Grid>

{/* Eigth Feature  */}
<Grid item xs={12} md={6} lg={4}>
 <MainCard contentSX={{ p: 3 }}>
   <Grid container spacing={1}>
     <Grid item xs={12}>
       <Image src={imgfeature2} alt="feature" width={48} height={48} />
     </Grid>
     <Grid item xs={12}>
       <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
         Multi-Inventory
       </Typography>
     </Grid>
     <Grid item xs={12}>
       <Typography variant="body1" color="secondary">
       Manage multiple bars or storage locations within one system. Track by bottles, cases, servings, and gain control over your stock. 
       </Typography>
     </Grid>
   </Grid>
 </MainCard>
</Grid>

{/* Ninth Feature  */}
<Grid item xs={12} md={6} lg={4}>
 <MainCard contentSX={{ p: 3 }}>
   <Grid container spacing={1}>
     <Grid item xs={12}>
       <Image src={imgfeature1} alt="feature" width={48} height={48} />
     </Grid>
     <Grid item xs={12}>
       <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
        Invoice Scan
       </Typography>
     </Grid>
     <Grid item xs={12}>
       <Typography variant="body1" color="secondary">
         Scan invoices from any supplier to automatically update your inventory, saving you time and reducing errors. 
       </Typography>
     </Grid>
   </Grid>
 </MainCard>
</Grid>


</Grid>
        </div>
     
        <div>
        <Grid container alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 2, mb: 2, px: 2 }}>
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
    </div>
  );
}

export default SimpleSlider;



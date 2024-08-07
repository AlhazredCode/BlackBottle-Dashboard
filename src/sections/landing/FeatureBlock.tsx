// next
import Image from 'next/image';

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import Animation from './Animation';

// assets
const imgfeature1 = '/assets/images/landing/img-feature1.svg';
const imgfeature2 = '/assets/images/landing/img-feature2.svg';
const imgfeature3 = '/assets/images/landing/img-feature3.svg';

// ==============================|| LANDING - FEATURE PAGE ||============================== //

export default function FeatureBlock() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={4}>
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

        {/* Bottle Database */}
        <Grid item xs={12} sm={6} md={4}>
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

        {/* Recipes */}
        <Grid item xs={12} sm={6} md={4}> 
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

        {/* Barlog */}
        <Grid item xs={12} sm={6} md={4}>
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
                    Simplify inventory audits, track usage, identify discrepancies, and optimize your stock levels.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>

        {/* Auto-Orders */}
        <Grid item xs={12} sm={6} md={4}>
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
                    Automate ordering with AI-powered WhatsApp integration. Never run out of key ingredients again.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>

        {/* Par Flow */}
        <Grid item xs={12} sm={6} md={4}>
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
                    Maintain optimal stock levels with automated Par level tracking. Streamline your ordering process.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>

        {/* Vendors */}
        <Grid item xs={12} sm={6} md={4}>
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Image src={imgfeature1} alt="feature" width={48} height={48} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    Vendors
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Source new products and manage suppliers. Connect with vendors in our marketplace or add your own.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>

        {/* Multi-Inventory */}
        <Grid item xs={12} sm={6} md={4}>
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
                    Effortlessly manage inventory across multiple locations. Track by bottle, case, or serving size.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>

        {/* Invoice Scan */}
        <Grid item xs={12} sm={6} md={4}>
            <MainCard contentSX={{ p: 3 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Image src={imgfeature3} alt="feature" width={48} height={48} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
                    Invoice Scan
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" color="secondary">
                    Ditch manual entry. Scan invoices to add products from any supplier, saving time and errors.
                  </Typography>
                </Grid>
              </Grid>
            </MainCard>
        </Grid>
      </Grid>
    </Container>
  );
}






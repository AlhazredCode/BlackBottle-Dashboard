// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';
import { CardMedia } from '@mui/material';
const img1 = '/assets/images/landing/Items/1.svg';
const img2 = '/assets/images/landing/Items/2.svg';
const img3 = '/assets/images/landing/Items/3.svg';
const img4 = '/assets/images/landing/Items/4.svg';
const img5 = '/assets/images/landing/Items/5.svg';
const img6 = '/assets/images/landing/Items/6.svg';
const img7 = '/assets/images/landing/Items/7.svg';
const img8 = '/assets/images/landing/Items/8.svg';
const img9 = '/assets/images/landing/Items/9.svg';

// ==============================|| LANDING - NUMBER BLOCK PAGE ||============================== //

export default function NumberFeatures() {
  return (
    <Container sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
     
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: 2, mb: 2 }}>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="primary">
                    BLACK BOTTLE
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h2">  Increasing Profits in the hospitality Industry </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                    Yor future Bar System
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
       
        </Grid>
      
      <Grid container alignItems="center" spacing={1} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img1}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Products
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Manage your products easily.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img2}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Bottle Database
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">10,000+ bottles. Search & add.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img3}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Recipes
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Cost, quantity & profit calculator.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" spacing={1} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img4}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Barlog
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Inventory audits & variance reports.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img5}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Auto-Orders
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Auto-order via WhatsApp & OpenAI.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img6}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Par Flow
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Auto-fill inventory & orders.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" spacing={1} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
      <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img7}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Vendors
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Search marketplace or add manually.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img8}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Multi Inventory
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Bottles, cases, servings & multi-bar.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
              <CardMedia component="img" image={img9}  />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                       Invoice Scan
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Scan invoices to add products.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
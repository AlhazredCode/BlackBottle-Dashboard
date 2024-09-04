// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function NumberFeatures() {
  return (
    <Container sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
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
                    <Typography variant="h2">Increasing Profits in the hospitality Industry</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">Your future Bar System</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>


      <Grid container alignItems="center" spacing={1} sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
        {[
          { img: img1, title: 'Products', description: 'Manage your products easily.' },
          { img: img2, title: 'Bottle Database', description: '10,000+ bottles. Search & add.' },
          { img: img3, title: 'Recipes', description: 'Cost, quantity & profit calculator.' },
          { img: img4, title: 'Barlog', description: 'Inventory audits & variance reports.' },
          { img: img5, title: 'Auto-Orders', description: 'Auto-order via WhatsApp & OpenAI.' },
          { img: img6, title: 'Par Flow', description: 'Auto-fill inventory & orders.' },
          { img: img7, title: 'Vendors', description: 'Search marketplace or add manually.' },
          { img: img8, title: 'Multi Inventory', description: 'Bottles, cases, servings & multi-bar.' },
          { img: img9, title: 'Invoice Scan', description: 'Scan invoices to add products.' }
        ].map(({ img, title, description }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3, sm: 0 } }}>
            <motion.div
              initial={{ opacity: 0, translateY: 550 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 30,
                delay: 0.2 + index * 0.2
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CardMedia component="img" image={img} sx={{ width: 80, height: 80 }} />
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        ))}
        {/* Espacio vacío para centrar el último elemento en mobile */}
        <Grid item xs={12} sm={6} md={4} sx={{ display: { xs: 'block', sm: 'none' } }}></Grid> 
      </Grid>
    </Container>
  );
}



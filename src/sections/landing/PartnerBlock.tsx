// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third party
import Marquee from 'react-fast-marquee';

// project import
import Animation from './Animation';
import { ThemeDirection, ThemeMode } from 'config';

// assets
const Web = 'assets/images/landing/technology/Web.png';
const Ipad = 'assets/images/landing/technology/Ipad.png';
const Iphone = 'assets/images/landing/technology/Iphone.png';



function Item({ item }: { item: { text: string; highlight?: boolean } }) {
  return (
    <Typography
      variant="h2"
      sx={{
        cursor: 'pointer',
        fontWeight: 600,
        my: 1,
        mx: 4.5,
        transition: 'all 0.3s ease-in-out',
        opacity: item.highlight ? 0.75 : 0.4,
        '&:hover': { opacity: '1' }
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - PARTNER PAGE ||============================== //

export default function PartnerBlock() {
  const theme = useTheme();

  const partnerimage = [
    {
      image: Iphone,
      link: 'https://codedthemes.com/item/mantis-codeigniter-admin-template/'
    },
    {
      image: Ipad,
      link: 'https://mui.com/store/items/mantis-react-admin-dashboard-template/'
    },
    {
      image: Web,
      link: 'https://codedthemes.com/item/mantis-angular-admin-template/'
    },

  ];

  const items = [
    { text: 'Complete Bar Tool' }, 
    { text: '10,000+ Bottles Database' }, // Or any impressive data stat
    { text: 'Customizable Reports' }, 
    { text: 'Powerful Integrations' }, // E.g., POS, Payment, etc.
    { text: 'Intuitive Bar Management' }, 
    { text: 'Real-time Inventory' },
    { text: 'Multi-Bar Support' }, 
    { text: 'Cloud-Based Platform' }, 
    { text: 'Flexible Role Management' }, 
    { text: 'Vendors Marketplace' },
    { text: 'Sleek & Modern Design' }, 
    { text: 'Variance' }, // App-specific
    { text: 'Data-Driven Insights' },
    { text: 'Auto orders' }, 
    { text: '24/7 Customer Support' }, 
    { text: 'Mobile & Web Access' }, 
    { text: 'AI Scan' } 
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="primary">
                    Your Bar, Your Way
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h2"> Manage Your Bar, Anywhere</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                    Access Black Bottle from your computer, tablet, or phone. Our intuitive platform keeps you connected, no matter where you are.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <Animation
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 }
                    }}
                  >
                    <Link href={item.link} target="_blank">
                      <CardMedia component="img" src={item.image} alt="feature" />
                    </Link>
                  </Animation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'}>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'}>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
}

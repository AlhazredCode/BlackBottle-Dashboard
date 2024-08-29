// next
import Image from 'next/image';
import NextLink from 'next/link';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// project import
import Animation from './Animation';
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import SendOutlined from '@ant-design/icons/SendOutlined';
const imgdemo1 = '/assets/images/landing/img-demo1.png';
const imgdemo2 = '/assets/images/landing/img-demo2.png';
const imgdemo3 = '/assets/images/landing/img-demo3.png';

// ==============================|| LANDING - DEMO PAGE ||============================== //

export default function DemoBlock() {
  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
      <Grid item xs={12}>
  <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
    <Grid item sm={10} md={6}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary">
            Black Bottle Complete Solution
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            All-in-One Bar Management
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Streamline your operations with our powerful suite of tools: Digital Menu, Manager App, and Web Dashboard.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>





        <Grid item xs={12} sm={4} md={4}>
  <Animation
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }}
  >
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
            Interactive Digital Menu 
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mb:4}}>
          <Typography variant="body1" color="secondary">
            Browse our menu on any device – phone, tablet, or desktop!
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
        <Box sx={{ position: 'relative', width: `calc(100% + 24px)`, mb: '-30px !important' }}>
                    <Image src={imgdemo2} alt="feature" width={370} height={325} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                  </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Animation>
</Grid>
<Grid item xs={12} sm={4} md={4}>
  <Animation
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }}
  >
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
            Full-Bar-Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mb:4}}>
          <Typography variant="body1" color="secondary">
            Powerful ERP with advanced analytics and streamlined Bar/Sales management. 
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Box sx={{ position: 'relative', width: `calc(100% + 24px)`, mb: '-30px !important' }}>
          <Box sx={{ position: 'relative', width: `calc(100% + 24px)`, mb: '-30px !important' }}>
                    <Image src={imgdemo3} alt="feature" width={370} height={325} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                  </Box>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Animation>
</Grid>
<Grid item xs={12} sm={4} md={4}>
  <Animation
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }}
  >
    <MainCard contentSX={{ p: 3 }}>
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
            Manager App
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{mb:4}}>
          <Typography variant="body1" color="secondary">
            Manage inventory, staff, and all Black Bottle features on the go.
          </Typography>
        </Grid>
       
        <Grid item xs={12}>
          <Box sx={{ position: 'relative', width: `calc(100% + 24px)`, mb: '-30px !important' }}>
          <Box sx={{ position: 'relative', width: `calc(100% + 24px)`, mb: '-30px !important' }}>
                    <Image src={imgdemo1} alt="feature" width={370} height={325} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                  </Box>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  </Animation>
</Grid>

      </Grid>
    </Container>
  );
}

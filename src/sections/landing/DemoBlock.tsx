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
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

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

        {/* Main Cards */}
        {[imgdemo2, imgdemo3, imgdemo1].map((img, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} sx={{ my: { xs: 2, md: 0 }, mx: { xs: 4, md: 0 } }}> {/* Ajustado my y mx */}
            <Animation
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 }
              }}
            >
              <MainCard contentSX={{ p: 3 }}> {/* Eliminado maxWidth */}
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <Typography variant="h3" sx={{ fontWeight: 600, mt: 2 }}>
                      {index === 0 && 'Interactive Digital Menu'}
                      {index === 1 && 'Full-Bar-Dashboard'}
                      {index === 2 && 'Manager App'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 4 }}>
                    <Typography variant="body1" color="secondary">
                      {index === 0 && 'Browse our menu on any device – phone, tablet, or desktop!'}
                      {index === 1 && 'Powerful ERP with advanced analytics and streamlined Bar/Sales management.'}
                      {index === 2 && 'Manage inventory, staff, and all Black Bottle features on the go.'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ position: 'relative', width: '100%', mb: '-30px !important' }}>
                      <Image src={img} alt="feature" width={370} height={325} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    </Box>
                  </Grid>
                </Grid>
              </MainCard>
            </Animation>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
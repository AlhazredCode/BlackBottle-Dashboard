'use client';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { ThemeDirection, ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import SendOutlined from '@ant-design/icons/SendOutlined';

const imgfooterlogo = 'assets/images/landing/codedthemes-logo.svg';
const imgfootersoc1 = 'assets/images/landing/img-soc1.svg';
const imgfootersoc2 = 'assets/images/landing/img-soc2.svg';
const imgfootersoc3 = 'assets/images/landing/img-soc3.svg';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  },
  '&:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

export default function FooterBlock({ isFull }: showProps) {
  const theme = useTheme();
  const { mode, presetColor } = useConfig();
  const textColor = mode === ThemeMode.DARK ? 'text.primary' : 'background.paper';

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  const frameworks = [
    { title: 'CodeIgniter', link: 'https://codedthemes.com/item/mantis-codeigniter-admin-template/' },
    {
      title: 'React MUI',
      link: 'https://mui.com/store/items/mantis-react-admin-dashboard-template/'
    },
    {
      title: 'Angular',
      link: 'https://codedthemes.com/item/mantis-angular-admin-template/'
    },
    {
      title: 'Bootstrap 5',
      link: 'https://codedthemes.com/item/mantis-bootstrap-admin-dashboard/'
    },
    {
      title: '.Net',
      link: 'https://codedthemes.com/item/mantis-dotnet-bootstrap-dashboard-template/'
    }
  ];

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'grey.00',
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 18.75 },
            pb: { xs: 2.5, md: 10 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '80%',
              bottom: 0,
              left: 0,
              background:
                theme.direction === ThemeDirection.RTL
                  ? `linear-gradient(transparent 100%, rgb(31, 31, 31) 70%)`
                  : `linear-gradient(180deg, transparent 0%, ${theme.palette.grey.A700} 70%)`
            }
          }}
        >
         
         
        </Box>
      )}

      <Box sx={{ pt: isFull ? 0 : 10, pb: 10, bgcolor: 'grey.A700' }}  >
        <Container>
          <Grid container spacing={2} sx={{ justifyContent:'center'}}>
            <Grid item xs={12} md={4} >
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2} >
                  <Grid item xs={12} > 
                    <CardMedia component="img" image={imgfooterlogo} sx={{ width: 'auto' , justifySelf: 'center'}} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, color: 'common.white' }}>
                      Since 2017, More than 50K+ Developers trust the CodedThemes Digital Product. Mantis React is Manage under their
                      Experienced Team Players.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
         
          </Grid>
        </Container>
      </Box>
      <Divider sx={{ borderColor: 'grey.700' }} />
     
    </>
  );
}

'use client';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// project import
import { ThemeDirection, ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import LogoSection from 'components/logo'; // Importa el componente LogoSection

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

export default function FooterBlock({ isFull }: showProps) {
  const theme = useTheme();
  const { mode } = useConfig();

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
        />
      )}

      <Box sx={{ pt: isFull ? 0 : 10, pb: 10, bgcolor: 'grey.A700' }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <LogoSection />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, color: theme.palette.primary[400] }}>
                      Black Bottle: The smart solution for bar management. Streamline your operations, optimize inventory, and maximize profits with our AI-powered platform.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>

          {/* Agregado "All Rights Reserved" dentro de un Grid para centrarlo */}
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="caption" sx={{ color: theme.palette.grey[400] }}>
                © {new Date().getFullYear()} Black Bottle. All Rights Reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
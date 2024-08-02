'use client';

import { ReactElement } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'components/MainCard';


// ==============================|| FORMS WIZARD ||============================== //

export default function FormsWizard({ children }: { children: ReactElement }) {
  return (
    <MainCard>
      <Grid container spacing={2.5} justifyContent="center">
        <Grid item xs={12} md={6} lg={7}>
           {children}
        </Grid>
      
      </Grid>
    </MainCard>
  );
}

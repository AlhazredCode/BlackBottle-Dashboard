'use client'
import SamplePage from 'views/sample-page';
import { Grid } from '@mui/material';
import VendorsBacklog from 'sections/apps/e-commerce/Vendors';
import MainCard from 'components/MainCard';
import VendorView from 'sections/widget/data/VendorView';
// ==============================|| PAGE ||============================== //

export default function SampleViewPage() {
  return <Grid container spacing={2}>
    <Grid item xs={8}>
    <MainCard title="Your vendors">
    <VendorsBacklog />
    </MainCard>
     
    </Grid>
    <Grid item xs={4}>
      <VendorView />
    </Grid>
  </Grid>;
}

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'components/MainCard';
import ProductWizard from 'sections/forms/wizard/product-wizard';

// ==============================|| FORMS WIZARD ||============================== //

export default function FormsWizard() {
  return (
    <MainCard>
      <Grid container spacing={2.5} justifyContent="center">
        <Grid item xs={12} md={6} lg={7}>
          <ProductWizard />
        </Grid>
      
      </Grid>
    </MainCard>
  );
}

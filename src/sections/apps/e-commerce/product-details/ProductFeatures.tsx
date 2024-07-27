// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// ==============================|| PRODUCT DETAILS - FEATURES ||============================== //

export default function ProductFeatures() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={3}>
        <Typography color="text.secondary">Name :</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Product Name</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">Brand :</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Corona</Typography>
      </Grid>

     
      <Grid item xs={3}>
        <Typography color="text.secondary">Price :</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>$ 999</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">Purchase Cost :</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>$ 599</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">Case Size:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>12</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">Par</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>12</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography color="text.secondary">UPC</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>12</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">SKU</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>12123123</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography color="text.secondary">Taste</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Beer</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography color="text.secondary">Varietal</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>Default</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography color="text.secondary">Provider Number</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>+1 599 99 999</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography color="text.secondary">Description</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>This is a large and full size product description</Typography>
      </Grid>


    
    </Grid>
  );
}

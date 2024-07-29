// material-ui
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
import { Box } from '@mui/material';
// ==============================|| BASIC WIZARD - ADDRESS ||============================== //

export default function ProductForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 4, paddingLeft: 2 }}>
        Product info
      </Typography>

    

      <Grid container spacing={3} >
        <Grid container spacing={3} xs={12} >
          <Grid item xs={12} sm={6} >
            <MainCard sx={{ margin: 3 }} >

              <CardMedia

                component="img"
                image={`/assets/images/e-commerce/SampleImg.png`}
                title="Scroll Zoom"
                sx={{ borderRadius: `4px`, position: 'relative' }}
              />

            </MainCard>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Product name</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Product Name" fullWidth autoComplete="given-name" />
              <InputLabel>Brand</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="Brandname" fullWidth autoComplete="family-name" />
              <InputLabel sx={{ mb: 1 }}>Product Description</InputLabel>
              <TextField placeholder="Enter product brand" fullWidth multiline rows={6} />
            </Stack>
          </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginX:2}}>
          <Stack spacing={1}>
            <InputLabel>Menu Category</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Choose category"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>
       
       
          <Grid item xs={12} sm={6}  >
            <Stack spacing={1}>
              <InputLabel sx={{paddingLeft: 2}}>Price</InputLabel>
              <TextField sx={{paddingLeft: 2}} required id="cityBasic" name="city" placeholder="Price" fullWidth autoComplete="shipping address-level2" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel sx={{paddingRight: 2}}>Purchase Cost </InputLabel>
              <TextField sx={{paddingRight: 2}} id="stateBasic" name="state" placeholder="Purchase Cost" fullWidth />
            </Stack>
          </Grid>
      
        

      </Grid>
    </>
  );
}

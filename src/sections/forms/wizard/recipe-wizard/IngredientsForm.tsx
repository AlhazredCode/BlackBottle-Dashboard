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

export default function DetailsForm() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2, paddingLeft: 2 }}>
        Product Details
      </Typography>

    

      <Grid container spacing={0} >
        <Grid container spacing={2} sx={{paddingLeft: 2, marginBottom: 2}} xs={12} >
        <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>ABV</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="ABV" fullWidth autoComplete="given-name" />
              <InputLabel>SKU</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="SKU" fullWidth autoComplete="family-name" />
   
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Par</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Par" fullWidth autoComplete="given-name" />
              <InputLabel>Case Size</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="Case Size" fullWidth autoComplete="family-name" />
            </Stack>
          </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginX:2}}>
          <Stack spacing={1}>
            <InputLabel>Suplier Phone Number</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Suplier Number of this Product"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>
       
       
         
      
        

      </Grid>
    </>
  );
}

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

export default function Extra() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 2, paddingLeft: 2 }}>
        Extra Info
      </Typography>

    

      <Grid container spacing={0} >
        <Grid container spacing={2} sx={{paddingLeft: 2, marginBottom: 2}} xs={12} >
        <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>UPC</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="UPC" fullWidth autoComplete="given-name" />
              <InputLabel>Weight</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="Weight" fullWidth autoComplete="family-name" />
   
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Region</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Region" fullWidth autoComplete="given-name" />
              <InputLabel>Type</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="Type" fullWidth autoComplete="family-name" />
            </Stack>
          </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginX:2}}>
          <Stack spacing={1}>
            <InputLabel>Taste</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Taste"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{margin:2}}>
          <Stack spacing={1}>
            <InputLabel>Varietal</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Varietal"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>
       
       
         
      
        

      </Grid>
    </>
  );
}

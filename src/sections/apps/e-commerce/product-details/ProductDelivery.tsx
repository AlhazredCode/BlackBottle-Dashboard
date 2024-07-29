// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';

import CustomerListPage from 'views/apps/customer/list';
// ==============================|| PRODUCT DETAILS - FEATURES ||============================== //

export default function ProductDelivery() {
  return (
    <Grid container spacing={2} sx={{paddingLeft:2}}>
        <Grid item xs={12}>
          <Typography variant="h5" >Create Order</Typography>
        </Grid>

        <Grid item xs={12}>
        <Stack  direction='row' spacing={6} sx={{mb:3}} >
           <Grid item xs={6}>
              <InputLabel sx={{mb:2}}>Bottles</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Bottles" fullWidth autoComplete="given-name" />
              </Grid>

              <Grid item xs={6}>
              <InputLabel  sx={{mb:2}}>Cases</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Cases" fullWidth autoComplete="given-name" />
              </Grid>
   
            
          </Stack>
          <Button  color='secondary' size='large' variant='contained' fullWidth> Place Order</Button>

          </Grid>
          <Grid item xs={12}>
          <Typography variant="h5" >Order History</Typography>
        </Grid>

        <Grid item xs={12}>
          <CustomerListPage/>
        </Grid>
    </Grid>
  );
}

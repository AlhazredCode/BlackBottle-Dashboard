'use client';



// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project import
import ProductBacklog from 'sections/apps/e-commerce/product-backlog';



// ==============================|| APPLICATION - KANBAN ||============================== //

export default function ProductListPage() {
;
  



  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
         
          </Grid>
          <Grid item xs={12}>
       
           <ProductBacklog />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

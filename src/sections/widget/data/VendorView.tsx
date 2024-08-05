// next
import NextLink from 'next/link';

// material-ui
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
// project imports
import MainCard from 'components/MainCard';
import { Vendor } from 'types/vendors';
import vendorsData from 'api/sample-vendors'; 
import { margin, padding } from '@mui/system';

// Estilos para la imagen
const mediaSX = {
  width: 70,
  height: 70,
  padding: 4,
  borderRadius: 1
};

// ===========================|| DATA WIDGET - LATEST POSTS ||=========================== //

export default function VendorView() {
  // Datos de vendors
  const vendors: Vendor[] = vendorsData;

  return (
    <MainCard
      title="Discover Vendors" 
      content={false}
      secondary={
        <NextLink href="#" passHref legacyBehavior>
          <Link color="primary">View all</Link>
        </NextLink>
      }
    >
      <CardContent>
        <Grid  sx={{mb:2}}>
        <ProductsSearch/>
        </Grid>
        <Grid container spacing={3}>
          {vendors.map((vendor) => (
            <Grid item xs={12} sm={12} md={12} key={vendor.id}> 
              <MainCard content={false}> 
                <Grid container alignItems="center" spacing={2}>
                  <Grid item sx={{m:1}}>
                    <img 
                      src={`/assets/images/e-commerce/placeholder-vendor.png`} 
                      alt={vendor.companyName}
                      style={mediaSX} 
                    
                    />
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">{vendor.companyName}</Typography>
                        <Typography variant="caption" color="secondary">
                          {vendor.address.city}, {vendor.address.state}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </MainCard>
  );
}
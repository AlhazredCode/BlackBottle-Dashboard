// next
import NextLink from 'next/link';

// material-ui
import CardContent from '@mui/material/CardContent';
import { Table } from '@mui/material';
import {TableCell} from '@mui/material';
import {TableRow} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableContainer} from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import {Stack} from '@mui/system';
import Typography from '@mui/material/Typography';
import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
// project imports
import MainCard from 'components/MainCard';
import { Vendor } from 'types/vendors';
import vendorsData from 'api/sample-vendors'; 
import { margin, padding } from '@mui/system';

// Estilos para la imagen
const mediaSX = {
  width: 80,
  height: 80,
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
      

      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
                <TableCell>
                <Stack spacing={3} direction='row'>
          {vendors.map((vendor) => (
            <Grid item xs={12} sm={12} md={12} key={vendor.id}> 
              <MainCard content={false}> 
                <Stack  alignItems="center" spacing={2} direction='row'>
                  <Grid item sx={{m:1}}>
                    <img 
                      src={`/assets/images/vendors/${vendor.Image}`}
                      alt={vendor.companyName}
                      style={mediaSX} 
                      
                    
                    />
                  </Grid>
                  <Grid item xs sx={{minWidth: 120}}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography variant="h6">{vendor.companyName}</Typography>
                        <Typography variant="caption" color="secondary">
                          {vendor.address.city}, {vendor.address.state}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Stack>
              </MainCard>
            </Grid>
          ))}
        </Stack>
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        
      </CardContent>
    </MainCard>
  );
}
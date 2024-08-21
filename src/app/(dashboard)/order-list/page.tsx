'use client';

import OrderListPage from "views/apps/order-list/product-list";
import useMediaQuery from '@mui/material/useMediaQuery';

// ==============================|| PAGE ||============================== //
import { Grid } from '@mui/material';
import VendorsBacklog from 'sections/apps/e-commerce/Vendors';
import MainCard from 'components/MainCard';
import VendorView from 'sections/widget/data/VendorView';
import VendorsCheckout from 'views/apps/e-commerce/vendors-checkout';
import AnalyticOrder from "components/cards/statistics/AnalyticOrder";
import { useTheme } from "@mui/material";
import ordersData from 'api/sample-orders';

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page() {

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const totalOrders = ordersData.length;
  const totalSales = ordersData.reduce((sum, order) => sum + order.total, 0);
  const totalItemsSold = ordersData.reduce(
    (sum, order) =>
      sum + order.products.reduce((productSum, product) => productSum + product.quantity, 0),
    0
  );

  const pendingOrdersPercentage = (ordersData.filter(order => order.status === 'Pending').length / totalOrders) * 100;


  return (

  <Grid container spacing={2}>
    <Grid item xs={12}>
    <MainCard theme={theme} sx={{ width: '100%', mb: 2, ml: 1 }} >


<Grid container xs={12} sx={{ pl: 1, py: 1 }} spacing={2}>

  <Grid item xs={12} sm={6} md={4} lg={3}>
    <AnalyticOrder
      color={'secondary'}
      title="Total Orders"
      count={totalOrders.toLocaleString()}
      percentage={0} // Puedes calcular un porcentaje si lo necesitas
      extra="" // Espacio vacío si no hay información extra
    />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <AnalyticOrder
      title="Items Sold"
      color={'secondary'}
      count={totalItemsSold.toLocaleString()}
      percentage={0}
      extra=""
    />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <AnalyticOrder
      title="Pending Orders"
      count={ordersData.filter(order => order.status === 'Pending').length.toLocaleString()}
      percentage={parseFloat(pendingOrdersPercentage.toFixed(2))} // Corregido para ser un número
      color="warning"
      extra=""
    />
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <AnalyticOrder
      title="Total Sales"
      count={`$${totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
      percentage={0}
      color="success"
      extra=""
    />
  </Grid>
</Grid>

</MainCard>
    </Grid>
  <Grid item xs={8}>
  <MainCard >
  <OrderListPage />
  </MainCard>
   
  </Grid>
  <Grid item xs={4}>
    <VendorsCheckout />
  </Grid>
</Grid>) ;
}

// Return a list of `params` to populate the [slug] dynamic segment



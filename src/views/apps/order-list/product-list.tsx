'use client';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainCard from 'components/MainCard';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import OrdersBacklog from 'sections/apps/e-commerce/Backlogs-Orders';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import FilterOutlined from '@ant-design/icons/FilterOutlined';
import ordersData from 'api/sample-orders';
import AnalyticOrder from 'components/cards/statistics/AnalyticOrder';
export default function OrderListPage() {
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
    <>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={1} xs={12}>
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

          <Grid item xs={12}>

            <Grid container xs={12} sx={{mb: 3}}>

              <Grid item xs={12}>
                <MainCard content={false}>
                  <Stack
                    direction={matchDownSM ? 'column' : 'row'}
                    alignItems={matchDownSM ? 'space-between' : 'center'}
                    justifyContent={matchDownSM ? 'center' : 'space-between'}
                    sx={{ p: 2 }}
                    spacing={2}
                  >
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5}>
                      <Button color="secondary" startIcon={<FilterOutlined />}>
                        <Typography variant="h6">Filter</Typography>
                      </Button>

                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchOutlined />
                            </InputAdornment>
                          )
                        }}
                        placeholder="Search Product"
                        size="medium"
                      />
                    </Stack>
                    <Button variant="outlined" size="large" color="secondary" endIcon={<DownOutlined />}>
                      Sort by
                    </Button>
                  </Stack>
                </MainCard>
              </Grid>

            </Grid>

            <OrdersBacklog />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

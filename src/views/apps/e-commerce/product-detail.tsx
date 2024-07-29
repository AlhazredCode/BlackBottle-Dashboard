'use client';

import { useEffect, useState, SyntheticEvent, useMemo } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

// types
import { Products, TabsProps } from 'types/e-commerce';

// project imports
import MainCard from 'components/MainCard';
import CircularLoader from 'components/CircularLoader';
import FloatingCart from 'components/cards/e-commerce/FloatingCart';
import ProductFeatures from 'sections/apps/e-commerce/product-details/ProductFeatures';
import ProductImages from 'sections/apps/e-commerce/product-details/ProductImages';
import ProductInfo from 'sections/apps/e-commerce/product-details/ProductInfo';
import ProductDelivery from 'sections/apps/e-commerce/product-details/ProductDelivery';
import ProductHistory from 'sections/dashboard/analytics/ProductHistory';
import ProductSettings from 'sections/apps/e-commerce/product-details/ProductSettings';
import { resetCart, useGetCart } from 'api/cart';
import { handlerActiveItem, useGetMenuMaster } from 'api/menu';
import { useGetProducts } from 'api/products';

function TabPanel({ children, value, index, ...other }: TabsProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-details-tabpanel-${index}`}
      aria-labelledby={`product-details-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `product-details-tab-${index}`,
    'aria-controls': `product-details-tabpanel-${index}`
  };
}

type Props = {
  id: string;
};

// ==============================|| PRODUCT DETAILS - MAIN ||============================== //

export default function ProductDetails({ id }: Props) {
  const { menuMaster } = useGetMenuMaster();
  const openedItem = menuMaster.openedItem;

  const { productsLoading, products } = useGetProducts();
  const [product, setProduct] = useState<Products | null>(null);

  const { cart } = useGetCart();

  useEffect(() => {
    if (id && !productsLoading) {
      setProduct(products.filter((item: Products) => item.id.toString() === id)[0] || products[0]);
    }
  }, [id, products, productsLoading]);

  useEffect(() => {
    if (openedItem !== 'product-details') handlerActiveItem('product-details');
  }, [openedItem]);

  // product description tabs
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    // clear cart if complete order
    if (cart && cart.step > 2) {
      resetCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productImages = useMemo(() => <ProductImages product={product!} />, [product]);


  const loader = (
    <Box sx={{ height: 504 }}>
      <CircularLoader />
    </Box>
  );

  const isLoader = productsLoading || product === null;

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <MainCard>
            {isLoader && loader}
            {!isLoader && (
              <Grid container spacing={6}>
                <Grid item xs={12} sm={5}>
                  {productImages}
                </Grid>
                <Grid item xs={'auto'} sm={7}>
                  <ProductInfo product={product} />
                </Grid>
              </Grid>
            )}
          </MainCard>
        </Grid>
        <Grid item xs={12} >
          <MainCard>
            <Stack spacing={3}>
              <Stack>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  onChange={handleChange}
                  aria-label="product description tabs example"
                  variant="scrollable"
                >
                  <Tab label="Item" {...a11yProps(0)} />
                  <Tab label="Delivery" {...a11yProps(1)} />
                  <Tab label="Settings" {...a11yProps(2)} />
                  <Tab
                    label='History'
                    {...a11yProps(3)}
                  />
                </Tabs>
                <Divider />
              </Stack>
              <TabPanel value={value} index={0}>
                <ProductFeatures />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ProductDelivery />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ProductSettings/>
                
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ProductHistory />
              </TabPanel>
            </Stack>
          </MainCard>
        </Grid>
       
      </Grid>

      <FloatingCart />
    </>
  );
}

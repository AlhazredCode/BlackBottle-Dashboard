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
import ProductReview from 'sections/apps/e-commerce/product-details/ProductReview';
import ProductSpecifications from 'sections/apps/e-commerce/product-details/ProductSpecifications';

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
                  <Tab label="Features" {...a11yProps(0)} />
                  <Tab label="Specifications" {...a11yProps(1)} />
                  <Tab label="Overview" {...a11yProps(2)} />
                  <Tab
                    label={
                      <Stack direction="row" alignItems="center">
                        Reviews{' '}
                        <Chip
                          label={isLoader ? <Skeleton width={30} /> : String(product.offerPrice?.toFixed(0))}
                          size="small"
                          sx={{
                            ml: 0.5,
                            color: value === 3 ? 'primary.main' : 'grey.0',
                            bgcolor: value === 3 ? 'primary.lighter' : 'grey.400',
                            borderRadius: '10px'
                          }}
                        />
                      </Stack>
                    }
                    {...a11yProps(3)}
                  />
                </Tabs>
                <Divider />
              </Stack>
              <TabPanel value={value} index={0}>
                <ProductFeatures />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ProductSpecifications />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Stack spacing={2.5}>
                  <Typography color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                    dummy text ever since the 1500s,{' '}
                    <Typography component="span" variant="subtitle1">
                      {' '}
                      &ldquo;When an unknown printer took a galley of type and scrambled it to make a type specimen book.&rdquo;
                    </Typography>{' '}
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                  <Typography color="text.secondary">
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={3}>
                {!isLoader && <ProductReview product={product} />}
              </TabPanel>
            </Stack>
          </MainCard>
        </Grid>
       
      </Grid>

      <FloatingCart />
    </>
  );
}

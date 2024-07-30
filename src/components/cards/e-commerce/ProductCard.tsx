import { useEffect, useState } from 'react';

// next
import NextLink from 'next/link';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// types
import { ProductCardProps } from 'types/cart';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SkeletonProductPlaceholder from 'components/cards/skeleton/ProductPlaceholder';
import { useGetCart, addToCart } from 'api/cart';
import { openSnackbar } from 'api/snackbar';

// types
import { SnackbarProps } from 'types/snackbar';

// assets
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';

// ==============================|| PRODUCT CARD ||============================== //

export default function ProductCard({
  id,
  color,
  name,
  brand,
  offer,
  isStock,
  image,
  description,
  offerPrice,
  salePrice,
  rating
}: ProductCardProps) {
  const theme = useTheme();
  const { cart } = useGetCart();

  const prodProfile = image && `/assets/images/e-commerce/${image}`;
  const [wishlisted, setWishlisted] = useState<boolean>(false);

  const addCart = () => {
    addToCart({ id, name, image, salePrice, offerPrice, color, size: 8, quantity: 1, description }, cart.products);
    openSnackbar({
      open: true,
      message: 'Add To Cart Success',
      variant: 'alert',
      alert: {
        color: 'success'
      }
    } as SnackbarProps);
  };

  const addToFavourite = () => {
    setWishlisted(!wishlisted);
    openSnackbar({
      open: true,
      message: 'Added to favourites',
      variant: 'alert',
      alert: {
        color: 'success'
      }
    } as SnackbarProps);
  };

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonProductPlaceholder />
      ) : (
        <MainCard
          content={false}
          boxShadow
          sx={{
            '&:hover': {
              transform: 'scale3d(1.02, 1.02, 1)',
              transition: 'all .4s ease-in-out'
            }
          }}
        >
          <NextLink href={`/apps/e-commerce/product-details/${id}`} passHref legacyBehavior>
            <Box sx={{ width: 250, m: 'auto' }}>
              <CardMedia sx={{ cursor: 'pointer', height: 250, textDecoration: 'none', opacity: isStock ? 1 : 0.25 }} image={prodProfile} />
            </Box>
          </NextLink>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%', position: 'absolute', top: 0, pt: 1.75, pl: 2, pr: 1 }}
          >
            {!isStock && <Chip variant="light" color="error" size="small" label="Sold out" />}
            {offer && <Chip label='In Stock' variant="combined" color="success" size="small" />}
      
          </Stack>
          <Divider />
          <CardContent sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack>
                <Stack spacing={1}>
                <Stack spacing={2} direction='row' useFlexGap justifyContent="space-between">
                  <Chip variant="light" color="secondary" sx={{ marginBottom: 2 }} size="large" label="2 : Unit" />
                  <Chip variant="light" color="secondary" sx={{ marginBottom: 2 }} size="large" label="4 : Par" />
                </Stack>

                  <NextLink href={`/apps/e-commerce/product-details/${id}`} passHref legacyBehavior>
                    
                    
                      <Typography
                        color="text.primary"
                        variant="h5"
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'block', cursor: 'pointer' }}
                      >
                        {name}
                      </Typography>
                                        </NextLink>
                                        <Typography variant="h6" color="text.secondary">
                      {brand}
                                        </Typography>
                    </Stack>
                </Stack>
                </Grid>
       
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" flexWrap="wrap" rowGap={1.75}>
                  <Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="h2">${offerPrice}</Typography>
                  
                    </Stack>

                  </Stack>


                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
}

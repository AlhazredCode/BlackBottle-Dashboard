import { useState } from 'react';

// next
import { useRouter } from 'next/navigation';

// material-ui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Chip from '@mui/material/Chip';

import FormHelperText from '@mui/material/FormHelperText';


import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';

// project imports

import { addToCart, useGetCart } from 'api/cart';
import { openSnackbar } from 'api/snackbar';

// types
import { SnackbarProps } from 'types/snackbar';
import {  Products } from 'types/e-commerce';

// assets
import DownOutlined from '@ant-design/icons/DownOutlined';

import UpOutlined from '@ant-design/icons/UpOutlined';

// product color select


const validationSchema = yup.object({
  color: yup.string().required('Color selection is required')
});

// ==============================|| COLORS OPTION ||============================== //


// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

export default function ProductInfo({ product }: { product: Products }) {
  const theme = useTheme();

  const [value, setValue] = useState<number>(1);
  const router = useRouter();
  const { cart } = useGetCart();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: product.id,
      name: product.name,
      image: product.image,
      salePrice: product.salePrice,
      offerPrice: product.offerPrice,
     
      size: '',
      quantity: 1
    },
    validationSchema,
    onSubmit: (values) => {
      values.quantity = value;
      addToCart(values, cart.products);
      openSnackbar({
        open: true,
        message: 'Submit Success',
        variant: 'alert',
        alert: {
          color: 'success'
        }
      } as SnackbarProps);

      router.push('/apps/e-commerce/checkout');
    }
  });

  const {  handleSubmit } = formik;



  return (
    <Stack spacing={2}>

      <Typography variant="h2">{product.name}</Typography>
      <Chip
        size="small"
        label={product.isStock ? 'In Stock' : 'Out of Stock'}
        sx={{
          width: 'fit-content',
          borderRadius: '4px',
          color: product.isStock ? 'success.main' : 'error.main',
          bgcolor: product.isStock ? 'success.lighter' : 'error.lighter'
        }}
      />
        <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h1">${product.offerPrice}</Typography>
              {product.salePrice && (
                <Typography variant="h4" color="text.secondary" sx={{ textDecoration: 'line-through', opacity: 0.5, fontWeight: 400 }}>
                  ${product.salePrice}
                </Typography>
              )}
            </Stack>
      <Typography color="text.secondary" variant='subtitle1'>{product.about}</Typography>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2}>
          
           <Typography  variant='h5'>Bar 1</Typography>
           <Grid container xs={12}> 
         
           
              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Bottles</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>


              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Cases</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>
           
            </Grid>     

            <Typography  variant='h5'>Bar 2</Typography>
           <Grid container xs={12}> 
         
           
              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Bottles</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>


              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Cases</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>
           
            </Grid>     

            <Typography  variant='h5'>Bar 3</Typography>
           <Grid container xs={12}> 
         
           
              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Bottles</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>


              <Grid item xs={6}>
                
                <Stack spacing={6} alignItems='center' direction='row'>
                <Typography color="text.secondary">Cases</Typography>
                  <Stack direction="row">
                    <TextField
                      name="rty-incre"
                      value={value > 0 ? value : ''}
                      onChange={(e: any) => setValue(Number(e.target.value))}
                      sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0, borderTopLeftRadius: 12, borderBottomLeftRadius: 12} }}
                    />
                    <Stack>
                      <Button
                        key="one"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setValue(value + 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderTopRightRadius: 8,
                          borderLeft: 'none',
                          '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <UpOutlined style={{ fontSize: 'small' }} />
                      </Button>
                      <Button
                        key="three"
                        color="secondary"
                        variant="outlined"
                        disabled={value <= 1}
                        onClick={() => setValue(value - 1)}
                        sx={{
                          px: 1.5,
                          py: 0.65,
                          minWidth: '0px !important',
                          borderRadius: 0,
                          borderBottomRightRadius: 8,
                          borderTop: 'none',
                          borderLeft: 'none',
                          '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light },
                          '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: theme.palette.secondary.light }
                        }}
                      >
                        <DownOutlined style={{ fontSize: 'small' }} />
                      </Button>
                    </Stack>
                  </Stack>
                  {value === 0 && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                  )}
                </Stack>
              </Grid>
           
            </Grid>     

           
        
           

           
          </Stack>
       
        </Form>
      </FormikProvider>
    </Stack>
  );
}

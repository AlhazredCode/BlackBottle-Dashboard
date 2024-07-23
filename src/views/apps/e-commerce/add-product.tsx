'use client';

import { useState } from 'react';

// next
// import { useRouter } from 'next/navigation';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
// project import
import MainCard from 'components/MainCard';
import { useTheme } from '@mui/material/styles';
// assets
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';

import UpOutlined from '@ant-design/icons/UpOutlined';

// ==============================|| ADD NEW PRODUCT - MAIN ||============================== //



export default function AddNewProduct() {
  const theme = useTheme();


  const quantities = [
    {
      value: 'one',
      label: '1'
    },
    {
      value: 'two',
      label: '2'
    },
    {
      value: 'three',
      label: '3'
    }
  ];

  const statuss = [
    {
      value: 'in stock',
      label: 'In Stock'
    },
    {
      value: 'out of stock',
      label: 'Out of Stock'
    }
  ];





  const [quantity, setQuantity] = useState('one');
  
  


  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };



  return (
    <MainCard>
      <Stack spacing={2}>
      
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProductsSearch   />
        </Grid>
          <Grid item xs={12} sm={6}>
            <MainCard>
              <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                  <Typography variant='h5'> Product Info</Typography>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Product Name</InputLabel>
                  <TextField placeholder="Enter product name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Product Brand</InputLabel>
                  <TextField placeholder="Enter product name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Product Description</InputLabel>
                  <TextField placeholder="Enter product brand" fullWidth multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Qty</InputLabel>
                  <TextField placeholder="Select quantity" fullWidth select value={quantity} onChange={handleQuantity}>
                    {quantities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel sx={{ mb: 1 }}>Category</InputLabel>
                  <TextField placeholder="Enter your category" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" spacing={2}>
                    <Grid item xs={6}>
                      <InputLabel sx={{ mb: 1 }}>Price</InputLabel>
                      <TextField placeholder="Enter your price" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <InputLabel sx={{ mb: 1 }}>Purchase Cost</InputLabel>
                      <TextField placeholder="Enter your purchase cost" fullWidth />
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainCard>
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <Typography variant='h5'>Inventory</Typography>
                    <InputLabel sx={{ mb: 1 }}>Status</InputLabel>
                    <TextField placeholder="Select status" fullWidth select  >
                      {statuss.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Stack spacing={1}>
                      <Typography variant='h5'>Bar 1</Typography>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography color="text.secondary">Bottles</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                        <Typography color="text.secondary">Cases</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant='h5'>Bar 2</Typography>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography color="text.secondary">Bottles</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                        <Typography color="text.secondary">Cases</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant='h5'>Bar 3</Typography>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography color="text.secondary">Bottles</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                        <Typography color="text.secondary">Cases</Typography>
                        <Stack justifyContent="flex-end">
                          <Stack direction="row">
                            <TextField
                              name="rty-incre"
                              sx={{ '& .MuiOutlinedInput-input': { p: 1.9 }, width: '50%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                            />
                            <Stack>
                              <Button
                                key="one"
                                color="secondary"
                                variant="outlined"
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                                sx={{
                                  px: 1.5,
                                  py: 0.65,
                                  minWidth: '0px !important',
                                  borderRadius: 0,
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
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <Button variant="outlined" color="secondary" size='large' startIcon={<UploadOutlined />} sx={{ mt: 1, textTransform: 'none' }}>
                      Click to Upload
                    </Button>
                    <Typography color="error.main">
                      *{' '}
                      <Typography component="span" color="text.secondary">
                        Recommended resolution is 640*640 with file size
                      </Typography>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard>
              <Button variant="contained" color='secondary' fullWidth={true} size='large' sx={{ textTransform: 'none' }}>
                Add new Product
              </Button>
            </MainCard>
          </Grid>
        </Grid>
      </Stack>
    </MainCard>
  );
}



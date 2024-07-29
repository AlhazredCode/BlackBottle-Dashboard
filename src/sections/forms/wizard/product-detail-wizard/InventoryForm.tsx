// material-ui
'use client';
import { useState } from 'react';   
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
import { Box } from '@mui/material';  
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


import { useTheme } from '@mui/material/styles';
// assets
import UploadOutlined from '@ant-design/icons/UploadOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';

import UpOutlined from '@ant-design/icons/UpOutlined';

// ==============================|| BASIC WIZARD - ADDRESS ||============================== //

export default function InventoryForm() {
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
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 5 }}>
        Product info
      </Typography>

      <Grid item xs={12} sx={{ mb: 6 }}>
        <ProductsSearch />
      </Grid>

      <Grid container spacing={3} >
        <Grid container spacing={3} xs={12} >
          <Grid item xs={12} sm={6} >
            <MainCard sx={{ margin: 3 }} >

              <CardMedia

                component="img"
                image={`/assets/images/e-commerce/SampleImg.png`}
                title="Scroll Zoom"
                sx={{ borderRadius: `4px`, position: 'relative' }}
              />

            </MainCard>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Product name</InputLabel>

              <TextField required id="firstNameBasic" name="firstName" placeholder="Product Name" fullWidth autoComplete="given-name" />
              <InputLabel>Brand</InputLabel>
              <TextField required id="lastNameBasic" name="lastName" placeholder="Brandname" fullWidth autoComplete="family-name" />
              <InputLabel sx={{ mb: 1 }}>Product Description</InputLabel>
              <TextField placeholder="Enter product brand" fullWidth multiline rows={6} />
            </Stack>
          </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginX:2}}>
          <Stack spacing={1}>
            <InputLabel>Menu Category</InputLabel>
            <TextField
              required
              id="address1Basic"
              name="address1"
              placeholder="Choose category"
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Stack>
        </Grid>
       
       
          <Grid item xs={12} sm={6}  >
            <Stack spacing={1}>
              <InputLabel sx={{paddingLeft: 2}}>Price</InputLabel>
              <TextField sx={{paddingLeft: 2}} required id="cityBasic" name="city" placeholder="Price" fullWidth autoComplete="shipping address-level2" />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel sx={{paddingRight: 2}}>Purchase Cost </InputLabel>
              <TextField sx={{paddingRight: 2}} id="stateBasic" name="state" placeholder="Purchase Cost" fullWidth />
            </Stack>
          </Grid>

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
      
        

      </Grid>
    </>
  );
}

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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
// project import
import ProductBacklog from 'sections/apps/e-commerce/Backlogs';

import SearchOutlined from '@ant-design/icons/SearchOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import FilterOutlined from '@ant-design/icons/FilterOutlined';
import { width } from '@mui/system';
import { LinkOutlined, PlusOutlined, ShareAltOutlined } from '@ant-design/icons';


// ==============================|| APPLICATION - KANBAN ||============================== //

export default function ProductListPage() {

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));


  ;




  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={1}  xs={12}>
          <Grid item xs={12}>

          </Grid>


          <MainCard theme={theme} sx={{width: '100%', mb: 2, ml:1}} >
            <Grid container spacing={2.5} xs={12}>
              <Grid item xs={6}>
                <Typography variant='h2'> Cost of Stock</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h2' color='GrayText' textAlign='right' > $ 1450</Typography>
              </Grid>
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
                    <Stack direction="row" alignItems="center" spacing={2}>
                    <Button  size="large" color="secondary" endIcon={<DownOutlined />}>
                      Sort by
                    </Button>
                    <Button variant="dashed" size="large" color="secondary" endIcon={<PlusOutlined />}>
                      Menu
                    </Button>
                    <Button variant="dashed" size="large" color="secondary" endIcon={<PlusOutlined />}>
                      Sub Menu
                    </Button>
                    <Button variant="contained" size="large" color="secondary" endIcon={<LinkOutlined />}>
                     Link
                    </Button>
                    <Button variant="outlined" size="large"  endIcon={<ShareAltOutlined />}>
                      Share
                    </Button>
                  
                    </Stack>
                  </Stack>
                </MainCard>
              </Grid>
              
            </Grid>
          </MainCard>
          <Grid item xs={12}>

            <ProductBacklog />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

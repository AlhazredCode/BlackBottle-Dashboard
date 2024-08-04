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
import RecipesBacklog from 'sections/apps/e-commerce/Recipes';

import SearchOutlined from '@ant-design/icons/SearchOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import FilterOutlined from '@ant-design/icons/FilterOutlined';
import { width } from '@mui/system';


// ==============================|| APPLICATION - KANBAN ||============================== //

export default function RecipesListPage() {

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
                        placeholder="Search Recipes"
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
          </MainCard>
          <Grid item xs={12}>

            <RecipesBacklog />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

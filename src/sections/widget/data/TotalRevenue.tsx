// material-ui
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';
import SimpleBar from 'components/third-party/SimpleBar';

// assets
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined';
import CaretUpOutlined from '@ant-design/icons/CaretUpOutlined';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

export default function TotalRevenue() {
  const successSX = { color: 'success.main' };
  const errorSX = { color: 'error.main' };

  return (
    <MainCard title="Revenue by Category" content={false}>
    <SimpleBar sx={{ height: 334 }}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          '& svg': {
            width: 32,
            my: -0.75,
            ml: -0.75,
            mr: 0.75
          }
        }}
      >
        <ListItemButton>
          <ListItemIcon sx={successSX}> {/* Assuming successSX is for positive values */}
            <CaretUpOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Beers</span>
                <Typography sx={successSX}>+ $245.85</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon sx={errorSX}> {/* Assuming errorSX is for negative values */}
            <CaretDownOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Wine</span>
                <Typography sx={errorSX}>+ $1,368</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon sx={successSX}> {/* Assuming errorSX is for negative values */}
            <CaretUpOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Wiskey</span>
                <Typography sx={successSX}>+ $1,368</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon sx={successSX}> {/* Assuming errorSX is for negative values */}
            <CaretUpOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Drinks</span>
                <Typography sx={successSX}>- $1,368</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon sx={successSX}>
            <CaretUpOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Tequila</span>
                <Typography sx={successSX}>+ $5,458.63</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon sx={successSX}> 
            <CaretUpOutlined />
          </ListItemIcon>
          <ListItemText
            primary={
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <span>Cocktails</span>
                <Typography sx={successSX}>+ $890.00</Typography> 
              </Stack>
            }
          />
        </ListItemButton>
        <Divider />
        {/* ... Add more ListItemButtons for other liquor categories ... */}
      </List>
    </SimpleBar>
  </MainCard>
  );
}

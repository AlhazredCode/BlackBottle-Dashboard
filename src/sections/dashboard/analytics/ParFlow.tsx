'use client';

import { useState } from 'react';

// material-ui
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import productsData from 'api/sample-products';
import { Product } from 'types/products';
// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import LogHistoryModal from './LogHistoryModal';
import { height } from '@mui/system';

const avatar1 = '/assets/images/users/avatar-1.png';
const avatar2 = '/assets/images/users/avatar-2.png';
const avatar3 = '/assets/images/users/avatar-3.png';
const avatar4 = '/assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| Log HISTORY ||============================== //

export default function ParFlow() {

  const products: Product[] = productsData; 

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Products Par</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <List
          component="nav"
          sx={{
            p: 0,
            '& .MuiListItemButton-root': {
              py: 1.5,
              '& .MuiAvatar-root': avatarSX,
              '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
            }
          }}
        >


{products.map((product, index) => (
                   <ListItemButton divider onClick={handleOpen}>
       
           
                   <ListItemText primary={<Chip variant="outlined" color="secondary" sx={{marginBottom: 2} } size="medium" label={product.Category} />} secondary={<Typography  sx={{fontSize: '1.2rem'}}variant="h6" color="secondary"> {product.Name}</Typography>} />
            
                 <ListItemSecondaryAction >
                   <Stack alignItems="flex-end" direction='row' spacing={4} sx={{mt:2}}>
                   <Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="large" label={`Bottles: ${product.inventory.TotalQty}`} />
                   <Chip variant="light" color="warning"  sx={{marginBottom: 2} } size="large" label={`Par Flow: ${product.Par}`} />
                   </Stack>
                 </ListItemSecondaryAction>
               </ListItemButton>
                  ))}


        
          
       
        </List>

        <Modal   open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={{height:`calc(100% - 248px)`, alignSelf: 'center'}} >
        <MainCard  sx={{ width: `calc(100% - 248px)`  }} title={<Typography sx={{ px : 2}} variant='h3'> Inventory Details</Typography>} modal darkTitle content={false}>
          <CardContent>
           <LogHistoryModal/>
          </CardContent>
          <Divider />
          <Stack sx={{ px: 2.5, py: 2 }} direction='row' justifyContent='space-between'>
          <Typography variant="h2" textAlign='right'>Total Value: </Typography>
          <Typography variant="h2" color='GrayText' textAlign='right'>$30681.87 </Typography>
        </Stack>
          <Stack direction="row" spacing={4} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="large" variant='outlined' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Export CSV
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      </MainCard>
     
    </>
  );
}

'use client';


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

// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';


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

export default function LogHistoryModal() {




  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={12}   sx={{ px: 1.5 } }>
        <Chip variant="light" color="secondary" sx={{marginBottom: 2  } } size="large"  label="Tequila Cristalino" />
           </Grid>
        <Grid item xs={12}  sx={{ px: 2 } }>
          <Typography variant="h5">Inventory details</Typography>
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
          <ListItemButton divider >
       
           
              <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>}  />
       
            <ListItemSecondaryAction>
              <Stack alignItems="flex-end"  spacing={3} direction='row'>
             <Chip label='Par : 2' />
             <Chip label='Bottles : 4' />
              
             
              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 2' />
      <Chip label='Bottles : 4' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Gran Centenario Cristalino</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 1' />
      <Chip label='Bottles : 4' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Maestro Dobel 50</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 2' />
      <Chip label='Bottles : 4' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Don Julio 70</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 2' />
      <Chip label='Bottles : 12' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary">1800 Cristalino</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 7' />
      <Chip label='Bottles : 5' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Gran Coramino Cristalino</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 6' />
      <Chip label='Bottles : 4' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
   <ListItemButton divider >
       
           
       <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>}  />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end"  spacing={3} direction='row'>
      <Chip label='Par : 3' />
      <Chip label='Bottles : 2' />
       
      
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
          
  
        </List>

      
      </MainCard>
     
    </>
  );
}

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

export default function LogHistory() {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Log History</Typography>
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
          <ListItemButton divider onClick={handleOpen}>
       
           
              <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Spirits" />} secondary={<Typography variant="h6" color="secondary"> Today, 2:00 AM</Typography>} />
       
            <ListItemSecondaryAction>
              <Stack alignItems="flex-end">
                <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
                  $1,430
                </Typography>
                <Typography variant="h6" color="secondary" noWrap>
                  Cost of Stock
                </Typography>
              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          
          <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Soft Drinks" />} secondary={<Typography variant="h6" color="secondary"> Yesterday, 3:00 PM</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $8,920
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Beers" />} secondary={<Typography variant="h6" color="secondary"> 2024-07-17</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $4,410 
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Tequila" />} secondary={<Typography variant="h6" color="secondary"> 2024-07-16</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $1,430
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Wine" />} secondary={<Typography variant="h6" color="secondary"> 2024-07-15</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $7,889
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="By the glass" />} secondary={<Typography variant="h6" color="secondary">  2024-07-14</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $5,267
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Beers" />} secondary={<Typography variant="h6" color="secondary">  2024-07-14</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $2,379
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Wine" />} secondary={<Typography variant="h6" color="secondary">  2024-07-13</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $1,430
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Spirits" />} secondary={<Typography variant="h6" color="secondary">  2024-07-13</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $2,433
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>

   <ListItemButton divider onClick={handleOpen}>
       
           
       <ListItemText primary={<Chip variant="light" color="secondary" sx={{marginBottom: 2} } size="medium" label="Spirits" />} secondary={<Typography variant="h6" color="secondary">  2024-07-12</Typography>} />

     <ListItemSecondaryAction>
       <Stack alignItems="flex-end">
         <Typography variant="h4" noWrap sx={{marginBottom: 2} }>
           $3,000
         </Typography>
         <Typography variant="h6" color="secondary" noWrap>
           Cost of Stock
         </Typography>
       </Stack>
     </ListItemSecondaryAction>
   </ListItemButton>
        </List>

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="Inventory Details" modal darkTitle content={false}>
          <CardContent>
            <Typography id="modal-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" size="small" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" size="small">
              Submit
            </Button>
          </Stack>
        </MainCard>
      </Modal>
      </MainCard>
     
    </>
  );
}

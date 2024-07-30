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

export default function MenuList() {
  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5" sx={{paddingLeft:2}}>Menu Categories</Typography>
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


            <ListItemText primary=
              {
                <Stack>
                  <Grid item sx={{alignSelf: 'center'}} xs={12}>
                    <Chip variant="light"  color="secondary"  size="large" label="Beer" />
                  </Grid>
                 

                </Stack>

              }



            />

          
          </ListItemButton>

          <ListItemButton divider >


<ListItemText primary=
  {
    <Stack>
      <Grid item sx={{alignSelf: 'center'}} xs={12}>
        <Chip variant="light"  color="secondary"  size="large" label="Tequila" />
      </Grid>
     

    </Stack>

  }



/>


</ListItemButton>

<ListItemButton divider >


<ListItemText primary=
  {
    <Stack>
      <Grid item sx={{alignSelf: 'center'}} xs={12}>
        <Chip variant="light"  color="secondary"  size="large" label="Wine" />
      </Grid>
     

    </Stack>

  }



/>


</ListItemButton>
  
<ListItemButton divider >


<ListItemText primary=
  {
    <Stack>
      <Grid item sx={{alignSelf: 'center'}} xs={12}>
        <Chip variant="light"  color="secondary"  size="large" label="Cocktails" />
      </Grid>
     

    </Stack>

  }



/>


</ListItemButton>



        </List>
      </MainCard>

    </>
  );
}

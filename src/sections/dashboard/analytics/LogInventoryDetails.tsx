'use client';

import { useState } from 'react';
// material-ui
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

import DownOutlined from '@ant-design/icons/DownOutlined';

import UpOutlined from '@ant-design/icons/UpOutlined';

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

export default function LogInventoryDetails() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();



  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sx={{ px: 1.5 }}>
          <Chip variant="light" color="secondary" sx={{ marginBottom: 2 }} size="large" label="Tequila Cristalino" />
        </Grid>
        <Grid item xs={12} sx={{ px: 2 }}>
          <Typography variant="h5">Edit Inventory</Typography>
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


            <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 2' />
                <Chip label='Bottles : 4' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen} >


            <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 2' />
                <Chip label='Bottles : 4' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary"> Gran Centenario Cristalino</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 1' />
                <Chip label='Bottles : 4' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary"> Maestro Dobel 50</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 2' />
                <Chip label='Bottles : 4' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary"> Don Julio 70</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 2' />
                <Chip label='Bottles : 12' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary">1800 Cristalino</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 7' />
                <Chip label='Bottles : 5' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary"> Gran Coramino Cristalino</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 6' />
                <Chip label='Bottles : 4' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
          <ListItemButton divider onClick={handleOpen}>


            <ListItemText primary={<Typography variant="h6" color="secondary"> Herradura Ultra</Typography>} />

            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" spacing={3} direction='row'>
                <Chip label='Par : 3' />
                <Chip label='Bottles : 2' />


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>


        </List>


      </MainCard>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <MainCard title="Edit Inventory" modal darkTitle content={false}>
          <CardContent>
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
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            <Button color="error" variant='outlined' size="large" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" size="large" color='secondary'>
              Update
            </Button>
          </Stack>
        </MainCard>
      </Modal>
    </>
  );
}

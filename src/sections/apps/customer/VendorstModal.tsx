import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Modal } from '@mui/material';
import CreateVendors from 'views/apps/vendors/vendors-create';
interface Props {
  open: boolean;
  modalToggler: (state: boolean) => void;
}

export default function VendorsModal({ open, modalToggler }: Props) {
  const closeModal = () => modalToggler(false);
  const theme = useTheme();

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-vendor-add-label"
          aria-describedby="modal-vendor-add-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <DialogTitle>Vendor Information</DialogTitle>
            <Divider />
           
              <Grid container spacing={3}>
                {/* Form Fields */}
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="vendor-name">Vendor Name</InputLabel>
                        <TextField fullWidth id="vendor-name" placeholder="Vendor Name" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="account-number">Account #</InputLabel>
                        <TextField fullWidth id="account-number" placeholder="Account Number" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="minimum-order">Minimum Order</InputLabel>
                        <TextField fullWidth id="minimum-order" placeholder="Minimum Order" />
                      </Stack>
                    </Grid>
                
                   
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="order-cutoff-time">Order Cutoff Time</InputLabel>
                        <TextField  fullWidth id="order-cutoff-time" placeholder="Order Cutoff Time" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="receive-cutoff-notification">Receive Cutoff Notification</InputLabel>
                        <TextField fullWidth type='number' id="receive-cutoff-notification" placeholder="Receive Cutoff Notification" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                    <CreateVendors/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            
            <Divider />
            <DialogActions sx={{ p: 2.5 }}>
              <Button color="error" onClick={closeModal}>
                Cancel
              </Button>
              <Button type="submit" color='secondary' variant="contained">
                Save
              </Button>
            </DialogActions>
          </Box>
        </Modal>
      )}
    </>
  );
}
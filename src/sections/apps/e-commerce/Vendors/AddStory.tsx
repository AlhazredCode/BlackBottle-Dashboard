// next
import Image from 'next/image';

// material-ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ProductWizard from 'sections/forms/wizard/product-wizard';
// third party
import * as yup from 'yup';
import { Chance } from 'chance';
import { useFormik } from 'formik';
import { CardMedia } from '@mui/material';
import MainCard from 'components/MainCard';
// project imports
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import SimpleBar from 'components/third-party/SimpleBar';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';

import { DropzoneType } from 'config';
import { addStory, useGetBacklogs } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';

// types
import { KanbanColumn, KanbanProfile } from 'types/kanban';
import { SnackbarProps } from 'types/snackbar';

interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
}

const chance = new Chance();
const validationSchema = yup.object({
  title: yup.string().required('User story title is required'),
  dueDate: yup.date().required('Due date is required').nullable()
});

// ==============================|| KANBAN BACKLOGS - ADD STORY ||============================== //

export default function AddStory({ open, handleDrawerOpen }: Props) {

  return (
    <Drawer
      sx={{
        ml: open ? 3 : 0,

        flexShrink: 0,
        zIndex: 1200,
        overflowX: 'hidden',
        width: { xs: 550, md: 650 },
        '& .MuiDrawer-paper': {
          width: {  xs: 550, md: 650},
          border: 'none',
          borderRadius: '0px'
        }
      }}
      variant="temporary"
      anchor="right"
      open={open}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      {open && (
        <SimpleBar
          sx={{
            bgcolor: 'black',
            overflowX: 'hidden',
            height: '100vh'
          }}
        >

          <Box sx={{ p: 3 }}>
            <>
              <Typography variant="h5" gutterBottom sx={{ mb: 4, paddingLeft: 2 }}>
                Vendor Information
              </Typography>

              <Grid container spacing={3}>
                {/* Imagen del Vendor */}
                <Grid container spacing={3} xs={12}>
                  <Grid item xs={12} sm={6}>
                    <MainCard sx={{ margin: 3 }}>
                      <CardMedia
                        component="img"
                        image={`/assets/images/e-commerce/placeholder-vendor.png`}
                        alt="Vendor Image"
                        sx={{ borderRadius: `4px`, position: 'relative' }}
                      />
                    </MainCard>
                  </Grid>

                  {/* Formulario del Vendor */}
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel>Company Name</InputLabel>
                      <TextField required id="companyName" name="companyName" placeholder="Company Name" fullWidth autoComplete="organization" />

                      <InputLabel>Contact Name</InputLabel>
                      <TextField required id="contactName" name="contactName" placeholder="Contact Name" fullWidth autoComplete="name" />

                      <InputLabel>Phone Number</InputLabel>
                      <TextField required id="phoneNumber" name="phoneNumber" placeholder="Phone Number" fullWidth autoComplete="tel" />

                      <InputLabel>Email Address</InputLabel>
                      <TextField required id="email" name="email" placeholder="Email Address" fullWidth autoComplete="email" />
                    </Stack>
                  </Grid>
                </Grid>

                {/* Dirección del Vendor */}
                <Grid item xs={12}>
                
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1}>
                        <InputLabel>Street Address</InputLabel>
                        <TextField required id="street" name="street" placeholder="Street Address" fullWidth autoComplete="street-address" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Stack spacing={1}>
                        <InputLabel>City</InputLabel>
                        <TextField required id="city" name="city" placeholder="City" fullWidth autoComplete="address-level2" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1}>
                        <InputLabel>State</InputLabel>
                        <TextField required id="state" name="state" placeholder="State" fullWidth autoComplete="address-level1" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1}>
                        <InputLabel>Zip Code</InputLabel>
                        <TextField required id="zipCode" name="zipCode" placeholder="Zip Code" fullWidth autoComplete="postal-code" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1}>
                        <InputLabel>Payment Terms</InputLabel>
                        <TextField id="paymentTerms" name="paymentTerms" placeholder="Payment Terms" fullWidth />
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Payment Terms & Notes */}

                <Grid item xs={12} sm={12}>
                  <Stack spacing={1}>
                    <InputLabel>Notes</InputLabel>
                    <TextField id="notes" name="notes" placeholder="Notes" fullWidth multiline rows={4} />
                  </Stack>
                </Grid>


                <Grid item xs={12} sm={12}>
                  <Stack spacing={1}>
                    <Button variant='contained' fullWidth color='secondary'>
                        Add Vendor 
                    </Button>
                  </Stack>
                </Grid>


              </Grid>
            </>
          </Box>
        </SimpleBar>
      )}
    </Drawer>
  );
}

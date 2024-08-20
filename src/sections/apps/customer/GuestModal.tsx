import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'; // Assuming you want to use the MUI Avatar
import { Modal } from '@mui/material';
// assets
import CameraOutlined from '@ant-design/icons/CameraOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';

// types
import { Gender } from 'config'; // Make sure you have this import correctly configured

interface StatusProps {
  value: number;
  label: string;
}

const skills = [
  'Adobe XD',
  'After Effect',
  'Angular',
  'Animation',
  'ASP.Net',
  'Bootstrap',
  'C#',
  'CC',
  'Corel Draw',
  'CSS',
  'DIV',
  'Dreamweaver',
  'Figma',
  'Graphics',
  'HTML',
  'Illustrator',
  'J2Ee',
  'Java',
  'Javascript',
  'JQuery',
  'Logo Design',
  'Material UI',
  'Motion',
  'MVC',
  'MySQL',
  'NodeJS',
  'npm',
  'Photoshop',
  'PHP',
  'React',
  'Redux',
  'Reduxjs & tooltit',
  'SASS',
  'SCSS',
  'SQL Server',
  'SVG',
  'UI/UX',
  'User Interface Designing',
  'Wordpress'
];

const allStatus: StatusProps[] = [
  { value: 3, label: 'Rejected' },
  { value: 1, label: 'Verified' },
  { value: 2, label: 'Pending' }
];

interface Props {
  open: boolean;
  modalToggler: (state: boolean) => void;
}

export default function GuestModal({ open, modalToggler }: Props) {
  const closeModal = () => modalToggler(false);
  const theme = useTheme();
  const [avatar, setAvatar] = useState<string | undefined>(`/assets/images/users/avatar-1.png`);

  return (
    <>
      {open && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-customer-add-label"
          aria-describedby="modal-customer-add-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <DialogTitle>Customer Information</DialogTitle>
            <Divider />
            <DialogContent sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                {/* Avatar Section */}
                <Grid item xs={12} md={3}>
                  <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
                    <FormLabel
                      htmlFor="change-avtar"
                      sx={{
                        position: 'relative',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        cursor: 'pointer'
                      }}
                    >
                      <Avatar alt="Avatar 1" src={avatar} sx={{ width: 72, height: 72, border: '1px dashed' }} />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                          width: '100%',
                          height: '100%',
                          opacity: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Stack spacing={0.5} alignItems="center">
                          <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
                          <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
                        </Stack>
                      </Box>
                    </FormLabel>
                  </Stack>
                </Grid>

                {/* Form Fields */}
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="customer-firstName">First Name</InputLabel>
                        <TextField fullWidth id="customer-firstName" placeholder="First Name" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="customer-lastName">Last Name</InputLabel>
                        <TextField fullWidth id="customer-lastName" placeholder="Last Name" />
                      </Stack>
                    </Grid>
                    <Grid item xs={8}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="guest-email">Email</InputLabel>
                        <TextField fullWidth id="guest-email" placeholder="Guest Email" />
                      </Stack>
                    </Grid>
                    <Grid item xs={4}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="guest-phone">Phone</InputLabel>
                        <TextField fullWidth id="guest-phone" placeholder="Phone Number" />
                      </Stack>
                    </Grid>
                 
                    <Grid item xs={12} sm={12}>
  <Stack spacing={1}>
    <InputLabel htmlFor="personal-date">Date of Birth (+18)</InputLabel>
    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Select fullWidth>
        <MenuItem value="0">January</MenuItem>
        <MenuItem value="1">February</MenuItem>
        <MenuItem value="2">March</MenuItem>
        <MenuItem value="3">April</MenuItem>
        <MenuItem value="4">May</MenuItem>
        <MenuItem value="5">June</MenuItem>
        <MenuItem value="6">July</MenuItem>
        <MenuItem value="7">August</MenuItem>
        <MenuItem value="8">September</MenuItem>
        <MenuItem value="9">October</MenuItem>
        <MenuItem value="10">November</MenuItem>
        <MenuItem value="11">December</MenuItem>
      </Select>
      <Select fullWidth>
        {[...Array(31).keys()].map((i) => (
          <MenuItem key={i + 1} value={i + 1}>
            {i + 1}
          </MenuItem>
        ))}
      </Select>
      <TextField fullWidth placeholder="Year" />
    </Stack>
  </Stack>
</Grid>
<Grid item xs={12} sm={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="customer-gender">Gender</InputLabel>
                        <RadioGroup row  >
                          <FormControlLabel value="Female" control={<Radio />} label="Female" />
                          <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        </RadioGroup>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="guest-last_visit">Last Visit</InputLabel>
                        <TextField fullWidth id="guest-last_visit" placeholder="Enter Last Visit Date" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="guest-total_visits">Total Visits</InputLabel>
                        <TextField fullWidth id="guest-total_visits" placeholder="Enter Total Visits" />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="guest-total_spend">Total Spend</InputLabel>
                        <TextField fullWidth id="guest-total_spend" placeholder="Enter Total Spend" />
                      </Stack>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
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
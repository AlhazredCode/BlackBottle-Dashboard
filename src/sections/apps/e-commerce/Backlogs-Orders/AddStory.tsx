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
        width: { xs: 720, md: 850   },
        '& .MuiDrawer-paper': {
          width: { xs: 720, md: 850  },
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
            <ProductWizard/>
          </Box>
        </SimpleBar>
      )}
    </Drawer>
  );
}

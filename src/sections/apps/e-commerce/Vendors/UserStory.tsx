import React, { useState, CSSProperties } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Draggable } from '@hello-pangea/dnd';
import IconButton from '@mui/material/IconButton'; 
import DownOutlined from '@ant-design/icons/DownOutlined';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import PlusSquareTwoTone from '@ant-design/icons/PlusSquareTwoTone';
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import VendorsProductBacklog from '../Backlogs-Vendors';
import UpOutlined from '@ant-design/icons/UpOutlined';
import { Vendor } from 'types/vendors';
import { Chip } from '@mui/material';

// Estilos para el Modal
const modalStyle = {
  position: 'absolute' as 'absolute', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800, 
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const getDragWrapper = (isDragging: boolean, theme: Theme, open: boolean): CSSProperties | undefined => {
  let bgcolor = 'transparent';
  if (open) {
    bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.secondary.lighter;
  }
  if (isDragging) {
    bgcolor = theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.lighter;
  }
  return {
    background: bgcolor,
    userSelect: 'none'
  };
};

interface VendorStoryProps {
  vendor: Vendor;
  index: number;
}

export default function VendorStory({ vendor, index }: VendorStoryProps) {
  const theme = useTheme();
  const [openDetails, setOpenDetails] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenDetails = () => {
    setOpenDetails((prevState) => !prevState);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Draggable draggableId={vendor.id} index={index}>
        {(provided, snapshot) => (
          <>
            <TableRow 
              hover
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              sx={{
                ...getDragWrapper(snapshot.isDragging, theme, openDetails),
                ...(!openDetails && {
                  '& .MuiTableCell-root': {
                    border: 'none'
                  }
                })
              }}
            >
              <TableCell sx={{ pl: 3, minWidth: 120, width: 120, height: 46 }}>
                <Stack direction="row" spacing={0.5} alignItems="center">
              
                  <IconButton aria-label="expand row" size="small" onClick={handleOpenDetails} color="secondary">
                    {openDetails ? <DownOutlined /> : <RightOutlined />}
                  </IconButton>
                </Stack>
              </TableCell>

              {/* Mostrar datos básicos del vendor */}
              <TableCell>{vendor.id}</TableCell> 
              <TableCell>
                {/* Puedes colocar una imagen por defecto si no hay imagen del vendor */}
                <img src={`/assets/images/vendors/${vendor.Image}`} alt={vendor.companyName} width={50} height={50} />
              </TableCell>
              <TableCell>{vendor.companyName}</TableCell>
       
              <TableCell>{vendor.phoneNumber}</TableCell> 
      
              <TableCell>{vendor.address.city}</TableCell> 
           

              <TableCell sx={{ width: 60, minWidth: 60 }}>
                <IconButton size="small" aria-controls="menu-comment" onClick={handleClick} aria-haspopup="true" color="secondary">
                  <MoreOutlined style={{ color: theme.palette.text.primary }} />
                </IconButton>
                <Menu
                  id="menu-comment"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  variant="selectedMenu"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                >
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>

            {/* Fila adicional para la información extra */}
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                <Collapse in={openDetails} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1, padding: 1 }}>
                    <Grid container spacing={2} sx={{ paddingLeft: 2 }}>
                    <Grid item xs={12}>
                      <Stack direction='row' spacing={2}>
                        <Chip size='medium' label='12 Added'/>
                        <Chip size='medium' color='success' label='10 Available'/>
                        <Chip size='medium' color='error' label='2 Unavailable'/>
                      </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6">Vendor Details</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography color="text.secondary">Company Name:</Typography>
                        <Typography>{vendor.companyName}</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography color="text.secondary">Contact Name:</Typography>
                        <Typography>{vendor.contactName}</Typography>
                      </Grid>
                <Grid item xs={12}>
                <Button variant="contained" size="medium" color="secondary" onClick={handleOpenModal}>
                Product List
              </Button>
                </Grid>
                    </Grid>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        )}
      </Draggable>

      {/* Modal para editar el inventario */}
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={modalStyle}> 
          <MainCard title="Vendor Product List" modal darkTitle content={false}>
            <CardContent>
              <VendorsProductBacklog/>
            </CardContent>
            <Divider />
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
              <Button color="error" variant="outlined" size="large" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="contained" size="large" color="secondary">
                Update
              </Button>
            </Stack>
          </MainCard>
        </Box>
      </Modal>
    </>
  );
}
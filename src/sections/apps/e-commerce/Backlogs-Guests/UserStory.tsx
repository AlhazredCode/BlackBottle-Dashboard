
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
import IconButton from 'components/@extended/IconButton';
import DownOutlined from '@ant-design/icons/DownOutlined';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import PlusSquareTwoTone from '@ant-design/icons/PlusSquareTwoTone';
import { Guest } from 'types/guests'; // Import the correct Guest interface
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import BottleInventory from 'views/forms/bottleinventory';
import CustomerModal from 'sections/apps/customer/CustomerModal';
import GuestModal from 'sections/apps/customer/GuestModal';
import UpOutlined from '@ant-design/icons/UpOutlined';
// ... (other imports)

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

const getDropWrapper = () => {
  return {
    background: 'transparent'
  };

};


interface UserStoryProps {
  guest: Guest;
  index: number;
}

export default function UserStory({ guest, index }: UserStoryProps) {
  const theme = useTheme();
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  

  const [anchorEl, setAnchorEl] = useState<Element | (() => Element) | null | undefined>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => setOpen1(false);
  

  const [customerModalOpen, setCustomerModalOpen] = useState<boolean>(false);

  return (
    <>
      <Draggable draggableId={guest.id.toString()} index={index}>
        {(provided, snapshot) => (
          <>
            {/* Main Row */}
            <TableRow
              hover
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              sx={{
                ...getDragWrapper(snapshot.isDragging, theme, open),
                ...(!open && {
                  '& .MuiTableCell-root': {
                    border: 'none'
                  }
                })
              }}
            >
              <TableCell sx={{ pl: 3, minWidth: 120, width: 120, height: 46 }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
              
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color="secondary">
                  {open ? <DownOutlined /> : <RightOutlined />}
                </IconButton>
              </Stack>
              </TableCell>

              {/* Display basic guest data */}
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.phone}</TableCell>
              <TableCell>{guest.last_visit}</TableCell>
              <TableCell>{guest.total_visits}</TableCell>
              <TableCell>${guest.total_spend}</TableCell>
              

            {/* Menú de opciones */}
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
          <MenuItem onClick={() => { handleClose(); setCustomerModalOpen(true); }}>  {/* Abre la modal al hacer clic en Edit */}
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Delete
          </MenuItem>
        </Menu>
      </TableCell>
          

            </TableRow>

            {/* Expanded Row */}
          <TableRow>
  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1, padding: 1 }}>
        <Grid container spacing={2} sx={{ paddingLeft: 2 }}>
          {/* Guest Information */}
          <Grid item xs={12}>
            <Typography variant="h4">Guest Information</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography>{guest.name}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography>{guest.email}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography>{guest.phone}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Last Visit:</Typography>
            <Typography>{guest.last_visit}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Total Visits:</Typography>
            <Typography>{guest.total_visits}</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="subtitle1">Total Spend:</Typography>
            <Typography>${guest.total_spend}</Typography>
          </Grid>

          {/* Guest Orders */}
          <Grid item xs={12}>
            <Typography variant="h4">Guest Orders</Typography>
          </Grid>
          {guest.guest_orders.map((order) => (
            <Grid item xs={12} key={order.order_id}>
              <Typography variant="subtitle1">Order ID: {order.order_id}</Typography>
              <Typography variant="subtitle1">Order Date: {order.order_date}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 2}}>Total Amount: ${order.total_amount}</Typography>
              {/* Order Items */}
              <Grid container spacing={1}>
                {order.items.map((item) => (
                  <React.Fragment key={item.item_name}>
                    <Grid item xs={6} md={4} >
                      <Typography variant="body2">Item: {item.item_name}</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2">Quantity: {item.quantity}</Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Typography variant="body2">Price: ${item.price}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Collapse>
  </TableCell>
</TableRow>
          </>
        )}
      </Draggable>
      <GuestModal open={customerModalOpen} modalToggler={setCustomerModalOpen}  />
      <Modal  open={open1} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
<BottleInventory/>
</Modal>
    </>
  );
}
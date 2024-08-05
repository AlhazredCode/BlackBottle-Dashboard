
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
import { Receipt } from 'types/receipts'; // Importa el tipo Receipt
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CreateRecipe from 'views/apps/recipes-list/recipes-create';
import UpOutlined from '@ant-design/icons/UpOutlined';

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
  receipt: Receipt; // Cambia el tipo de la prop a Receipt
  index: number;
}

export default function UserStory({ receipt, index }: UserStoryProps) { // Cambia la prop a receipt
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

  return (
    <>
      <Draggable draggableId={receipt.Name} index={index}> 
        {(provided, snapshot) => (
          <>
            {/* Fila principal de la receta */}
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
                  <Tooltip title="Open Recipe Details"> 
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color="secondary">
                      {open ? <DownOutlined /> : <RightOutlined />}
                    </IconButton>
                  </Tooltip>
                </Stack>
            
                </TableCell>
              <TableCell>
                <img src={`/assets/images/e-commerce/${receipt.Image}`} alt={receipt.Name} width={50} height={50} />
              </TableCell>
           
               {/* Mostrar datos básicos de la receta */}
               <TableCell>{receipt.Name}</TableCell> 
              <TableCell>{receipt.Category}</TableCell> 
             

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
                  <MenuItem onClick={handleOpen1 }>
                    Edit
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    Delete
                  </MenuItem>
                </Menu>
              </TableCell>
            </TableRow>

            {/* Fila adicional para la información extra */}
            <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1, padding: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={3}>
                <MainCard>
                  <CardMedia
                    component="img"
                    image={`/assets/images/e-commerce/${receipt.Image}`}
                    alt={receipt.Name}
                   
                  />
                </MainCard>
              </Grid>

              <Grid item xs={12} sm={8} md={9}>
                <Typography variant="h5" gutterBottom>
                  {receipt.Name} 
                </Typography>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" color="text.secondary">
                     Description
                    </Typography>
                    <Typography variant="body2">{receipt.Description}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" color="text.secondary">
                     Category
                    </Typography>
                    <Typography variant="body2">{receipt.Category}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" color="text.secondary">
                     Quantity
                    </Typography>
                    <Typography variant="body2">{receipt.inventory.TotalQty}</Typography>
                  </Grid>

                  {/* Ingredientes */}
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Ingredients:
                    </Typography>
                    <ul style={{ paddingLeft: 20 }}>
                      {receipt.ingredients.map((ingredient) => (
                        <li key={ingredient.name}>
                          <Typography variant="body2">
                            {ingredient.name}: {ingredient.quantity}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Instruccions:
                    </Typography>
                    <Typography variant="body2">{receipt.instructions}</Typography>
                  </Grid>
                </Grid>
              </Grid> 
            </Grid>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
          </>
        )}
      </Draggable>

      <Modal  open={open1} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
<MainCard title="Edit Recipe" modal darkTitle content={false}>
  <CardContent>
   <CreateRecipe/>
  </CardContent>
  <Divider />
  <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
    <Button color="error" variant='outlined' size="large" onClick={handleClose1}>
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
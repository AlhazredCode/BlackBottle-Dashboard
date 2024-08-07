
import React, { useState, CSSProperties } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Draggable } from '@hello-pangea/dnd';
import IconButton from 'components/@extended/IconButton';
import DownOutlined from '@ant-design/icons/DownOutlined';
import MoreOutlined from '@ant-design/icons/MoreOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { Order } from 'types/orders'; 
import vendorsData from 'api/sample-vendors';
import productsData from 'api/sample-products';
// ... otras importaciones

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
  order: Order; // Cambiado de Product a Order
  index: number;
}
export default function UserStory({ order, index }: UserStoryProps) {
    // ... (resto del código, eliminando handleOpen1 y open1)
    const theme = useTheme();


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
  
    
  
    const [anchorEl, setAnchorEl] = useState<Element | (() => Element) | null | undefined>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement> | undefined) => {
      setAnchorEl(event?.currentTarget);
    };
  
    const handleClose = () => setOpen(false);

  return (
    <>
      <Draggable draggableId={order.id} index={index}>
        {(provided, snapshot) => (
          <>
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
                {/* Celda para expandir la fila */}
                <TableCell sx={{ pl: 1, minWidth: 80, width: 80, height: 46 }}>
                <Stack direction="row" spacing={0.5} alignItems="center"> 
                  <IconButton 
                    aria-label="expand row" 
                    size="small" 
                    onClick={() => setOpen(!open)} 
                    color="secondary"
                  >
                    {open ? <DownOutlined /> : <RightOutlined />}
                  </IconButton>
                </Stack>
              </TableCell>

              {/* Mostrar datos básicos de la orden */}
              <TableCell>{order.id}</TableCell>

              {/* Celda del proveedor */}
              <TableCell>
                {vendorsData.find(vendor => vendor.id === order.vendorId)?.companyName || 'Vendor Not Found'}
              </TableCell> 

              {/* Celda de productos */}
              <TableCell>
                {order.products.length}
              </TableCell> 
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.date}</TableCell>
              {/* ... (resto de las celdas) */}
            </TableRow>

             {/* Fila adicional para la información extra de la orden */}
             <TableRow>

            
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {/* Aquí mostrarías la información detallada de la orden */}
                  <Box sx={{ margin: 1, padding: 1 }}>
                  {order.products.map((item, i) => (
                  <div key={i}>
                    {item.quantity}x{' '}
                    {productsData.find(product => product.SKU === item.productId)?.Name || 'Product Not Found'}
                  </div>
                ))}
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        )}
      </Draggable>

       {/* Modal para editar la orden (puedes adaptarlo) */}
       <Modal  open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
       <></>
      </Modal>
    </>
  );
}

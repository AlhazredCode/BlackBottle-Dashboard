
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
import { Product } from 'types/products';
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { FormControlLabel } from '@mui/material';
import {FormGroup} from '@mui/material';
import Switch from '@mui/material/Switch';

import UpOutlined from '@ant-design/icons/UpOutlined';
import { width } from '@mui/system';
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
  product: Product;
  index: number;
}

export default function UserStory({ product, index }: UserStoryProps) {
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
    <Draggable draggableId={product.SKU} index={index}>
      {(provided, snapshot) => (
        <>
          {/* Fila principal del producto */}
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
         

            {/* Mostrar datos básicos del producto */}
            <TableCell>{product.SKU}</TableCell>
            <TableCell>
              <img src={`/assets/images/e-commerce/${product.Image}`} alt={product.Name} width={50} height={50} />


            </TableCell>
            <TableCell>{product.Name}</TableCell>

            <TableCell>{product.Price}</TableCell>
            <TableCell> <FormGroup> <FormControlLabel disabled control={<Switch />} label="Disabled" /> </FormGroup></TableCell>
       



         
          </TableRow>

        
          
        </>
      )}
    </Draggable>


</>
  );
}
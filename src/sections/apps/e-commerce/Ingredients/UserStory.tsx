
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
            <TableCell sx={{ pl: 3, minWidth: 120, width: 120, height: 46 }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Tooltip title="Open Inventory">
                  <IconButton aria-label="expand row" size="small"  onClick={handleOpen1} sx={{ fontSize: '1.15rem' }}>
                    {/* Eliminar onClick={addItem}  */}
                    <PlusSquareTwoTone color={theme.palette.primary.main} />
                  </IconButton>
                </Tooltip>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} color="secondary">
                  {open ? <DownOutlined /> : <RightOutlined />}
                </IconButton>
              </Stack>
            </TableCell>

            {/* Mostrar datos básicos del producto */}
            <TableCell>{product.SKU}</TableCell>
            <TableCell>
              <img src={`/assets/images/e-commerce/${product.Image}`} alt={product.Name} width={50} height={50} />


            </TableCell>
            <TableCell>{product.Name}</TableCell>
            <TableCell>{product.Status ? 'Active' : 'Inactive'}</TableCell>
            <TableCell>{product.Price}</TableCell>
            <TableCell>{product.Par}</TableCell>
            <TableCell>{product.inventory.TotalQty}</TableCell>
            <TableCell>{product.inventory.TotalCases}</TableCell>



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
                <MenuItem onClick={handleClose}>
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
                  <Grid container spacing={2} sx={{ paddingLeft: 2 }}>
                  
                    <Grid item xs={12} sm={3}   >
                      <MainCard sx={{my:2}} >

                        <CardMedia
                          component="img"
                          image={`/assets/images/e-commerce/${product.Image}`} 
                          title="Scroll Zoom"
                          sx={{ borderRadius: `4px`, position: 'relative' }}
                        />

                      </MainCard>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" >Inventory</Typography>
                    </Grid>

                    <Grid item xs={2} sx={{ mb: 2 }}>
                      <Typography color="text.secondary">Total Bottles</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ mb: 2 }}>
                      <Typography>{product.inventory.TotalQty}</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ mb: 2 }}>
                      <Typography color="text.secondary">Total Cases</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ mb: 2 }}>
                      <Typography>{product.inventory.TotalCases}</Typography>
                    </Grid>


                    <Grid item xs={2}>
                      <Typography color="text.secondary">Bar1</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{product.inventory.TotalQty}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography color="text.secondary">Bar2</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{product.inventory.TotalQty}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography color="text.secondary">Bar3</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{product.inventory.TotalQty}</Typography>
                    </Grid>


                    <Grid item xs={12}>
                      <Typography variant="h5" >Item History</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Name :</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Name}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Brand :</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Brand}</Typography>
                    </Grid>


                    <Grid item xs={3}>
                      <Typography color="text.secondary">Price :</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>$ {product.Price}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Purchase Cost :</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>$ {product.PurchaseCost}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Case Size:</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Casesize}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Par</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Par}</Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography color="text.secondary">UPC</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.UPC}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">SKU</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.SKU}</Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography color="text.secondary">Taste</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Taste}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography color="text.secondary">Category</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{product.Category}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography color="text.secondary">Provider Number</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>{product.Provider}</Typography>
                    </Grid>

                    <Grid item xs={12} >
                      <Typography color="text.secondary">Description</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                      <Typography>{product.Description}</Typography>
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
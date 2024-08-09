
'use client';

import { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import SaveOutlined from '@ant-design/icons/SaveOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import productsData from 'api/sample-products';
import { Product } from 'types/products';
import { IconButton } from '@mui/material';
import MainCard from 'components/MainCard';
import TextField from '@mui/material/TextField'; // Importa TextField

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};
export default function InvoiceFlow() {

  // Estado para controlar la edición del par
  const [editingPar, setEditingPar] = useState<{ [key: string]: boolean }>({});

  // Función para alternar el estado de edición del par
  const handleEditPar = (sku: string) => {
    setEditingPar((prev) => ({ ...prev, [sku]: !prev[sku] }));
  };

  const products: Product[] = productsData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
         <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Invoice Results</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
      <List 
      component="nav"
      sx={{
        p: 0,
        '& .MuiListItemButton-root': {
          py: 1.5,
          '& .MuiAvatar-root': avatarSX,
          '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
        }
      }}
      >
        {products.map((product, index) => (
          <ListItemButton key={index} divider>
                        <ListItemText primary={<Chip variant="outlined" color="secondary" sx={{ marginBottom: 2 }} size="medium" label={product.Category} />} secondary={<Typography sx={{ fontSize: '1.2rem' }} variant="h6" color="secondary"> {product.Name}</Typography>} />


            <ListItemSecondaryAction>
              <Stack alignItems="flex-end" direction='row' spacing={4} sx={{ mt: 2 }}>
              <Chip variant="light" color="secondary" sx={{ marginBottom: 2 }} size="large" label={`$ ${product.Price}`} />


                {/* Chip o TextField para Par Flow */}
                {editingPar[product.SKU] ? (
                  <TextField
                    defaultValue={product.Par} // Mostrar el valor actual del par
                    size="medium"
                    sx={{width: 130}}
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <IconButton  size='large' color='success' onClick={() => handleEditPar(product.SKU)}>
                          <SaveOutlined /> 
                        </IconButton>
                      )
                    }}
                  />
                ) : (
                  <Chip
                    variant="light"
                    color="success"
                    size="large"
                    label={`Bottles: ${product.Par}\u00A0\u00A0`}
                    onDelete={() => handleEditPar(product.SKU)} // Cambiado a onDelete
                    deleteIcon={<EditOutlined  />} 
                  />
                )}


              </Stack>
            </ListItemSecondaryAction>
          </ListItemButton>
        ))}
      </List>
      </MainCard>
      </>
  );
}
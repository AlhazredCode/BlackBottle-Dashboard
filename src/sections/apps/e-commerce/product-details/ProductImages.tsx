import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { ThemeMode } from 'config';

// third-party

import { TransformWrapper, TransformComponent, ReactZoomPanPinchHandlers } from 'react-zoom-pan-pinch';

// types

import { Products } from 'types/e-commerce';

// assets
import ZoomInOutlined from '@ant-design/icons/ZoomInOutlined';
import ZoomOutOutlined from '@ant-design/icons/ZoomOutOutlined';
import RedoOutlined from '@ant-design/icons/RedoOutlined';







// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

export default function ProductImages({ product }: { product: Products }) {
  const theme = useTheme();
  

  const [selected, setSelected] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setSelected(product && product?.image ? `/assets/images/e-commerce/${product.image}` : '');
  }, [product]);

 


 


  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12} md={12} lg={12}>
        <MainCard
          content={false}
          border={false}
          boxShadow={false}
          shadow={false}
          sx={{
            m: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            bgcolor: theme.palette.mode === ThemeMode.DARK ? 'grey.50' : 'secondary.lighter',
            '& .react-transform-wrapper': { cursor: 'crosshair', height: '100%' },
            '& .react-transform-component': { height: '100%' }
          }}
        >
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }: ReactZoomPanPinchHandlers) => (
              <>
                <TransformComponent>
                  <CardMedia
                    onClick={() => setModal(!modal)}
                    component="img"
                    image={selected}
                    title="Scroll Zoom"
                    sx={{ borderRadius: `4px`, position: 'relative' }}
                  />
                </TransformComponent>
                <Stack direction="row" className="tools" sx={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1 }}>
                  <IconButton color="secondary" onClick={() => zoomIn()}>
                    <ZoomInOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => zoomOut()}>
                    <ZoomOutOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => resetTransform()}>
                    <RedoOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                </Stack>
              </>
            )}
          </TransformWrapper>
      
        </MainCard>
      </Grid>
   
    </Grid>
  );
}

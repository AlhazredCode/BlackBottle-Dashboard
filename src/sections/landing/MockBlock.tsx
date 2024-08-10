// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Grid } from '@mui/material';
// third-party
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

// project import
import useConfig from 'hooks/useConfig';

// ==============================|| LANDING - BROWSER  PAGE ||============================== //

export default function MockBlockPage() {
  const theme = useTheme();
  const { presetColor } = useConfig();

  return (
    <Box   sx={{ '.flagImg': { objectFit: 'contain' , justifySelf: 'center'} , position: 'relative', height: 700,  alignContent: 'center'}}>
      
            <Image className="flagImg" src={`/assets/images/landing/dark.jpg`} alt='image'  fill={true}    />

    </Box>
  );
}

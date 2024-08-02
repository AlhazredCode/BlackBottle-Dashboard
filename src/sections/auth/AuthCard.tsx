'use client';

// material-ui
import { Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// project import
import MainCard, { MainCardProps } from 'components/MainCard';
import LogoIcon from 'components/logo/LogoIcon';
// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

export default function AuthCard({ children, ...other }: MainCardProps) {
  return (
    <MainCard
      sx={{
        maxWidth: { xs: 400, lg: 475 },
        margin: { xs: 2.5, md: 3 },
        '& > *': { flexGrow: 1, flexBasis: '50%' }
      }}
      content={false}
      {...other}
      border={false}
      boxShadow
      shadow={(theme: Theme) => theme.customShadows.z1}
    >
       <Box sx= {{ width : '100%', paddingTop: 5 , display: 'flex' ,alignItems: 'center', justifyContent: 'center' }}>
         <LogoIcon/>
       </Box>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
  );
}

'use client'

// material-ui
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TotalRevenue from 'sections/widget/data/TotalRevenue';
import { FieldTimeOutlined } from '@ant-design/icons';
// project import
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';
import SaleReportCard from 'sections/dashboard/default/SaleReportCard';
import OrdersTable from 'sections/dashboard/default/OrdersTable';
import ApexPolarChart from 'sections/charts/apexchart/ApexPolarChart';
// assets
import LogHistory from 'sections/dashboard/analytics/LogHistory';
import { ContactsOutlined } from '@ant-design/icons';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import {UserOutlined} from '@ant-design/icons';
import {ShoppingOutlined} from '@ant-design/icons';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import RoundIconCard from 'components/cards/statistics/RoundIconCard';
import UserCountCard from 'components/cards/statistics/UserCountCard';
const avatar1 = '/assets/images/users/avatar-1.png';
const avatar2 = '/assets/images/users/avatar-2.png';
const avatar3 = '/assets/images/users/avatar-3.png';
const avatar4 = '/assets/images/users/avatar-4.png';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}

      {/* row 2 */}
      <Grid item xs={10} >




        <Grid container xs={12} >

          <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
              <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce color={'secondary'} title="Total Guests" count="4,42,236" percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Items Sold" color={'secondary'} count="78,250" percentage={70.5} extra="8,900" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Orders" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
          </Grid>
          <Grid item xs={7}  sx={{pt: 2}}>
            <UniqueVisitorCard />
          </Grid>
          <Grid item xs={5} sx={{ pl: 4, pt: 2}}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5" >Distribution</Typography>
              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 2, pb: 4 }} content={false}>
              <Box sx={{ p: 3, pb: 0 }}>
                <Stack spacing={2} sx={{ pb: 2 }}>
                  <Typography variant="h6" color="text.secondary">
                    Bar Distribution by items
                  </Typography>
                  <Typography variant="h3">2350 items</Typography>
                </Stack>
              </Box>
              <ApexPolarChart />
            </MainCard>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sx={{mt:5}} >
        <Stack spacing={5}>
      <UserCountCard primary="Daily Guests" secondary="75" iconPrimary={UserOutlined} color="success.light"/>
      <UserCountCard primary="Pending Orders" secondary="12" iconPrimary={ShoppingOutlined} color='warning.light'/>

          <TotalRevenue/>
          </Stack>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Inventories</Typography>
          </Grid>
          <Grid item />
        </Grid>
   
          <LogHistory />
      
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Inventory Value</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Wine" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Spirits" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Beer" />
              <Typography variant="h5">+1.14%</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      
    </Grid>
  );
}

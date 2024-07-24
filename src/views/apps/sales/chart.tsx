'use client';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';

import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
import UniqueVisitorCard from 'sections/dashboard/default/UniqueVisitorCard';

import UsersCardChart from 'sections/dashboard/analytics/UsersCardChart';
import OrdersCardChart from 'sections/dashboard/analytics/OrdersCardChart';
import SalesCardChart from 'sections/dashboard/analytics/SalesCardChart';
import MarketingCardChart from 'sections/dashboard/analytics/MarketingCardChart';
import ReportChart from 'sections/dashboard/analytics/ReportChart';
import IncomeOverviewCard from 'sections/dashboard/analytics/IncomeOverviewCard';
import SaleReportCard from 'sections/dashboard/analytics/SaleReportCard';
import AcquisitionChannels from 'sections/dashboard/analytics/AcquisitionChannels';
import ApexRedialChart from 'sections/charts/apexchart/ApexRadialChart';

// ==============================|| WIDGET - CHARTS ||============================== //

export default function SalesChart() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={3}>
      {/* row 1 */}
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticsDataCard title="Total Users" count="78,250" percentage={70.5}>
          <UsersCardChart />
        </AnalyticsDataCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticsDataCard title="Total Order" count="18,800" percentage={27.4} isLoss color="warning">
          <OrdersCardChart />
        </AnalyticsDataCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <AnalyticsDataCard title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning">
          <SalesCardChart />
        </AnalyticsDataCard>
      </Grid>
    

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid item >
          <Grid item sx={{marginY: 1.2}}>
            <Typography variant="h5">Menu Sales</Typography>
          </Grid>
                <MainCard title="Redial Chart" sx={{paddingY: 3}}>
            <ApexRedialChart />
          </MainCard>
        </Grid>
      </Grid>


      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <AcquisitionChannels />
      </Grid>
    </Grid>
  );
}

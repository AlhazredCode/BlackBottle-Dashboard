// material-ui
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import TrafficSources from 'sections/widget/data/TrafficSources';
import UserCountCard from 'components/cards/statistics/UserCountCard';

import IncomeOverviewCard from 'sections/dashboard/analytics/IncomeOverviewCard';
// project imports
import MainCard from 'components/MainCard';
import ContactsOutlined from '@ant-design/icons/ContactsOutlined';
import RoundIconCard from 'components/cards/statistics/RoundIconCard';
import { FieldTimeOutlined } from '@ant-design/icons';
// ==============================|| SAMPLE PAGE ||============================== //

export default function BarHealthApp() {
  return (
    <MainCard title="Bar Health">
    

            <Grid item xs={12} sx={{mb:2 ,mr:4}}> <UserCountCard primary="Daily Guests" secondary="75" iconPrimary={ContactsOutlined} color="success.light"/> </Grid>

        <Grid item xs={12}   sx={{mb:2 ,mr:4}}>

        <RoundIconCard
          primary="Impact"
          secondary="7 Days Since Last Inventory"
          content="May 30 - June 01 (2024)"
          iconPrimary={FieldTimeOutlined}
          color="warning.main"
          bgcolor="warning.lighter"
        
        />
        </Grid>
        <Grid container xs={12} spacing={4}>
            <Grid item xs={8}><IncomeOverviewCard/></Grid>
            
            <Grid item xs={4} sx={{mt:1.5}}><TrafficSources/></Grid>
        </Grid>
    </MainCard>
  );
}

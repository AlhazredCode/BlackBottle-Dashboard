import { Grid } from '@mui/material';
import {Typography} from '@mui/material';
// project imports

import LogHistory from 'sections/dashboard/analytics/LogHistory';
// ==============================|| SAMPLE PAGE ||============================== //

export default function LogPage() {
  return (
    <>
          <Grid item>
          <Typography variant="h5">Log History</Typography>
        </Grid>
    <LogHistory/>
    </>
    )
    ;
}

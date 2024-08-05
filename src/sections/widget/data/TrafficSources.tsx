// material-ui
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ===========================|| DATA WIDGET - TRAFFIC SOURCES ||=========================== //

const liquorCategories = [
  { name: 'Whiskey', inventory: 65 },
  { name: 'Wine', inventory: 30 },
  { name: 'Beer', inventory: 85 },
  { name: 'By the glass', inventory: 15 },
  { name: 'Tequila', inventory: 45 },
  { name: 'Special', inventory: 99 },
  
  // Add more categories here
];


export default function TrafficSources() {
  return (
    <MainCard
      title="Par Balance"
      subheader={
        <Typography variant="caption" color="secondary">
         Your inventory compared to your setted par flow, the items without a par flow assigned will be not counted 
        </Typography>
      }
    >
     <Grid container spacing={3}>
      {liquorCategories.map((category) => (
        <Grid item xs={12} key={category.name}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item sm zeroMinWidth>
              <Typography variant="body2">{category.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" align="right">
                {category.inventory}%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgress
                variant="determinate"
                value={category.inventory}
                color={category.inventory < 20 ? 'error' : 'primary'} // Change color based on inventory level
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
    </MainCard>
  );
}

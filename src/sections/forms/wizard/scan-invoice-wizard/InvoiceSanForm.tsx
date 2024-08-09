// material-ui
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import MainCard from 'components/MainCard';
import ProductsSearch from 'sections/apps/e-commerce/products/ProductsSearch';
import { Box } from '@mui/material';
import RecipesBacklog from 'sections/apps/e-commerce/Recipes';
import CreateRecipe from 'views/apps/recipes-list/recipes-create';
import DropZonePlugin from 'views/forms/plugins/dropzone';
import DropzoneScans from 'views/forms/plugins/dropzone-scan';


// ==============================|| BASIC WIZARD - ADDRESS ||============================== //

export default function InvoiceScanForm() {
  return (
    <>
      <MainCard>
      <Grid container xs={12}>
      <Grid item  xs={12}>
      <DropzoneScans/>
      </Grid>
      </Grid>
      </MainCard>
    </>
  );
}

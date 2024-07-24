
// material-ui
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// types

// project imports
import MainCard from 'components/MainCard';

// assets
import SearchOutlined from '@ant-design/icons/SearchOutlined';


export default function ProductsSearch() {


 

  

  // search filter
  const handleSearch = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | undefined) => {
   
  };

  // sort filter
  

  return (
    <MainCard  divider={true}>
      <Stack

        sx={{ p: 1 }}
        spacing={2}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5}>
         

          <TextField
            sx={{ '& .MuiOutlinedInput-input': { pl: 0 } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined style={{ fontSize: 'small' }} />
                </InputAdornment>
              )
            }}
           
            placeholder="Search Bottles on the Database"
            fullWidth={true}
            size="medium"
            onChange={handleSearch}
          />
        </Stack>
       
      </Stack>
    </MainCard>
  );
}

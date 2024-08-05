import { useState } from 'react';

// material-ui
import { alpha, useTheme, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';

// third-party
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

// project import
import AddStory from './AddStory';
import UserStory from './UserStory';
import ItemDetails from 'sections/apps/kanban/Board/ItemDetails';
import MainCard from 'components/MainCard';

// assets
import PlusOutlined from '@ant-design/icons/PlusOutlined';

import { Product } from 'types/products';
import productsData from 'api/sample-products';

const getDropWrapper = (isDraggingOver: boolean, theme: Theme) => ({
  background: isDraggingOver ? alpha(theme.palette.secondary.lighter, 0.65) : 'transparent'
});

// ==============================|| KANBAN - BACKLOGS ||============================== //

export default function   VendorsProductBacklog() {
  const theme = useTheme();



  const products: Product[] = productsData; 


  // drawer
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleDrawerOpen = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const addStory = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
   
<MainCard content={false}>
      <TableContainer sx={{ '& .MuiTableCell-root': { p: 1.25 } }}>
        <DragDropContext onDragEnd={() => { }}>
          <Droppable droppableId="user-story" type="user-story">
            {(provided, snapshot) => (
              <Table 
              size="small"
              aria-label="collapsible table"
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={getDropWrapper(snapshot.isDraggingOver, theme)}
              >
                <TableHead
                  sx={{
                    bgcolor: 'background.paper',
                    borderTop: 'none',
                    borderBottomWidth: '1px',
                    '& th,& td': { whiteSpace: 'nowrap' }
                  }}
                >
                  <TableRow>
                    {/* Nueva fila del header */}
                   
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell> 
                    <TableCell>Name</TableCell>
                    
                    <TableCell>Price</TableCell>
                    <TableCell>Status</TableCell>
                    
                   
                  </TableRow>
                </TableHead>

                <TableBody 
                    sx={{
                      
                      '& th,& td': { whiteSpace: 'nowrap' },
                      '& .MuiTableRow-root:last-of-type .MuiTable-root .MuiTableCell-root': {
                        borderBottom: '1px solid',
                        borderBottomColor: 'divider'
                      },
                      '& .MuiTableRow-root:hover': { bgcolor: 'transparent' }
                    }}
                >
                  {products.map((product, index) => (
                    <UserStory key={product.SKU} product={product} index={index} />
                  ))}
                  {provided.placeholder}
                </TableBody>
              </Table>
            )}
          </Droppable>
        </DragDropContext>
        <AddStory open={openDrawer} handleDrawerOpen={handleDrawerOpen} />
        <ItemDetails />
      </TableContainer>
    </MainCard>
  );
}


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

import { Receipt } from 'types/receipts'; // Importa la interfaz Receipt
import receiptsData from 'api/sample-receipts'; // Importa la data de recetas

const getDropWrapper = (isDraggingOver: boolean, theme: Theme) => ({
  background: isDraggingOver ? alpha(theme.palette.secondary.lighter, 0.65) : 'transparent'
});

export default function RecipesBacklog() {
  const theme = useTheme();

  const receipts: Receipt[] = receiptsData; // Usa la data de recetas

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
                    <TableCell sx={{ pl: 3 }}>
                      <Tooltip title="Add Recipe"> 
                        
                        <Button variant="dashed" size="extraSmall" color="secondary" onClick={addStory} endIcon={<PlusOutlined />}>
                          ADD
                        </Button>
                        
                      </Tooltip>
                    </TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell> {/* Cambiado a "Name" */}
                   
                    <TableCell>Category</TableCell> {/* Cambiado a "Category" */}
                    
                    <TableCell>Options</TableCell>
                    
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
                  {receipts.map((receipt, index) => (
                    <UserStory key={index} receipt={receipt} index={index} /> 
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
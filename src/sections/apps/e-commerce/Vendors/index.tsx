import React, { useState } from 'react';

// material-ui
import { alpha, useTheme, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import VendorView from 'sections/widget/data/VendorView';
// third-party
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

// project import
import AddStory from './AddStory';
import UserStory from './UserStory'; // Asegúrate de que este componente pueda manejar datos de vendors
import ItemDetails from 'sections/apps/kanban/Board/ItemDetails';
import MainCard from 'components/MainCard';

// assets
import PlusOutlined from '@ant-design/icons/PlusOutlined';

import { Vendor } from 'types/vendors';
import vendorsData from 'api/sample-vendors';
import VendorsModal from 'sections/apps/customer/VendorstModal';

const getDropWrapper = (isDraggingOver: boolean, theme: Theme) => ({
  background: isDraggingOver ? alpha(theme.palette.secondary.lighter, 0.65) : 'transparent'
});

// ==============================|| KANBAN - BACKLOGS ||============================== //

export default function VendorsBacklog() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // Utiliza los datos de vendors
  const vendors: Vendor[] = vendorsData;

  const handleDrawerOpen = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState<Element | (() => Element) | null | undefined>(null);


  const addStory = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [customerModalOpen, setCustomerModalOpen] = useState<boolean>(false);

  return (
<>
<Box  sx={{mb: 4}}>
<VendorView />

</Box>
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
                      <Tooltip title="Add Vendor"> 
                        <Button variant="dashed" size="extraSmall" color="secondary" onClick={() => { handleClose(); setCustomerModalOpen(true); }} endIcon={<PlusOutlined />}>
                          ADD
                        </Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Company Name</TableCell>
                 
                    <TableCell>Phone</TableCell> 
                 
                    <TableCell>City</TableCell>
                  
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
                  {vendors.map((vendor, index) => (
                    <UserStory key={vendor.id} vendor={vendor} index={index} /> 
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
    <VendorsModal open={customerModalOpen} modalToggler={setCustomerModalOpen}  />
    </>
  );
}
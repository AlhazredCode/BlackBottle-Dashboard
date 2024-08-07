import { useState } from 'react';
import { alpha, useTheme, Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import MainCard from 'components/MainCard';
import { Product } from 'types/products';
import productsData from 'api/sample-products';
import vendorsData from 'api/sample-vendors'; 
import UserStory from './UserStory';
import { Order } from 'types/orders';
import ordersData from 'api/sample-orders';


const getDropWrapper = (isDraggingOver: boolean, theme: Theme) => ({
  background: isDraggingOver ? alpha(theme.palette.secondary.lighter, 0.65) : 'transparent'
});

export default function OrdersBacklog() {
  const theme = useTheme();
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
          <Droppable droppableId="order" type="order">
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
                    <TableCell >
                 
                    </TableCell> 
                    <TableCell>Order ID</TableCell>
                    <TableCell>Vendor</TableCell> 
                    <TableCell>Products</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Date</TableCell> 
                    
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
                  {ordersData.map((order, index) => (
                    <UserStory key={order.id} order={order} index={index} /> 
                  ))}
                  {provided.placeholder}
                </TableBody>
              </Table>
            )}
          </Droppable>
        </DragDropContext>
      </TableContainer>
    </MainCard>
  );
}
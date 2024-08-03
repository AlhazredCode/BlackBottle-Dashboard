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
import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';

// project import
import AddStory from './AddStory';
import UserStory from './UserStory';
import ItemDetails from 'sections/apps/kanban/Board/ItemDetails';
import MainCard from 'components/MainCard';

// assets
import PlusOutlined from '@ant-design/icons/PlusOutlined';

// types
import { KanbanUserStory } from 'types/kanban';

const getDropWrapper = (isDraggingOver: boolean, theme: Theme) => ({
  background: isDraggingOver ? alpha(theme.palette.secondary.lighter, 0.65) : 'transparent'
});

// Datos de ejemplo para productData
const productData: KanbanUserStory[] = [
  {
    id: 'story-1',
    title: 'Crear interfaz de usuario',
    acceptance: 'La interfaz de usuario debe ser intuitiva y fácil de usar.',
    assign: 'user-1',
    columnId: 'column-1',
    description: 'Diseñar y desarrollar la interfaz de usuario principal de la aplicación.',
    dueDate: new Date(),
    itemIds: ['item-1', 'item-2'],
    priority: 'low'
  },
  {
    id: 'story-2',
    title: 'Implementar la lógica',
    acceptance: 'La lógica debe ser eficiente y libre de errores.',
    assign: 'user-2',
    columnId: 'column-2',
    description: 'Escribir el código para implementar la lógica principal de la aplicación.',
    dueDate: new Date(),
    itemIds: ['item-3'],
    priority: 'high'
  }
];

// ==============================|| KANBAN - BACKLOGS ||============================== //

export default function ProductBacklog() {
  const theme = useTheme();

  const [userStoryOrder, setUserStoryOrder] = useState<string[]>(productData.map(story => story.id));

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (type === 'user-story') {
      const newUserStoryOrder = Array.from(userStoryOrder);
      newUserStoryOrder.splice(source.index, 1);
      newUserStoryOrder.splice(destination?.index, 0, draggableId);
      setUserStoryOrder(newUserStoryOrder);
      return;
    }

    // Lógica para mover items dentro de una historia 
    const updatedProductData = [...productData];
    const sourceStoryIndex = updatedProductData.findIndex(
      (story) => story.id === source.droppableId
    );
    const destinationStoryIndex = updatedProductData.findIndex(
      (story) => story.id === destination.droppableId
    );

    if (sourceStoryIndex !== -1 && destinationStoryIndex !== -1) {
      const [draggedItem] = updatedProductData[sourceStoryIndex].itemIds.splice(
        source.index,
        1
      );
      updatedProductData[destinationStoryIndex].itemIds.splice(
        destination.index,
        0,
        draggedItem
      );
      // Actualiza el estado con los datos modificados
      // (Aquí podrías actualizar la API si fuera necesario)
    }
  };

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
        <DragDropContext onDragEnd={onDragEnd}>
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
                      <Tooltip title="Add User Story">
                        <Button variant="dashed" size="extraSmall" color="secondary" onClick={addStory} endIcon={<PlusOutlined />}>
                          ADD
                        </Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell />
                    <TableCell>State</TableCell>
                    <TableCell>Assigned To</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Due Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  sx={{
                    bgcolor: 'red',
                    '& th,& td': { whiteSpace: 'nowrap' },
                    '& .MuiTableRow-root:last-of-type .MuiTable-root .MuiTableCell-root': {
                      borderBottom: '1px solid',
                      borderBottomColor: 'divider'
                    },
                    '& .MuiTableRow-root:hover': { bgcolor: 'transparent' }
                  }}
                >
       {userStoryOrder.map((storyId: string, index: number) => {
    const story = productData.find((story: KanbanUserStory) => story.id === storyId);
    return story ? <UserStory key={story.id} story={story} index={index} /> : null;
  })}
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
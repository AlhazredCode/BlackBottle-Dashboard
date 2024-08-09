'use client';

import { useState } from 'react';


// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// project import
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import menuItem from 'menu-items'; // Asegúrate de que la ruta sea correcta
import { HORIZONTAL_MAX_ITEM, MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';
import { useGetMenuMaster } from 'api/menu';

// types
import { NavItemType } from 'types/menu';




const miMenu: NavItemType[] = [
  {
    id: "group-dashboard",
    title: "Black Bottle",
    type: "group",
    icon: "dashboard",
    children: [
      {
        id: "dashboard",
        title: "My Bar", 
        type: "collapse",
        icon: "dashboard",
        children: [
          {
            id: "default",
            title: "Dashboard",
            type: "item",
            url: "/dashboard/default",
            breadcrumbs: false,
          },
         {
            id: "analytics",
            title: "Bar Cost Calculator",
            type: "item",
            url: "/dashboard/analytics",
            breadcrumbs: false,
          },
        ],
      },
    ], 
  },

  
];

export default function Navigation() {
  const { menuOrientation } = useConfig();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const [selectedItems, setSelectedItems] = useState<string | undefined>('');
  const [selectedLevel, setSelectedLevel] = useState<number>(0);

  // Combinar `miMenu` con los elementos de `menuItem`
  const combinedMenu: NavItemType[] = [
    ...miMenu, 
    ...menuItem.items // Accede a la propiedad 'items' de menuItem
  ];

  const isHorizontal = menuOrientation === MenuOrientation.HORIZONTAL && !downLG;

  // Calcular `lastItem`, `lastItemIndex`, `remItems` y `lastItemId`
  const lastItem = isHorizontal ? HORIZONTAL_MAX_ITEM : null;
  let lastItemIndex = combinedMenu.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string | undefined = undefined;

  if (lastItem && lastItem < combinedMenu.length) {
    lastItemId = combinedMenu[lastItem - 1]?.id; 
    lastItemIndex = lastItem - 1;
    remItems = combinedMenu.slice(lastItem - 1, combinedMenu.length).map((item) => ({
      title: item.title,
      elements: item.children, 
      icon: item.icon,
      ...(item.url && { url: item.url }),
    }));
  }

  // Renderizar el menú
  const navGroups = combinedMenu.slice(0, lastItemIndex + 1).map((item, index) => {
    switch (item.type) {
      case 'group':
        if (item.url && item.id !== lastItemId) {
          return (
            <List key={item.id} {...(isHorizontal && { sx: { mt: 0.5 } })}>
              {!isHorizontal && index !== 0 && <Divider sx={{ my: 0.5 }} />}
              <NavItem item={item} level={1} isParents />
            </List>
          );
        }

        return (
          <NavGroup
            key={item.id}
            setSelectedItems={setSelectedItems}
            setSelectedLevel={setSelectedLevel}
            selectedLevel={selectedLevel}
            selectedItems={selectedItems}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId} // Asegúrate de que lastItemId se maneja correctamente en NavGroup
            item={item}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return (
    <Box
      sx={{
        pt: drawerOpen ? (isHorizontal ? 0 : 2) : 0,
        ...(!isHorizontal && {
          '& > ul:first-of-type': { mt: 0 }
        }),
        display: isHorizontal ? { xs: 'block', lg: 'flex' } : 'block'
      }}
    >
      {navGroups}
    </Box>
  );
}
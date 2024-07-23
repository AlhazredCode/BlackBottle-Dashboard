// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {ChromeOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined , PicCenterOutlined  } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { ChromeOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined, PicCenterOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //



const samplePage: NavItemType = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreOutlined,
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: <FormattedMessage id="sample-page" />,
      type: 'item',
      url: '/sample-page',
      icon: icons.AppstoreOutlined,
      breadcrumbs: false
    },
    {
    id: 'Menu',
    title: <FormattedMessage id="Menu" />,
    type: 'collapse',
    icon: icons.ReadOutlined,
    children: [



    {
      id: 'main-menu',
      title: <FormattedMessage id="Main Menu" />,
      type: 'item',
      url: '/mainmenu',
      icon: icons.SnippetsOutlined,
      target: false
    },


    {
      id: 'add-product',
      title: <FormattedMessage id="Add Product" />,
      type: 'item',
      url: '/add-product',
      icon: icons.DiffOutlined,
      target: false
    }

  ]
  },

  {
    id: 'bar-log',
    title: <FormattedMessage id="Bar Log" />,
    type: 'item',
    url: '/barlog',
    icon: icons.PicCenterOutlined,
    breadcrumbs: false
  },

    {
      id: 'bar-health',
      title: <FormattedMessage id="Bar Health" />,
      type: 'item',
      url: '/bar-health',
      icon: icons.DotChartOutlined,
      breadcrumbs: false
    },

    {
      id: 'inventory',
      title: <FormattedMessage id="Inventory" />,
      type: 'item',
      url: '/inventory',
      icon: icons.ProductOutlined,
      breadcrumbs: false
    },

    {
      id: 'chat',
      title: <FormattedMessage id="Chat" />,
      type: 'item',
      url: '/chat',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    },
    
    
      ]
    };




export default samplePage;

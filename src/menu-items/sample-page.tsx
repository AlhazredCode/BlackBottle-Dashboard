// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {ChromeOutlined,DollarOutlined, TeamOutlined, AuditOutlined, BookOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined , PicCenterOutlined  } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { ChromeOutlined,DollarOutlined, TeamOutlined, AuditOutlined, BookOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined, PicCenterOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //



const samplePage: NavItemType = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreOutlined,
  type: 'group',
  children: [

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
    id: 'BarLog',
    title: <FormattedMessage id="Bar Log" />,
    type: 'collapse',
    icon: icons.PicCenterOutlined,
    children: [



    {
      id: 'bar-log',
      title: <FormattedMessage id="Inventory Log" />,
      type: 'item',
      url: '/barlog', 
      icon: icons.BookOutlined, 
      target: false
    },


    {
      id: 'add-product',
      title: <FormattedMessage id="Start Inventory" />,
      type: 'item',
      url: '/start-inventory',
      icon: icons.AuditOutlined, 
      target: false
    }

  ]
  },

  

  {
    id: 'guest-log',
    title: <FormattedMessage id="Guests" />,
    type: 'item',
    url: '/guest-log',
    icon: icons.TeamOutlined,
    breadcrumbs: false
  },

  {
    id: 'sales',
    title: <FormattedMessage id="Sales" />,
    type: 'item',
    url: '/sales',
    icon: icons.DollarOutlined, 
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

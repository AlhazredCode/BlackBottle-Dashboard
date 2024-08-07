// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {ChromeOutlined, BarsOutlined,  FileMarkdownOutlined, ExperimentOutlined ,ReconciliationOutlined,ShopOutlined,OneToOneOutlined,ApiOutlined, DollarOutlined, TeamOutlined, AuditOutlined, BookOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined , PicCenterOutlined  } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { ChromeOutlined, BarsOutlined,  FileMarkdownOutlined, ExperimentOutlined , ReconciliationOutlined, ShopOutlined, OneToOneOutlined, ApiOutlined, DollarOutlined, TeamOutlined, AuditOutlined, BookOutlined, AppstoreOutlined, MessageOutlined, DotChartOutlined, ProductOutlined, ReadOutlined, SnippetsOutlined, DiffOutlined, PicCenterOutlined };

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
      id: 'product-list',
      title: <FormattedMessage id="Product List" />,
      type: 'item',
      url: '/product-list',
      icon: icons.BarsOutlined,
      target: false
    },

    {
      id: 'add-product',
      title: <FormattedMessage id="Add Product" />,
      type: 'item',
      url: '/add-product',
      icon: icons.DiffOutlined,
      target: false
    } ,

    {
      id: 'add-product-recipe',
      title: <FormattedMessage id="Add Recipe" />,
      type: 'item',
      url: '/add-product-recipe',
      icon: icons.ExperimentOutlined,
      target: false
    }  ,

    {
      id: 'add-product-edit-recipe',
      title: <FormattedMessage id="Edit Recipe" />,
      type: 'item',
      url: '/add-product-edit-recipe',
      icon: icons.FileMarkdownOutlined,
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
    id: 'Orders',
    title: <FormattedMessage id="Orders" />,
    type: 'collapse',
    icon: icons.ShopOutlined,
    children: [



    {
      id: 'order-build',
      title: <FormattedMessage id="Build Order" />,
      type: 'item',
      url: '/order-build', 
      icon: icons.ReconciliationOutlined, 
      target: false
    },


    {
      id: 'order-list',
      title: <FormattedMessage id="Orders List" />,
      type: 'item',
      url: '/order-list', 
      icon: icons.BarsOutlined, 
      target: false
    },


    {
      id: 'order-par',
      title: <FormattedMessage id="Par Flow" />,
      type: 'item',
      url: '/order-par', 
      icon: icons.OneToOneOutlined, 
      target: false
    },

    {
      id: 'chat',
      title: <FormattedMessage id="Orders Chat" />,
      type: 'item',
      url: '/chat',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    },

    {
      id: 'order-vendors',
      title: <FormattedMessage id="Manage Vendors" />,
      type: 'item',
      url: '/order-vendors',
      icon: icons.ApiOutlined, 
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
    id: 'bar-health',
    title: <FormattedMessage id="Bar Health" />,
    type: 'item',
    url: '/bar-health',
    icon: icons.DotChartOutlined,
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

  

    

  
    
    
      ]
    };




export default samplePage;

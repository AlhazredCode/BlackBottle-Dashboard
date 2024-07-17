// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {ChromeOutlined, AppstoreOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { ChromeOutlined, AppstoreOutlined };

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
      id: 'main-menu',
      title: <FormattedMessage id="main-menu" />,
      type: 'item',
      url: '/mainmenu',
      icon: icons.AppstoreOutlined,
      breadcrumbs: false
    },
    
      ]
    };


export default samplePage;

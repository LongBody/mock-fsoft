import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const MenuChild = [
  {
    title: 'Dashboard',
    key: 'admin-dashboard',
    icon: <i className="fa-solid fa-chart-bar"></i>,
    path: '/admin/dashboard',
  },
  {
    title: 'Product',
    key: 'product-management',
    icon: <i className="fab fa-wpforms"></i>,
    itemChild: [
      {
        title: 'Product List',
        key: 'product-list-management',
        path: '/admin/product-list-management',
      },
      {
        title: 'Add Product',
        key: 'add-product-management',
        path: '/admin/add-product-management',
      },
    ],
  },
  {
    title: 'User',
    key: 'user-management',
    icon: <i className="fa-solid fa-user"></i>,
    path: '/admin/account-management',
    itemChild: [
      {
        title: 'User List',
        key: 'user-list-management',
        path: '/admin/user-management-list',
      },
      {
        title: 'Add User',
        key: 'add-user-management',
        path: '/admin/add-user-management',
      },
    ],
  },
  {
    title: 'Order',
    key: 'order-management',
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    path: '/admin/order-management',
  },
  {
    title: 'Settings',
    key: 'settings',
    icon: <i className="fa-solid fa-gear"></i>,
    path: '/admin/settings',
  },
];

export const menuItem = (location: any) =>
  MenuChild.map((item: any) => {
    return item?.itemChild?.length > 0 &&
      item?.itemChild?.length !== undefined ? (
      <Menu.SubMenu  key={item?.key} icon={item?.icon} title={item?.title}>
        {item?.itemChild?.map((itemChild: any) => {
          return (
            <Menu.Item
              className={
                location.pathname === itemChild?.path
                  ? 'active__menu--sider'
                  : ''
              }
              key={itemChild?.key}
              icon={itemChild?.icon}
            >
              <Link
                to={itemChild?.path}
                className={
                  location.pathname === itemChild?.path
                    ? 'active__menu--sider-link'
                    : ''
                }
              >
                {itemChild?.title}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    ) : (
      <Menu.Item
        className={
          location.pathname === item?.path ? 'active__menu--sider' : ''
        }
        key={item?.key}
        icon={item?.icon}
      >
        <Link
          to={item?.path}
          className={
            location.pathname === item?.path ? 'active__menu--sider-link' : ''
          }
        >
          {item?.title}
        </Link>
      </Menu.Item>
    );
  });

import { Layout, Menu, Avatar, Dropdown, Tag } from 'antd';
import React, { Fragment, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { menuItem } from 'app/components/admin-layout/template';
import './style.scss';

const { Header, Sider, Content } = Layout;

export const LayoutAdmin: React.FC<any> = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();

  const userInfoLocal = localStorage.getItem('user');
  // const userInfoCookies = getCookie('user-info');
  let userInfo: any;

  if (userInfoLocal) {
    userInfo = JSON.parse(userInfoLocal);
  }

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  console.log(userInfo);

  const menu = (
    <Menu>
      <Menu.Item className="menu-signed" onClick={logout}>
        <i className="fa-solid fa-arrow-right-from-bracket mr-10"></i>Logout
      </Menu.Item>
    </Menu>
  );

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Fragment>
      <Layout style={{ height: '100vh' }}>
        <Sider
          style={{ backgroundColor: '#FFD333; !important' }}
          trigger={null}
          collapsible
          theme="light"
          collapsed={collapsed}
          width="240px"
        >
          <div className="admin--host">
            <div className="admin--host--content">
              <Link
                to={process.env.PUBLIC_URL + '/admin/dashboard'}
                className=""
              >
                <div
                  className={collapsed ? 'admin__collapsed' : 'admin__collapse'}
                >
                  <span className="admin--host--title">SHOP APP</span>
                  {collapsed ? '' : <Tag color={'default'}>Admin</Tag>}
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              collapsed
                ? 'menu__application__title__collapsed'
                : 'menu__application__title'
            }
          >
            Applications
          </div>
          <Menu key="admin" mode="inline" theme="dark" className="sider__menu">
            {menuItem(location)}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{ padding: 0 }}
            className="site-layout-background background___header"
          >
            <div className="header__container">
              <div onClick={toggle} className="trigger">
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <Dropdown
                overlay={menu}
                placement="bottom"
                className="cursor-pointer"
              >
                <div className='right__side'>
                  <div className='right__side__name bold'>
                    {userInfo?.username ? userInfo?.username : ''}
                  </div>
                  <div className='right__side__name gray'>Admin</div>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              height: '100%',
            }}
          >
            {props?.content}
          </Content>
        </Layout>
      </Layout>
    </Fragment>
  );
};

// ADMIN PAGE
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { AdminDashboardPage } from 'app/pages/admin/admin-dashboard-page/screen';
import { AdminUserManagementPage } from 'app/pages/admin/admin-user-management/screen';

export const PrivateAdminRoute: React.FC<any> = (props) => {
  // const token = getCookie('token');
  const token = localStorage.getItem('accessToken');
  const userInfoLocal = localStorage.getItem('user');
  // const userInfoCookies = getCookie('user-info');
  let userInfo: any;

  if (userInfoLocal) {
    userInfo = JSON.parse(userInfoLocal);
  }

  const { component: Component, ...restProps } = props;

  if (!Component) return null;

  return (
    <Route
      {...restProps}
      render={(routeRenderProps) =>
        token && userInfo?.role === 'admin' ? (
          <Component {...routeRenderProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: routeRenderProps.location },
            }}
          />
        )
      }
    />
  );
};

export const adminRouter = [
  { path: '/admin/dashboard', component: AdminDashboardPage },
  { path: '/admin/user-management-list', component: AdminUserManagementPage },
];

import { Redirect, Route } from 'react-router-dom';
import { NotFoundPage } from 'app/pages/user/not-found-page/screen/Loadable';
import { HomePage } from 'app/pages/user/home-page/screen/Loadable';
import { SignInPage } from 'app/pages/user/sign-in/screen/Loadable';

export const PrivateUserRoute: React.FC<any> = (props) => {
  // const token = getCookie('token');
  const token = localStorage.getItem('token');
  const userInfoCookies = localStorage.getItem('user-info');
  // const userInfoCookies = getCookie('user-info');
  let userInfo: any;

  if (userInfoCookies) {
    userInfo = JSON.parse(userInfoCookies);
  }

  const { component: Component, ...restProps } = props;

  if (!Component) return null;

  return (
    <Route
      {...restProps}
      render={(routeRenderProps) =>
        token && userInfo?.role ? (
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

export const userRouter = [
  { path: '/', component: HomePage, private: false },
  // { component: NotFoundPage, private: false },
  { path: '/sign-in', component: SignInPage, private: false },
];

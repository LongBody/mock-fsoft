/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import 'antd/dist/antd.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { userRouter, PrivateUserRoute } from 'app/pages/user/router';
import { adminRouter, PrivateAdminRoute } from 'app/pages/admin/router';
// import { interceptor } from 'utils/interceptor'
// import { useTranslation } from 'react-i18next';

export function App() {
  // const { i18n } = useTranslation();
  // interceptor()
  const userRouteComponents = userRouter?.map((item: any, key) => {
    return item?.private === true ? (
      <PrivateUserRoute
        path={item?.path}
        component={item?.component}
        key={key}
      />
    ) : (
      <Route exact path={item?.path} component={item?.component} key={key} />
    );
  });

  const routeAdminComponents = adminRouter?.map(({ path, component }, key) => (
    <PrivateAdminRoute exact path={path} component={component} key={key} />
  ));

  return (
    <BrowserRouter>
      <Switch>
        {/* User Route */}
        {userRouteComponents}
        {/* Admin Route */}
        {routeAdminComponents}

      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

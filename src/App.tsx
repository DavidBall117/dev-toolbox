import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

import routes from './Constants/routes';

import './Styles/app.scss';

export default function App() {
  /*
    TODO contain navbar, page content and footer content within page
  */
  return (
    <BrowserRouter>
      <main>
        <p>{process.env.REACT_APP_NAME}</p>

        <div>
          <ul>
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>
                  {route.friendlyName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Switch>
            {routes.map(route => 
              <Route
                key={route.friendlyName}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            )}
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};

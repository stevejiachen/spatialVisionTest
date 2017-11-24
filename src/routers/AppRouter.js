import React from 'react';
import { Router,BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppDashboardPage from '../components/AppDashboardPage';
import ProfilePage from '../components/ProfilePage';
import CreateProfilePage from '../components/CreateProfilePage';
import EditProfilePage from '../components/EditProfilePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// const AppRouter = () => (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/" component={CreateProfilePage} exact={true}/>
//           <Route path="/dashboard" component={AppDashboardPage} exact={true}/>
//           <Route path="/profile" component={ProfilePage} exact={true}/>
//           <Route path="/profile/create" component={CreateProfilePage} exact={true}/>
//           <Route path="/profile/edit" component={EditProfilePage} exact={true}/>
//           <Route component={NotFoundPage} />
//         </Switch>
//       </div>
//     </BrowserRouter>
// );
//
// export default AppRouter;

export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={CreateProfilePage} exact={true}/>
          <PrivateRoute path="/dashboard" component={AppDashboardPage} exact={true}/>
          <PrivateRoute path="/profile" component={ProfilePage} exact={true}/>
          <PrivateRoute path="/profile/edit" component={EditProfilePage} exact={true}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
);

export default AppRouter;

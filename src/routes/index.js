import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import AccountRoute from './Account'
import NotFoundRoute from './NotFound'
import MainRoute from './Main'

// face-web
import FaceWebLayout from '../layouts/FaceWebLayout';
import DashboardRoute from './User/Dashboard';
import PostRoute from './User/Post';
import PostsRoute from './Admin/Post';
import FormRoute from './User/Form2';

export default function createRoutes(store) {
  return (
    <Switch>
    <Route exact path={MainRoute.path} component={MainRoute.component} />
    <FaceWebLayout>
    {/* Build Route components from routeSettings */
    [
      Home,
      AccountRoute,
      SignupRoute,
      LoginRoute,
      DashboardRoute,
      PostRoute,
      PostsRoute,
      FormRoute,
      /* Add More Routes Here */
    ].map((settings, index) => (
      <Route key={`Route-${index}`} {...settings} />
    ))}
    </FaceWebLayout>
    <Route component={NotFoundRoute.component} />
  </Switch>
  )
}

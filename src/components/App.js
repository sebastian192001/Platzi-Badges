import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import BageEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetailsContainer';

function App() {
    return (
        <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgesNew}/>
            <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
            <Route exact path="/badges/:badgeId/edit" component={BageEdit}/>
            <Route path="/404" component={NotFound}/>
            <Redirect from="*" to="/404" />
        </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App;
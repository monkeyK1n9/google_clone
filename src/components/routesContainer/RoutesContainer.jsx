import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Results } from '../results/Results';

export const RoutesContainer = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/" >
                    <Redirect to="/search" />
                </Route>

                <Route exact path={['/search', '/imagesearch']}>
                    <Results />
                </Route>
            </Switch>
        </div>
    )
}
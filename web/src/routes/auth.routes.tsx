import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Signin from '../pages/Signin';

const Auth : React.FC = () => {
    return (
        <Switch>
            <Route path='/' component={Signin}/>
        </Switch>
    );
}

export default Auth;
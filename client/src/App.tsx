import React, { useEffect } from 'react';

import UsersTableContainer from './containers/UsersTable';

import { AppProps } from './types';

const App = (props: AppProps) => {
    useEffect(() => {
        props.getUsers();
    }, []);

    return <UsersTableContainer />;
};

export default App;

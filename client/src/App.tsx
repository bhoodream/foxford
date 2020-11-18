import React, { useEffect } from 'react';

import UsersTableContainer from './containers/UsersTable';

const App = (props) => {
    useEffect(() => props.getUsers(), []);

    return <UsersTableContainer />;
};

export default App;

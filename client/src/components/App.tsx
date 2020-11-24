import React, { useEffect } from 'react';

import UsersTableContainer from '../containers/UsersTable';

import { AppProps } from '../types';

const App = (props: AppProps) => {
    useEffect(() => {
        props.getUsers();
    }, []);

    return (
        <UsersTableContainer
            users={props.users}
            checkedUsersIds={props.checkedUsersIds}
            checkedAll={props.checkedAll}
        />
    );
};

export default App;

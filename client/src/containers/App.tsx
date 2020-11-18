import { connect } from 'react-redux';

import { getUsers } from '../store/actions';

import { StoreState } from '../types';

import App from '../App';

const mapStateToProps = (state: StoreState) => {
    return {
        users: state.users,
        checkedUsersIds: state.checkedUsersIds,
        checkedAll: state.users.every(
            ({ id }) => state.checkedUsersIds.indexOf(id) > -1
        ),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

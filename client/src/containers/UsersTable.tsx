import { connect } from 'react-redux';

import { checkUsers } from '../store/actions';
import { StoreState, CheckedUsersIds } from '../types';

import UsersTable from '../UsersTable';

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
        checkUsers: (checkedUsersIds: CheckedUsersIds) => {
            dispatch(checkUsers(checkedUsersIds));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);

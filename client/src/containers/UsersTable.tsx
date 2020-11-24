import { connect } from 'react-redux';

import { checkUsers } from '../store/actions';
import { CheckedUsersIds } from '../types';

import UsersTable from '../components/UsersTable';

const mapDispatchToProps = (dispatch: any) => {
    return {
        checkUsers: (checkedUsersIds: CheckedUsersIds) => {
            dispatch(checkUsers(checkedUsersIds));
        },
    };
};

export default connect(null, mapDispatchToProps)(UsersTable);

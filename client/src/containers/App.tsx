import { connect } from 'react-redux';

import { getUsers } from '../store/actions';

import App from '../App';

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },
    };
};

export default connect(null, mapDispatchToProps)(App);

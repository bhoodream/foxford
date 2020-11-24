import { StoreState } from '../types';

import { INITIAL_STATE, SET_USERS, CHECK_USERS } from './Const';

export default (state: StoreState = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload.users };
        case CHECK_USERS:
            return {
                ...state,
                checkedUsersIds: action.payload.checkedUsersIds,
            };
        default:
            return state;
    }
};

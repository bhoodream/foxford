import axios from 'axios';

import { SET_USERS, CHECK_USERS } from './Const';
import { Users, CheckedUsersIds } from '../types';

export const getUsers = () => (dispatch: any) =>
    axios
        .get('http://localhost:9000/users')
        .then(({ data }) => dispatch(setUsers(data)))
        .catch((e) =>
            console.error(`Ошибка при загрузке пользователей!\n\n${e}`)
        );

export const setUsers = (users: Users) => ({
    type: SET_USERS,
    payload: { users },
});

export const checkUsers = (checkedUsersIds: CheckedUsersIds) => ({
    type: CHECK_USERS,
    payload: { checkedUsersIds },
});

export type UserId = string;

export interface User {
    id: UserId;
    name: string;
    surName: string;
    age: number;
}

export type Users = User[];

export type CheckedUsersIds = string[];

export interface StoreState {
    users: Users;
    checkedUsersIds: CheckedUsersIds;
}

export interface AppProps {
    getUsers: () => void;
    users: Users;
    checkedUsersIds: CheckedUsersIds;
    checkedAll: boolean;
}

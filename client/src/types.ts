export type UserId = string;

export interface AppProps {
    getUsers: () => void;
}

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

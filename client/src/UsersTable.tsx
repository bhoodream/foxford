import React from 'react';
import classNames from 'classnames';

import {
    withStyles,
    Theme,
    createStyles,
    makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import { Users, CheckedUsersIds } from './types';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.success.light,
            fontSize: 16,
            fontWeight: 'bold',
        },
    })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&._checked': {
                backgroundColor: theme.palette.grey[200],
            },
        },
    })
)(TableRow);

const useStyles = makeStyles({
    checkboxRow: {
        width: 50,
    },
});

const UsersTable = (props: {
    users: Users;
    checkedAll: boolean;
    checkedUsersIds: CheckedUsersIds;
    checkUsers: any;
}) => {
    const { users, checkedAll, checkedUsersIds = [], checkUsers } = props;
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.checkboxRow}>
                            <Checkbox
                                color="default"
                                checked={!!users.length && checkedAll}
                                onChange={() =>
                                    checkedAll
                                        ? checkUsers([])
                                        : checkUsers(users.map((u) => u.id))
                                }
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                    title: 'Выделить всё',
                                }}
                            />
                        </StyledTableCell>
                        <StyledTableCell>Имя</StyledTableCell>
                        <StyledTableCell align="right">Фамилия</StyledTableCell>
                        <StyledTableCell align="right">Возраст</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!users.length && (
                        <TableRow>
                            <TableCell colSpan={4}>Загрузка...</TableCell>
                        </TableRow>
                    )}
                    {users.map((user) => {
                        const isUserChecked =
                            checkedAll || checkedUsersIds.indexOf(user.id) > -1;

                        return (
                            <StyledTableRow
                                key={user.id}
                                className={classNames({
                                    _checked: isUserChecked,
                                })}
                            >
                                <StyledTableCell
                                    className={classNames(classes.checkboxRow)}
                                >
                                    <Checkbox
                                        checked={isUserChecked}
                                        onChange={() =>
                                            isUserChecked
                                                ? checkUsers(
                                                      checkedUsersIds.filter(
                                                          (id) => id !== user.id
                                                      )
                                                  )
                                                : checkUsers([
                                                      ...checkedUsersIds,
                                                      user.id,
                                                  ])
                                        }
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.surName}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {user.age}
                                </StyledTableCell>
                            </StyledTableRow>
                        );
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>
                            <strong>Пользователи: </strong>
                            {users
                                .reduce(
                                    (acc: string[], { id, name }) =>
                                        checkedUsersIds.indexOf(id) > -1
                                            ? [...acc, name]
                                            : acc,
                                    []
                                )
                                .join(', ') ||
                                'ни одного пользователя не выбрано...'}
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;

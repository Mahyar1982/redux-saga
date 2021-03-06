import React from 'react';
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import users from "../reducers/users";

const UsersList = ({users, onDeleteUser}) => {
    return (
        <ListGroup>
            {users.sort((a, b) => {
                if(a.firstName > b.firstName) {
                    return 1;
                } else if(a.firstName < b.firstName) {
                    return -1;
                } else if(a.lastName > b.lastName) {
                    return 1;
                } else if(a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            }).map((user) => {
                return (
                    <ListGroupItem key={ user.id}>
                        <section style={{display: 'flex', margin: 'auto 0'}} >
                            <div style={{flexGrow: 1}}>
                                {user.firstName} {user.lastName}
                            </div>
                            <div>
                                <Button
                                    onClick={() => onDeleteUser(user.id)}
                                    outline color="danger">
                                    Delete
                                </Button>
                            </div>
                        </section>
                    </ListGroupItem>
                    )
            })}
        </ListGroup>
    )
};

export default UsersList;
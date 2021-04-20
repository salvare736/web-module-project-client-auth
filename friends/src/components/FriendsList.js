import React from 'react';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendFormValues: {
            id: NaN,
            name: '',
            age: NaN,
            email: ''
        }
    };

    render() {
        return (
            <div className='FriendsList-container'>
            </div>
        );
    }
}

export default FriendsList;

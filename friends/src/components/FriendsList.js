import React from 'react';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendFormValues: {
            id: '',
            name: '',
            age: Number('18'),
            email: ''
        },
        friends: []
    };

    handleChange = (e) => {
        if (e.target.name === 'age') {
            this.setState({
                friendFormValues: {
                    ...this.state.friendFormValues,
                    [e.target.name]: Number(e.target.value),
                    id: Math.random()
                },
                friends: [...this.state.friends]
            });
        } else {
            this.setState({
                friendFormValues: {
                    ...this.state.friendFormValues,
                    [e.target.name]: e.target.value,
                    id: Math.random()
                },
                friends: [...this.state.friends]
            });
        }
    };

    addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/friends', this.state.friendFormValues)
            .then((resp) => {
                console.log(resp.data);
                this.setState({
                    friendFormValues: {
                        ...this.state.friendFormValues
                    },
                    friends: resp.data
                });
            })
            .catch((err) => {
                console.log(err)
            });
    };

    render() {
        return (
            <div className='FriendsList-container'>
                <h2>Add a friend to your Friends List!</h2>
                <br/>
                <form onSubmit={this.addFriend}>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.friendFormValues.name}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Age:</label>
                    <input
                        type='number'
                        name='age'
                        min='1'
                        value={this.state.friendFormValues.age}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        placeholder="email@gmail.com"
                        value={this.state.friendFormValues.email}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Add friend</button>
                </form>
            </div>
        );
    }
}

export default FriendsList;

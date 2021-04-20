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
        friends: [],
        dataLoaded: false
    };

    handleChange = (e) => {
        if (e.target.name === 'age') {
            this.setState({
                friendFormValues: {
                    ...this.state.friendFormValues,
                    [e.target.name]: Number(e.target.value),
                    id: Math.random()*100
                },
                friends: [...this.state.friends],
                dataLoaded: true
            });
        } else {
            this.setState({
                friendFormValues: {
                    ...this.state.friendFormValues,
                    [e.target.name]: e.target.value,
                    id: Math.random()*100
                },
                friends: [...this.state.friends],
                dataLoaded: true
            });
        }
    };

    addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/friends', this.state.friendFormValues)
            .then((resp) => {
                console.log(resp.data, 'the array of friends has been updated');
                this.setState({
                    friendFormValues: {
                        ...this.state.friendFormValues
                    },
                    friends: resp.data,
                    dataLoaded: true
                });
            })
            .catch((err) => {
                console.log(err)
            });
    };

    getData() {
        axiosWithAuth()
            .get('/api/friends')
            .then(resp => {
                this.setState({
                    friendFormValues: {
                        ...this.state.friendFormValues
                    },
                    friends: resp.data,
                    dataLoaded: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        if (this.state.dataLoaded === true) {
            return (
                <>
                    <div className='Form-container'>
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
                            <br/>
                            <br/>
                        </form>
                    </div>
                    <div className='FriendsList-container'>
                        {this.state.friends.map(friend => {
                            return <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                        })}
                    </div>
                </>
            );
        } else {
            return <div className='Loading-container'><h3>Loading data...</h3></div>
        }
    }
}

export default FriendsList;

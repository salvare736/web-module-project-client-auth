import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/login', this.state.credentials)
            .then((resp) => {
                window.localStorage.setItem('token', JSON.stringify(resp.data.payload));
                this.props.history.push('/friendslist');
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className='Login-container'>
                <form onSubmit={this.login}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;

import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div className='Login-container'>
            </div>
        );
    }
}

export default Login;

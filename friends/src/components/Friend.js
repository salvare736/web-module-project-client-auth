import React from 'react';

class Friend extends React.Component {
    render() {
        return (
            <div className='Friend-container'>
                <h4>{this.props.name}</h4>
                <p>Age: {this.props.age}</p>
                <p>Email: {this.props.email}</p>
            </div>
        );
    }
}

export default Friend;

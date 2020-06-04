import React, { Component } from "react";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const {authError} = this.props;

        return(
            <div className={"container"}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Zaloguj się</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id={"email"} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id={"password"} onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <button className="btn pink lighten-1 z-depth-1">Submit</button>
                    </div>
                    <div className={"red-text center"}>
                        {authError ? <p>{authError}</p> : null }
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignInLinks = (props) => {

    return (
        <ul className={"right"}>
            <li><NavLink to={"/create"}>Add project</NavLink></li>
            <li><Link to={"/"} onClick={props.signOut} >Log out</Link></li>
            <li><NavLink to={"/"} className={"btn btn-floating pink lighten-1"}>TD</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}
const mapStateToProps = (state) => {
    return {
        initials: state.firestore.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);
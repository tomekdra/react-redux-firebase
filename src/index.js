import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
    reduxFirestore,
    getFirestore,
    createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbconfig";
import firebase from "firebase/app";
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig)
    )
);


const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
    return children
}

    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <React.StrictMode>
                    <AuthIsLoaded>
                        <App/>
                    </AuthIsLoaded>
                </React.StrictMode>
            </ReactReduxFirebaseProvider>
        </Provider>,
        document.getElementById('root')
    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

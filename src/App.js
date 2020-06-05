import React, { Component } from 'react';
import './mycss.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes/Routes';
export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="flexible-content">
                <ToastContainer
                    position="bottom-center"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            <Routes />
        </div>
        );
    }
}

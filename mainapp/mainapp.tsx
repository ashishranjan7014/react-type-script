import * as React from 'react';
import { Component } from "react";
import Routers from '../routers/routers';

class MainApp extends Component {
    render() {
        return (
            <div className="bgimg">
                <Routers></Routers>
            </div>
        );
    }
}

export default MainApp;
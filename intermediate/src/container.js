import React, { Component } from 'react';
import "./container.css";
import First from "./first";
import Second from "./second";
import Third from "./third";
class Container extends Component {
    render() {
        return (
            <div id="container"> <First /> <Second /><Third /></div>
        );
    }
}

export default Container;
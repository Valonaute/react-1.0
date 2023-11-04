import React from "react";
import { Component } from "react";
import Bikes from "./Bikes";

class Mybikes extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.title } </h1>
                <Bikes marque="Trek" couleur="Bleu" bg="'gray'"></Bikes>
                <Bikes marque="Giant" couleur="Rouge" bg="'blue'"></Bikes>
                <Bikes marque="Orbéa" couleur="Jaune" bg="'red'"></Bikes>
            </div>
        )
    }
}

export default Mybikes;
import { Component } from "react";
import Users from "./Singers";
import Result from "./Game";


class Display extends Component {
    render () {
        return (
            <div>
                <h1> Musiciens </h1>
                <Users name="Eric Clapton" age="74" />
                <Users name="Jimmy Hendrix" age="27" />
                <Users name="David Guetta" age="42" />
                <Users name="Carlos Santana" age="56" />
                <Result />
            </div>
            
        )
    }
}

export default Display;
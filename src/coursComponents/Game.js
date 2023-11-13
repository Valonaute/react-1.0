import { Component } from "react";


class Result extends Component {

    state = {
        name: "Mario", 
        winner: false
    }

    render() {
        
            let result;

            if(this.state.winner){
                result = <h1> Bravo {this.state.name} </h1>
            } else {
                result = <h1> T'es nul {this.state.name}</h1>
                    }

            return result; 
        
    }
}

export default Result; 
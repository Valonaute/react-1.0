import { Component, Fragment } from 'react'
import Car from './Cars'

class Mycars extends Component {

    state = {
        voitures: [
            {name: "Ford", color: "Red", year: "1984"},
            {name: "Mercedes", color: "Blue", year: "1994"},
            {name: "Mclaren", color: "Black", year: "1964"},
        ]
    }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    removeTenYears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year += 10;
        })
        this.setState({
            updatedState
        })
    }

    getAge = (year) => {
        const now = new Date().getFullYear();
        const age = now - year; 

        let frYearString = ""
        if(age === 1) {
            frYearString = "an"
        } else if (age >1){
            frYearString = "ans"
        } else {
            frYearString = 0
        }
        return `${age} ${frYearString}`;
    }
    render() {
        const [Ford, Mercedes, Mclaren]= this.state.voitures

        const today = new Date().getFullYear();
        return (
            
            <>
                <h1>{this.props.title}</h1>
                    
                <button onClick={this.addTenYears}> + 10 ans </button>

                <button onClick={this.removeTenYears}> - 10 ans </button>

                {
                this.state.voitures.map(({name, color, year}, index) => {
                        
                        return(
                            <div key={index}>
                                <Car nom={name} color={color} year={this.getAge(year)}/>
                            </div>
                        )
                    })
                    }
            </>
        )
    }
}

export default Mycars
const Welcome = () => {

    const logBonsoir = () => {
        console.log("Bonsoir");
    }
    const test = () => {
        document.body.style.backgroundColor = "red";
    }
    return (
        <div>
        
        <button onClick={test}> Invoquer une fonction </button>
        
        <button onClick={logBonsoir}> Invoquer une fonction avec arg "bonsoir</button>

        <button onClick={() => console.log('Bonne Nuit')}> clg sur le bouton </button>

        </div>
    )
}

export default Welcome
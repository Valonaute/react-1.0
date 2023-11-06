const Valo = props => {
  console.log(props);
  const btnReponseValo = props.leState.messageMaman !== null ? (<button onClick={props.reponseValoProps}>Réponse</button>) : (<button disabled>Réponse</button>)
  return (
    <div>
      <h2>{props.name}</h2>
      {btnReponseValo}
      <p> {props.leState.messageValo} </p>
    </div>
  )
}


export default Valo;
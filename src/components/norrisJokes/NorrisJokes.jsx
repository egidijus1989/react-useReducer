const NorrisJokes = (props) => {
    return(
        <div className="card" style={{width: "18rem", margin: "1rem"}}>
  <div className="card-body">
    <p className="card-text">{props.value}</p>
  </div>
</div>
    )
}
export default NorrisJokes
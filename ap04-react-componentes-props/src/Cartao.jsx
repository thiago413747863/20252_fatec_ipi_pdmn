// rafce react arrow function component export
const Cartao = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-header text-muted">
        {props.cabecalho}  
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Cartao
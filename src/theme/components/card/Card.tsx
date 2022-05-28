import CardHeader from "./CardHeader";

function Card({ title, children }: any) {
  console.log();
  return (
    <div className="app-card">
      <CardHeader title={title}></CardHeader>
      <div className="card-body">
        {children}
      </div>
      <div className="card-footer" hidden={true}>

      </div>
    </div>
  )
}

export default Card;
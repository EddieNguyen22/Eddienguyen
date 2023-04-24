function RenderCard({name,age,address}) {
    return(
      <div className="card">
        <div className="name">Name: {name}</div>
        <div className="age">Age: {age}</div>
        <div className="address">Address: {address}</div>
      </div>) 
}
const rootElement = document.getElementById("root");

ReactDOM.render(<RenderCard name="Bob" age="22" address="Hải Phòng"  />,rootElement)
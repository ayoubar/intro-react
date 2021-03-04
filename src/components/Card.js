function Card(props) {
  console.log('this is card componenet', props);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        alt="Card image cap"
      />

      <div className="card-body">
        <h4 className="card-title">
          <a>{props.title}</a>
        </h4>
        <p className="card-text">{props.p}</p>
        <ul>
          {props.list.map((element) => (
            <li>
              {element.id} : {element.name}
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
}

export default Card;

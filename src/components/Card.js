function Card(props) {
  return (
    <div class="card">
      <img
        class="card-img-top"
        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
        alt="Card image cap"
      />

      <div class="card-body">
        <h4 class="card-title">
          <a>{props.title}</a>
        </h4>
        <p class="card-text">{props.p}</p>
        <ul>
          {props.list.map((element) => (
            <li> {element}</li>
          ))}
        </ul>
        <a href="#" class="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
}

export default Card;

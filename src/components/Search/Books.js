const Books = (props) => {
  return (
    <>
      <div className="text-container">
        <img src={props.data.book.image_url} alt="books" />

        <div className="star-container">
          <h2>{props.data.book.title}</h2>
          <p>{props.data.book.number_of_purchases}</p>
        </div>
      </div>
      <div className="about-container">
        <h4>{props.data.book.title}</h4>
        <p> {props.data.book.subtitle}</p>
      </div>
      <div className="cart-container border">
        <p className="price">
          <span>${props.data.book.price}</span>
        </p>
      </div>
    </>
  );
};
export default Books;

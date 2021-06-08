const Card = ({ images, title, subtitle }) => {
  const background = images;
  return (
    <div className="card">
      <div
        className="card-image"
        // image below still wont show up
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

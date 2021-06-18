import { ComponentDragon } from "./Icons";

const Item = (props) => {
  const { id, fullName, title, family, image, imageUrl } = props;
  
  return (
    <>
      <div className="container">
        <div className="img">
          <div className="img-front">
            <img src={imageUrl} alt={image} />
          </div>
        </div>
        <div className="details">
          <div>
            <p>Name: </p>
            <h2>{fullName}</h2>
          </div>
          <div>
            <p>Title:</p>
            <h4> {title}</h4>
          </div>
          <div>
            <p>Family: </p>
            <h4>{family}</h4>
          </div>
          <div className="item-icon">
            <ComponentDragon />
          </div>
        </div>
        <p>{id}</p>
      </div>
    </>
  );
};

export default Item;

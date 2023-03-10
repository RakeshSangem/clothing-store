import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, id } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};
export default DirectoryItem;

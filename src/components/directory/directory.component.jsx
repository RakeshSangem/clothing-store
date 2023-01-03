import DirectoryItem from "../directory-item/directory-item.component";
import categories from "../../categories.json";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.key} />
      ))}
    </div>
  );
};

export default Directory;

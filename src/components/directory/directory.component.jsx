import "./directory.styles.scss";
import categories from "../../categories.json";
import CategoryItem from "../category-item/category-item.component";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Directory;

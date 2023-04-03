import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((e) => (
        <CategoryItem key={e.id} category={e} />
      ))}
    </div>
  );
};

export default Directory;

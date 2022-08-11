import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryIndex,
  setFilterCategory,
} from "../../features/filterSlice";
import style from "./Categories.module.scss";




function Categories() {


  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const dispatch = useDispatch();

  const categoriesList = [
    "Горячие",
    "Сезонные",
    "Коктейли",
    "Безалкогольные",
    "Крепкий алкоголь",
  ];

  const hendlClick = (cat, i) => {
    dispatch(setCategoryIndex(i));
    dispatch(setFilterCategory(cat));
  };

  
  
  return (
    <div className={style.categories}>
      <ul>
        {categoriesList.map((cat, i) => {
          return (
            <li
              onClick={() => hendlClick(cat, i)}
              key={i}
              className={categoryIndex === i ? style.active : ""}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;

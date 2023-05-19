import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
        <ul>
          <li>
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "categoryButton")}>All</NavLink>
          </li>
          <li>
            <NavLink to={"/category/asus"} className={({ isActive }) => (isActive ? "active" : "categoryButton")}>Asus</NavLink>
          </li>
          <li>
            <NavLink to={"/category/dell"} className={({ isActive }) => (isActive ? "active" : "categoryButton")} > Dell</NavLink>
          </li>
          <li>
            <NavLink to={"/category/hp"} className={({ isActive }) => (isActive ? "active" : "categoryButton")}>HP</NavLink>
          </li>
          <li>
            <NavLink to={"/category/lenovo"} className={({ isActive }) => (isActive ? "active" : "categoryButton")}>Lenovo</NavLink>
          </li>
          <li>
            <NavLink to={"/category/mac"} className={({ isActive }) => (isActive ? "active" : "categoryButton")}>Mac</NavLink>
          </li>
        </ul>
  );
};

export default Categories;

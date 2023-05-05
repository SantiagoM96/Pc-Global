import { useState } from "react";
import Button from "../Button/Button";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleCountChange = (type) => {

    if (type === "increase") {
      setCount(count + 1);
    } else if (type === "decrease") {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="darkBtn">
        <Button cName="addAndSubstract" label="-" callBack={() => handleCountChange("decrease")} disabled={count <= 1} />
        <span>{count}</span>
        <Button cName="addAndSubstract" label="+" callBack={() => handleCountChange("increase")} disabled={count >= stock} />
      </div>
      <Button label="Add to Cart" disabled={count <= 0} callBack={() => onAdd(count)} cName="yellowBtn"
      />
    </>
  );
};

export default ItemCount;
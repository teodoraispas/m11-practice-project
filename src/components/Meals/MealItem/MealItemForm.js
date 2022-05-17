import React from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <div>
        <Input
          input={{
            type: "number",
            id: "amount",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
          type="number"
          label="Amount"
        />
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;

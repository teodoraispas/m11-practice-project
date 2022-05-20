import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // we get users's value from the input using refs (the value is always a string)
    const enteredAmount = amountInputRef.current.value;
    // we convert the value to a number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    // we only have the amount in the input so we will call a function which will handle validated and passed amount number
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <Input
          ref={amountInputRef}
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
      {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;

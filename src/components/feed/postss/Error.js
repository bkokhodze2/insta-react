import React from "react";
import img from "../../../error.png";

const ErrorMassage = (props) => {
  const { posts } = props;
  return (
    <>
      <img src={img} alt="error"></img>
      <p>
        შეამოწმეთ json-server,
        {posts ? "პოსტები ვერ იტვირთება" : "სურათები ვერ იტვირთება"}
      </p>
    </>
  );
};

export default ErrorMassage;

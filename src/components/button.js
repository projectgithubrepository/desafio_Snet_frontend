import React, {useState, useEffect} from "react";

function Button({ handleClick, type, classType, style, text }) {
  const [isLoading, setLoading] = useState(false);
  
  function networkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  useEffect(() => {
    if (isLoading) {
      networkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClickLoading = () => {setLoading(true); handleClick()}

  return (
      <button
        onClick={handleClickLoading}
        type={type}
        className={classType}
        style={style}
      >
        <p>{isLoading ? <span className="spinner-border spinner-border-lg pt-2 pb-0" role="status" aria-hidden="true"></span> : text}</p>
      </button>
  );
}

export default Button;
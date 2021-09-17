import React from "react";

const ProgressBar = () => {
  return (
    <div>
      <form name="formulario" method="post" action="/send.php">
        <progress max="100" value="25" />
      </form>
    </div>
  );
};

export default ProgressBar;

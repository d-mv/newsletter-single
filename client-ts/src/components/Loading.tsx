import React from "react";

import style from "../styles/Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      Loading<span>...</span>
    </div>
  );
};

export default Loading;

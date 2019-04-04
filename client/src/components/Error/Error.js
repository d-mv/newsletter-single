import React from 'react';

import style from './Error.module.scss';

const error = props => {
  return (
    <main className={style.errorWrapper}>
      <p className={style.errorTitle}>ERROR</p>
      <p className={style.error}>{props.message}</p>
    </main>
  );
};

export default error;

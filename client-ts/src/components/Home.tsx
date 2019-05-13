import React from "react";

import Login from "./Login";

import "../styles/_ui.scss";
import style from "../styles/Home.module.scss";

const Home = () => {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <main className={style.home}>
      <h1 className={style.title}>The Newsletter</h1>
      <h2 className={style.subTitle}>Just information.</h2>
      <div className={style.screenshot} />
      <div className={style.buttonWrapper}>
        <button
          className="button"
          aria-label="Login or register"
          onClick={() => setShowLogin(!showLogin)}
        >
          Login or register
        </button>
      </div>
      {showLogin ? (
        <div className="modal">
          <Login />
        </div>
      ) : null}
    </main>
  );
};

export default Home;

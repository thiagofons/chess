import "../../styles/main.sass";

import DropArrow from "../../img/icons/toggle-arrow.svg";

const Menu = () => {
  return (
    <aside className="menu">
      <section className="menu__options">
        <header className="menu__options__header">
          <h2>options</h2>
          <img src={DropArrow} alt="" className="show__options" />
        </header>

        <section className="volume">
          <h3>volume</h3>
          <div className="volume__control">
            <input
              type="range"
              name="volume"
              id="volume"
            />
          </div>
        </section>

        <section className="players__names">
          <h3>players</h3>
          <div className="player__name">
            <label htmlFor="" className="name">
              player 1
            </label>
            <div className="player__name__data">
              <input type="text" placeholder="insert your name here" />
              <button>ok</button>
            </div>
          </div>

          <div className="player__name">
            <label htmlFor="" className="name">
              player 2
            </label>
            <div className="player__name__data">
              <input type="text" placeholder="insert your name here" />
              <button>ok</button>
            </div>
          </div>
        </section>

        <section className="difficulty">
          <h3>difficulty</h3>
        </section>
        <section className="max__time">
          <h3>max-time</h3>
        </section>
      </section>
      <section className="menu__buttons">
        <button className="start__btn">start</button>
        <button className="surrender__btn">surrender</button>
      </section>
    </aside>
  );
};

export default Menu;

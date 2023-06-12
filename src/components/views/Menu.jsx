import "../../styles/main.sass";
import "animate.css";

import DropArrow from "../../img/icons/toggle-arrow.svg";
import { useState, useContext } from "react";
import { MenuContext } from "../controllers/MenuContext";

const Menu = ({
  updatePlayerName,
  updateDifficulty,
  updateMaxTime,
  showMenu,
}) => {
  const { options, setOptions } = useContext(MenuContext);

  const [showOptions, setShowOptions] = useState(true);

  return (
    <aside
      className={`menu animate__animated animate__slideInLeft ${
        showMenu ? "show" : ""
      }`}
    >
      <section className="menu__options">
        <header className="menu__options__header">
          <h2>options</h2>
          <img
            src={DropArrow}
            alt=""
            className="show__options"
            onClick={(e) => setShowOptions(!showOptions)}
          />
        </header>

        <div className={`menu__options__content ${showOptions ? "show" : ""}`}>
          <section className="volume">
            <h3>volume</h3>
            <div className="volume__control">
              <input
                type="range"
                name="volume"
                id="volume"
                value={options.volume}
                onChange={(e) => {setOptions({...options, volume: e.target.value})}}
              />
            </div>
          </section>

          <section className="players__names">
            <h3>players</h3>
            <div className="players__names__container">
              <div className="player__name">
                <label htmlFor="" className="name">
                  player 1
                </label>
                <div className="player__name__data">
                  <input
                    type="text"
                    placeholder="insert your name here"
                    value={options.players.player1}
                    maxLength={15}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        players: {
                          player1: e.target.value,
                          player2: options.players.player2,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div className="player__name">
                <label htmlFor="" className="name">
                  player 2
                </label>
                <div className="player__name__data">
                  <input
                    type="text"
                    placeholder="insert your name here"
                    value={options.players.player2}
                    maxLength={15}
                    onChange={(e) =>
                      setOptions({
                        ...options,
                        players: {
                          player1: options.players.player1,
                          player2: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="difficulty">
            <h3>difficulty</h3>
          </section>
          <section className="max__time">
            <h3>max-time</h3>
          </section>
        </div>
      </section>
      <section className="menu__buttons">
        <button className="start__btn">start</button>
        <button className="surrender__btn">surrender</button>
      </section>
    </aside>
  );
};

export default Menu;

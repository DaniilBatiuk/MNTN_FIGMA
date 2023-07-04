import Logo from "./Logo";
import "./styles/App.scss";
const photo = require('./img/photo01.jpg');

function App() {

  const menuOpen = () => {
    document.documentElement.classList.toggle('menu-open');
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <a href="" className="header__logo">
            <Logo />
          </a>
          <nav className="header__menu menu">
            <div className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="" className="menu__link">Equipment</a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">About us</a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">Blog</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header__account">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white" />
              <mask id="mask0_1_50" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_50)">
              </g>
            </svg>
            <a href="" className="header__account-text">Account</a>
          </div>
          <button className="icon-menu" type="button" onClick={menuOpen}>
            <span></span>
          </button>
        </div>
      </header>
      <main className="page">
        <section className="page__main main">
          <div className="main__container">
            <div className="main__content">
              <div className="main__text text-yellow">A Hiking guide</div>
              <h1 className="main__title">Be prepared for the Mountains and beyond!</h1>
              <div className="main__scroll">
                <div className="main__text-scroll">scroll down</div>
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="icon/navigation/arrow_downward_24px">
                    <path id="icon/navigation/arrow_downward_24px_2" d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="page__content">
          <div className="main__container-lower">
            <div className="page__list">
              <div className="page__item item">
                <div className="item__info">
                  <div className="item__text text-yellow">GEt Started</div>
                  <div className="item__title">What level of  hiker are you?</div>
                  <div className="item__text_litle">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</div>
                  <div className="item__read-more">
                    <div className="item__read-more-text">read more</div>
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784" />
                    </svg>
                  </div>
                </div>
                <div className="item__image">
                  <img src={photo} alt="" className="item__photo" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        footer
      </footer>
    </div>
  );
}

export default App;

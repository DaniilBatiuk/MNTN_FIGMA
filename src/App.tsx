import "./styles/App.scss";

import { ReactComponent as Logo } from "./images/Header/Logo.svg";
import { ReactComponent as User } from "./images/Header/user.svg";
import { ReactComponent as ArrowDown } from "./images/Main/arrow-down.svg";
import { ReactComponent as ArrowRight } from "./images/Main/arrow-right.svg";

const photo02 = require('./images/Main/photo02.jpg');
const photo03 = require('./images/Main/photo03.jpg');
const photo01 = require('./images/Main/photo01.jpg');

function App() {

  const menuOpen = () => {
    document.documentElement.classList.toggle('menu-open');
  }

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            <Logo />
          </a>
          <nav className="header__menu menu">
            <div className="menu__body">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="/" className="menu__link">Equipment</a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">About us</a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">Blog</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header__account">
            <User />
            <a href="/" className="header__account-text">Account</a>
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
              <a href="#down" className="main__scroll">
                <div className="main__text-scroll">scroll down</div>
                <ArrowDown />
              </a>
            </div>
          </div>
        </section>
        <section className="page__content">
          <div className="main__container-lower">
            <div className="page__list">
              <article className="page__item item" id="down">
                <div className="item__info">
                  <div className="item__subtitle" data-number="01">
                    <div className="item__text text-yellow">GEt Started</div>
                  </div>
                  <div className="item__title">What level of  hiker are you?</div>
                  <p className="item__text_litle">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                  <div className="item__read-more">
                    <div className="item__read-more-text">read more</div>
                    <ArrowRight />
                  </div>
                </div>
                <img src={photo01} alt="" className="item__photo" />
              </article>
              <article className="page__item item">
                <div className="item__info">
                  <div className="item__subtitle" data-number="02">
                    <div className="item__text text-yellow">Hiking Essentials</div>
                  </div>
                  <div className="item__title">Picking the right Hiking Gear!</div>
                  <p className="item__text_litle">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                  <div className="item__read-more">
                    <div className="item__read-more-text">read more</div>
                    <ArrowRight />
                  </div>
                </div>
                <img src={photo02} alt="" className="item__photo" />
              </article>
              <article className="page__item item">
                <div className="item__info">
                  <div className="item__subtitle" data-number="03">
                    <div className="item__text text-yellow">where you go is the key</div>
                  </div>
                  <div className="item__title">Understand Your Map & Timing</div>
                  <p className="item__text_litle">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                  <div className="item__read-more">
                    <div className="item__read-more-text">read more</div>
                    <ArrowRight />
                  </div>
                </div>
                <img src={photo03} alt="" className="item__photo" />
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container-lower">
          <div className="footer__info">
            <Logo />
            <div className="footer__text">Get out there & discover your next slope, mountain & destination!</div>
            <div className="footer__creator-text">Copyright 2019 MNTN, Inc. Terms & Privacy</div>
          </div>
          <div className="footer__listes">
            <ul className="footer__list">
              <li className="footer__list-item"> More on The Blog</li>
              <li className="footer__list-item"> <a href="/">About MNTN</a></li>
              <li className="footer__list-item"> <a href="/">Contributors & Writers</a></li>
              <li className="footer__list-item"> <a href="/">Write For Us</a></li>
              <li className="footer__list-item"> <a href="/">Contact Us</a></li>
              <li className="footer__list-item"> <a href="/">Privacy Policy</a></li>
            </ul>
            <ul className="footer__list">
              <li className="footer__list-item">More on MNTN</li>
              <li className="footer__list-item"> <a href="/">The Team</a></li>
              <li className="footer__list-item"> <a href="/">Jobs</a></li>
              <li className="footer__list-item"> <a href="/">Press</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

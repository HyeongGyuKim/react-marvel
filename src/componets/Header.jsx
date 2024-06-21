import {useState} from "react";

function Header() {
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const toggleHamburger = () => {
        setHamburgerActive(!hamburgerActive);
    };

    return(
        <header className={hamburgerActive ? "header active" : "header"}>
            <div className="h_cont">
                <div className="h_right">
                    <div className="h_id">
                        <img src="/dashboard/marvel_logo.png" alt="로고" />
                    </div>
                </div>
                <ul className="h_icon" onClick={toggleHamburger}>
                    <li><img src="img/main_page/header/icon/login.svg" alt="" /></li>
                    <li>
                        <div id="hamburger" className={hamburgerActive ? "hamburger nav_btn active" : "hamburger nav_btn"}>
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="gnb_box">
                <nav className="gnb">
                    <ul className="nav_transmission">
                        <li>
                            <h3>MARVEL</h3>
                        </li>
                        <li>
                            <a href="sub/hero.html">Hero</a>
                        </li>
                        <li>
                            <a href="sub/villain.html">Villain</a>
                        </li>
                        <li>
                            <a href="sub/comics.html">Marvel Comics</a>
                        </li>
                        <li>
                            <a href="sub/characters.html">Characters</a>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>CONTENTS</h3>
                        </li>
                        <li>
                            <a href="sub/introduction.html">New Introduction</a>
                        </li>
                        <li>
                            <a href="sub/movieDrama.html">Movie & Drama</a>
                        </li>
                        <li>
                            <a href="sub/news.html">News</a>
                        </li>
                        <li>
                            <a href="sub/game.html">Marvel Game</a>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>Universe</h3>
                        </li>
                        <li>
                            <a href="sub/universe.html">Marvel Cinematic Universe</a>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>Shop</h3>
                        </li>
                        <li>
                            <a href="sub/toy.html">Toy & Collectibles</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
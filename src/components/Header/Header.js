import { Link, useLocation } from "react-router-dom"
import Navigation from "../Navigation/Navigation";
import AuthMenu from "../AuthMenu/AuthMenu";
import { useState } from "react";
import BurgerNav from "../BurgerNav/BurgerNav";

export default function Header() {
    const [isBurgerMenuActive, setBurgerMenuActive] = useState(false)
    const { pathname } = useLocation();
    const { loggedIn } = useState(false);

    return (
        <>
            <header className={`header ${pathname === '/' && 'header_background_dark'}`}>
                <div className="header__container" >
                    <Link to="/"><div className="header__logo" /></Link>
                    {pathname === '/' && !loggedIn ? (<AuthMenu />)
                        : (
                            <>
                                <Navigation />
                                <button className="header__button-burger" onClick={() => setBurgerMenuActive(!isBurgerMenuActive)} />
                                <BurgerNav active={isBurgerMenuActive} setBurgerActive={setBurgerMenuActive} />
                            </>
                        )}
                </div>
            </header>

        </>
    )
}
import logo from "../assets/Dudeshape.svg"
import styles from "./NavBar.module.css"
import buyIcon from "../assets/Buy.svg"
import profileIcon from "../assets/Profile.svg"
import burgerIcon from "../assets/Frame.svg"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <a>
            <img src={logo} alt="logo" />
            </a>
            <nav>
                <ul>
                    <li>
                        <Link className={styles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="about">About Us</Link>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>
                    <a className={styles.linkImg} href="#">
                        <img src={profileIcon} alt="" />
                    </a>
                </li>
                <li>
                    <a className={styles.linkImg} href="#">
                        <img src={buyIcon} alt="" />
                    </a>
                </li>
                <li>
                    <a className={styles.linkImg} href="#">
                        <img src={burgerIcon} alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
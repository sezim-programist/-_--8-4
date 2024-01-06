import styles from "./Footer.module.css"
import logo from "../assets/Dudeshape.svg"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLeftBlock}>
            <a>
            <img src={logo} alt="logo" />
            </a>
                <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy</p>
                
            </div>
            <div className={styles.footerMiddleBlock}>
                <h4>Quick Link</h4>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footerRightBlock}>
                <h4>Contact Us</h4>
                <ul className={styles.footerRightBlockTopLinks}>
                    <li>
                        <a href="mailto:oyasimnaeem@email.com">oyasimnaeem@email.com</a>
                    </li>
                    <li>
                        <a href="tel:+123456789">+123456789</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}
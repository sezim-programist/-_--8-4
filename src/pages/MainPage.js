import styles from "./MainPage.module.css"
import searchIcon from "../assets/Search.svg"
import arrowBtn from "../assets/Arrow.svg"
import img from "../assets/img.jpg"
import { useState } from "react"

export default function MainPage () {

const [input, setInput] = useState('')

    return (
        <section className={styles.mainSection}>
                <div className={styles.leftBlock}>
                    <h1>Get Your Best Cosmetic Products Here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy</p>
                    <div className={styles.searchBlock}>
                        <input onChange={(e)=>setInput(e.target.value)} className={styles.searchInput} placeholder="Search..." type="text" />
                        <p>Type in the search input: {input}</p>
                        <button className={styles.searchBtn}>
                            <img src={searchIcon} />
                        </button>
                    </div>
                    <button className={styles.button}>Shop Now</button>
                </div>
                <div className={styles.rightBlock}>
                    <img src={img} />
                    <div className={styles.arrowBtns}>
                        <button className={styles.arrowBtn}>
                            <img src={arrowBtn} />
                        </button>
                        <button className={styles.arrowBtnReverse}>
                            <img src={arrowBtn} />
                        </button>
                    </div>
                </div>
            </section>
    )
}
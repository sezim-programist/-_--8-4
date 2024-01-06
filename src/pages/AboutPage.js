import styles from "./AboutPage.module.css"

export default function AboutPage () {
    return (
        <section className={styles.section}>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <span className={styles.topSpan}>100%</span>
                    <div className={styles.line}></div>
                    <span className={styles.bottomSpan}>Organic Products</span>
                </div>
            
                <div className={styles.block}>
                    <span className={styles.topSpan}>2M+</span>
                    <div className={styles.line}></div>
                    <span className={styles.bottomSpan}>Yearly Sales</span>
                </div>
                <div className={styles.block}>
                    <span className={styles.topSpan}>1.9M+</span>
                    <div className={styles.line}></div>
                    <span className={styles.bottomSpan}>Happy Customar</span>
                </div>
            </div>
        </section>
    )
}
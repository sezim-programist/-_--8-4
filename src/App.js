import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import MainPage from "./pages/MainPage"
import styles from "./App.module.css"
import AboutPage from "./pages/AboutPage"

export default function App() {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<MainPage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}
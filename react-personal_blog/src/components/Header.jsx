import { useState } from "react"
import logo from "../assets/hacker-svgrepo-com.svg"

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
    <header>
        <img className="logo" src={logo} />
        <h3>Блог frontend-разработчика</h3>
        <span>Точное время: {now.toLocaleTimeString()}</span>
    </header>
    )
  }
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Check if a theme is saved in localStorage on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark");
        } else {
            setDarkMode(false);
            document.body.classList.remove("dark");
        }
    }, []);

    // Toggle theme on button click
    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        // Apply the class to body
        if (newDarkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button onClick={toggleTheme} className="text-xl">
            {darkMode ? "🌙" : "🌞"} {/* Sun for light, Moon for dark */}
        </button>
    );
};

export default ThemeToggle;

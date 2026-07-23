import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Content() {

    const [theme, setTheme] = useState(ThemeService.getTheme());

    useEffect(() => {

        ThemeService.attach(setTheme);

        return () => ThemeService.detach(setTheme);

    }, []);

    const style = {
        backgroundColor: theme === "Light" ? "white" : "black",
        color: theme === "Light" ? "black" : "white",
        padding: "30px",
        marginTop: "20px"
    };

    return (
        <div style={style}>
            <h2>Content Area</h2>
            <p>Current Theme : {theme}</p>
        </div>
    );
}

export default Content;
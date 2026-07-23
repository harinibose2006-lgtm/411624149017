import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Header() {

    const [theme, setTheme] = useState(ThemeService.getTheme());

    useEffect(() => {
        ThemeService.attach(setTheme);

        return () => ThemeService.detach(setTheme);
    }, []);

    return (
        <header>
            <h1>Header - {theme} Theme</h1>
        </header>
    );
}

export default Header;
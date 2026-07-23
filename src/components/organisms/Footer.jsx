import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";

function Footer() {

    const [theme, setTheme] = useState(ThemeService.getTheme());

    useEffect(() => {

        ThemeService.attach(setTheme);

        return () => ThemeService.detach(setTheme);

    }, []);

    return (
        <footer>
            Footer - {theme} Theme
        </footer>
    );
}

export default Footer;
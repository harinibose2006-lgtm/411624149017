import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
import Header from "../organisms/Header";
import ThemePanel from "../organisms/ThemePanel";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";

function MainLayout() {
  const [theme, setTheme] = useState(ThemeService.getTheme());

  useEffect(() => {
    ThemeService.attach(setTheme);
    return () => ThemeService.detach(setTheme);
  }, []);

  const style = {
    backgroundColor: theme === "Light" ? "white" : "#93b4df",
    color: theme === "Light" ? "black" : "white",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={style}>
      <Header />
      <ThemePanel />
      <Content />
      <Footer />
    </div>
  );
}

export default MainLayout;
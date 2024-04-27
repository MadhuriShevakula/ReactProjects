import useLocalStorage from "./useLocalStorage";
import './styles.css'

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;

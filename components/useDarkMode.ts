import { Dispatch, SetStateAction, useEffect, useState } from "react";

function useDarkMode(): [string, Dispatch<SetStateAction<string>>] {
  // Set the default theme to dark
  const [theme, setTheme] = useState<string>("dark");

  // Get the opposite color theme based on the current theme
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    // Access the global `window` object safely using optional chaining
    const root = window?.document?.documentElement;
    if (!root) return; // Stop execution if `root` is not defined

    // Remove the old color theme class and add the new one
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Update the local storage only if it is available
    if (localStorage) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;

import { useEffect } from "react";
import { useLocalStorage } from "./localstorage";

export const useDarkMode = key => {
  const [darkMode, setDarkMode] = useLocalStorage(key, false);

  useEffect(() => {
    darkMode === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

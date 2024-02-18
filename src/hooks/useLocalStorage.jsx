export const useLocalStorage = () => {
  let ls = !localStorage.getItem("theme") ? localStorage.setItem("theme", "light") : localStorage.getItem("theme");

  const setLocalStorage = (newVal) => {
    ls = localStorage.setItem("theme", newVal);
  };

  return [ls, setLocalStorage];
};

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

const ThemeToggler = ({ className }: { className: string }) => {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveIcon, setIsActiveIcon] = useState(<IoSunnyOutline />);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setIsActive(resolvedTheme === "light" ? true : false);
    setIsActiveIcon(isActive ? <IoSunnyOutline /> : <IoMoonSharp />);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setTheme("light");
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={toggleTheme}
      style={{ cursor: "pointer" }}
      className={className}
    >
      {isActiveIcon}
    </div>
  );
};

export default ThemeToggler;

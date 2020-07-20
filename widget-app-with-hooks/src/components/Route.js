import React, { useEffect, useState } from "react";

export default function Route({ path, children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onPathChange);
    return () => {
      window.removeEventListener("popstate", onPathChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
}

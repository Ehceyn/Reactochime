// Makes the scrollbar to start from the top on every route

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}

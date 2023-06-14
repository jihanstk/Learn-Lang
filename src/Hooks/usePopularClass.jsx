import { useEffect, useState } from "react";

const usePopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5010/popular-classes")
      .then((res) => res.json())
      .then((instructors) => {
        setPopularClasses(instructors);
      });
  }, []);

  return [popularClasses];
};
export default usePopularClass;

import { useEffect, useState } from "react";

const useClass = () => {
  const [allClasses, setAllClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5010/popular-classes")
      .then((res) => res.json())
      .then((instructors) => {
        setAllClasses(instructors);
      });
  }, []);

  return [allClasses];
};
export default useClass;

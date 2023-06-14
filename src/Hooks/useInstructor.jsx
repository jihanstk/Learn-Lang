import { useEffect, useState } from "react";

const useInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5010/instructors")
      .then((res) => res.json())
      .then((instructors) => {
        setInstructors(instructors);
      });
  }, []);

  return [instructors];
};
export default useInstructor;

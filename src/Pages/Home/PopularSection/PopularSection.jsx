import usePopularClass from "../../../Hooks/usePopularClass";
import ApproveClass from "../../OutsideHome/Classes/ApproveClass";

const PopularSection = () => {
  const [popularClasses] = usePopularClass();
  console.log(popularClasses);
  return (
    <>
      <div className="text-center my-20">
        <h1 className="text-4xl font-bold">Popular Classes</h1>
        <p className=" md:w-1/4 mx-auto my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          dolores, eaque nam nesciunt ea repudiandae nisi deleniti laborum odit
          explicabo.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 w-11/12 mx-auto">
        {popularClasses.map((popularClass) => (
          <ApproveClass
            key={popularClass._id}
            approveClass={popularClass}
          ></ApproveClass>
        ))}
      </div>
    </>
  );
};

export default PopularSection;

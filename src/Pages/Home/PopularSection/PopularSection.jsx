import usePopularClass from "../../../Hooks/usePopularClass";
import ApproveClass from "../../OutsideHome/Classes/ApproveClass";

const PopularSection = () => {
  const [popularClasses] = usePopularClass();
  console.log(popularClasses);
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl text-slate-800 font-bold">Popular Classes</h1>
        <p className=" text-slate-500 w-1/4 mx-auto">
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

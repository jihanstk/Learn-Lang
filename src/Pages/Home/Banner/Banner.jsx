import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Banner = () => {
  return (
    <AwesomeSlider className="bg-white">
      <div className="grid grid-cols-2 bg-white">
        <div className="flex flex-col justify-center items-end">
          <div className="w-9/12">
            <h1 className="text-4xl font-bold text-slate-700">
              Ignite Your Linguistic Potential with our Language Course{" "}
            </h1>
            <p className=" text-slate-500 my-7">
              Unlock the power of language and become a polyglot prodigy with
              our captivating online language course! Whether you dream of
              mastering multiple languages for personal enrichment, professional
              advancement, or connecting with people from diverse cultures, our
              program is designed to make your language learning journey both
              exciting and effective
            </p>
          </div>
        </div>

        <img
          className="w-full h-full"
          src="https://www.tdcx.com/static/6023cec2541e621b32071789726d0e57/18646/25ff5db311334e54b993a8aebe6dac30_726f8b0eaa.webp"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="flex flex-col justify-center items-end">
          <div className="w-9/12">
            <h1 className="text-4xl font-bold text-slate-700">
              The Language Catalyst Ignite Your Fluency through our Cutting-Edge
              Online Program
            </h1>
            <p className=" text-slate-500 my-7">
              Unlock the power of language and become a polyglot prodigy with
              our captivating online language course! Whether you dream of
              mastering multiple languages for personal enrichment, professional
              advancement, or connecting with people from diverse cultures, our
              program is designed to make your language learning journey both
              exciting and effective
            </p>
          </div>
        </div>

        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/tripactions/image/upload/v1671476788/site/navan-photography/lady-smiling-and-holding-books.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 bg-white">
        <div className="flex flex-col justify-center items-end">
          <div className="w-9/12">
            <h1 className="text-4xl font-bold text-slate-700">
              Language Voyage Explore, Learn, and Conquer with our Captivating
              Online Course
            </h1>
            <p className=" text-slate-500 my-7">
              Unlock the power of language and become a polyglot prodigy with
              our captivating online language course! Whether you dream of
              mastering multiple languages for personal enrichment, professional
              advancement, or connecting with people from diverse cultures, our
              program is designed to make your language learning journey both
              exciting and effective
            </p>
          </div>
        </div>

        <img
          className="w-full h-full"
          src="https://1.bp.blogspot.com/-uM9-tqWDxL0/XyuLCNWDh4I/AAAAAAAAAv4/y7bmdLjesscvJIJuizF8RmiP4ZXIwwCCQCLcBGAsYHQ/s0/boy-working-on-laptop-classroom-school-clipart.jpg"
          alt=""
        />
      </div>
    </AwesomeSlider>
  );
};

export default Banner;

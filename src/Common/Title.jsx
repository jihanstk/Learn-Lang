const Title = ({ type, name }) => {
  return (
    <div className="w-10/12 mx-auto text-center border-b pb-7 border-b-slate-700/30">
      <h1 className="text-4xl text-sky-600">{type}</h1>
      <p className="text-cyan-600">{name}</p>
    </div>
  );
};

export default Title;

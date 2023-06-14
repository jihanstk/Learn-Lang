import useInstructor from "../../../Hooks/useInstructor";

const Instructors = () => {
  const [instructors] = useInstructor();

  return (
    <div className="pt-24">
      <h1 className="text-3xl text-blue-500 font-bold text-center">
        Our Instructors
      </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((singleUser) => {
            return (
              <tr key={singleUser._id}>
                <td></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleUser.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold">{singleUser.name}</td>
                <td>{singleUser.email}</td>
                <th>{singleUser.role}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;

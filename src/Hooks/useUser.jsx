import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUser = () => {
  const { loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: allUser = [] } = useQuery({
    queryKey: ["user"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/user`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [allUser, refetch];
};
export default useUser;

// queryFn: async () => {
//     const res = await fetch(`https://bistro-boss-server-fawn.vercel.app/carts?email=${user?.email}`, { headers: {
//         authorization: `bearer ${token}`
//     }})
//     return res.json();
// },

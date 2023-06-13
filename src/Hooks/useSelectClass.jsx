import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectClass = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectClass = [] } = useQuery({
    queryKey: ["user"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/all-selectClass/${user.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectClass, refetch];
};
export default useSelectClass;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const usePopularClass = () => {
  const { loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: popularClasses = [] } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/popular-classes`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [popularClasses, refetch];
};
export default usePopularClass;

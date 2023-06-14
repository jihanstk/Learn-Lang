import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrollClass = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: enrollClasses = [] } = useQuery({
    queryKey: ["enrollClasses"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/enroll-classes/${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [enrollClasses, refetch];
};
export default useEnrollClass;

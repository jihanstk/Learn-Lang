import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdminClass = () => {
  const { loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: allAdminClass = [] } = useQuery({
    queryKey: ["allAdminClass"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/all-classes`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [allAdminClass, refetch];
};

export default useAdminClass;

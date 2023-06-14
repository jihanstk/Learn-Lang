// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

const useSinglePaymentData = (id) => {
  //   const { user, loading } = useAuth();
  //   // const token = localStorage.getItem('access-token');
  //   const [axiosSecure] = useAxiosSecure();
  //   const { refetch, data: selectClass = [] } = useQuery({
  //     queryKey: ["user"],
  //     enabled: !loading,
  //     queryFn: async () => {
  //       const res = await axiosSecure(`/all-selectClass/${user.email}`);
  //       console.log("res from axios", res);
  //       return res.data;
  //     },
  //   });

  //   return [selectClass, refetch];
  return [id];
};

export default useSinglePaymentData;

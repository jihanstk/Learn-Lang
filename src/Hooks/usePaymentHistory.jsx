import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory"],
    enabled:
      !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure(`/payment-history/${user.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [paymentHistory, refetch];
};

export default usePaymentHistory;

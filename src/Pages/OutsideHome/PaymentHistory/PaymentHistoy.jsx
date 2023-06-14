import usePaymentHistory from "../../../Hooks/usePaymentHistory";

const PaymentHistoy = () => {
  const [paymentHistory] = usePaymentHistory();
  console.log(paymentHistory);
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
            <th>transactionId</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory?.map((payment) => {
            return (
              <tr key={payment._id}>
                <td></td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={payment.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold">{payment.className}</td>
                <td>{payment.email}</td>
                <th>{payment.transactionId}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistoy;

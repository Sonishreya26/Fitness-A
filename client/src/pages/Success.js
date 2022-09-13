import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userRequest } from "../requestMethods";
import { toast, ToastContainer } from "react-toastify";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Redirecting to Home page...", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // const createOrder = async () => {
    //   try {
    //     const res = await userRequest.post("/orders", {
    //       userId: currentUser._id,
    //       products: cart.products.map((item) => ({
    //         productId: item._id,
    //         quantity: item._quantity,
    //       })),
    //       amount: cart.total,
    //       address: data.billing_details.address,
    //     });
    //     console.log(res);
    //     setOrderId(res.data._id);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => navigate("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;

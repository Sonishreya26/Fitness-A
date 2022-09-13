import { Delete } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const KEY =
  "pk_test_51LVaHmHSVeqVjHs63eZVnavTGQQH059pu0KPveBXu0JwUWXlnZSBn6Kdgqm8Za7iuJlNOoedcmS0B7rUyNmDtmEL00cbBShFsX";

const Container = styled.div``;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })};
  border: 1px dotted gray;
  padding: 0.5em;
  border-radius: 1em;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 10em;
  height: 12em;
  border-radius: 0.5em;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const EmptyDiv = styled.div`
  font-weight: 600;
  height: 35vh;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const image = "https://avatars.githubusercontent.com/u/1486366?v=4";
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [stripeToken, setStripeToken] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        console.log("res.data", res.data);
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  const checkout = () => {
    toast.info("Please login first!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login", { state: { toCart: "true" } });
  };
  const removeProduct = (id) => {
    let total = 0;
    let products = [];
    let info = {};
    let productToBeRemoved = [];

    // var bar = new Promise((resolve, reject) => {
    try {
      cart.products.forEach((product, index) => {
        if (product._id == id && productToBeRemoved.length == 0) {
          productToBeRemoved.push(product);
        } else {
          total += product.price * product.quantity;
          products.push(product);
        }
        // if (index === cart.products.length - 1) resolve();
      });
    } catch (err) {
      // console.log(err);
      // reject();
    }
    // });
    // bar.then(() => {
    console.log(products);
    info = {
      products: products,
      total: total,
    };
    dispatch(updateProduct(info));
    // });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        {/* <Title>YOUR BAG</Title> */}
        <Top>
          <Link to="/products">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          {cart.products && cart.products.length >= 1 && user ? (
            <StripeCheckout
              name="fitness Studio"
              image={image}
              billingAddress
              shippingAddress
              description={`Your total is $${(
                cart.total +
                parseFloat(cart.total > 50 ? 0 : (cart.total / 60).toFixed(2)) -
                parseFloat((cart.total * 0.008).toFixed(2))
              ).toFixed(2)}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </StripeCheckout>
          ) : (
            cart.products &&
            cart.products.length >= 1 && (
              <TopButton type="filled" onClick={() => checkout()}>
                CHECKOUT NOW
              </TopButton>
            )
          )}
        </Top>
        {cart.products && cart.products.length < 1 && (
          <EmptyDiv>
            <p className="empty-cart">Your cart is empty!</p>
          </EmptyDiv>
        )}
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <Product className="m-5" key={index}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      {product.color && <b>Flavour:</b>} {product.color}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>
                      <span>Quantity:</span> {product.quantity}
                    </ProductAmount>
                  </ProductAmountContainer>

                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                  <Icon
                    title="Remove product"
                    onClick={() => removeProduct(product._id)}
                  >
                    <Delete />
                  </Icon>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          {cart.products && cart.products.length >= 1 && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>
                  {cart.total > 50
                    ? "Free"
                    : "$" + (cart.total / 60).toFixed(2)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>
                  $ -{(cart.total * 0.008).toFixed(2)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  ${" "}
                  {(
                    cart.total +
                    parseFloat(
                      cart.total > 50 ? 0 : (cart.total / 60).toFixed(2)
                    ) -
                    parseFloat((cart.total * 0.008).toFixed(2))
                  ).toFixed(2)}
                </SummaryItemPrice>
              </SummaryItem>
              {user ? (
                <StripeCheckout
                  name="fitness Studio"
                  image={image}
                  billingAddress
                  shippingAddress
                  description={`Your total is $${(
                    cart.total +
                    parseFloat(
                      cart.total > 50 ? 0 : (cart.total / 60).toFixed(2)
                    ) -
                    parseFloat((cart.total * 0.008).toFixed(2))
                  ).toFixed(2)}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
              ) : (
                <Button onClick={() => checkout()}>CHECKOUT NOW</Button>
              )}
            </Summary>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;

import styled from 'styled-components';
import {Add, Remove} from '@material-ui/icons';

import Navbar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import {mobile} from '../responsive'


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=> props.type === "filled" && "none"};
  background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
  color: ${props=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({display:"none"})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;




const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}

`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({flexDirection:"column"})}

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 25px"})}

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight:200;
  ${mobile({marginBottom:"20px"})}
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
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

  font-weight: ${props=> props.type === "total" && "500"};
  font-size: ${props=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: 600;
  background-color: black;
  color: white;
  cursor: pointer;
`;



const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
  margin: 20px 0px;
`;


const Cart = () => {
  return (
    <Container>

    <Announcement/>
    <Navbar/>



    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPING</TopButton>
        <TopTexts>
          <TopText>Shopping bag(2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>


      <Bottom>


        <Info>



          <Product>
            <ProductDetail>
              <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png"/>
              <Details>
                <ProductName><b>Product:</b> Nike Shoes</ProductName>
                <ProductId><b>ID:</b> 123456789</ProductId>
                <ProductColor color="black" />
                <ProductSize><b>Size:</b> 37.5</ProductSize>
              </Details>
            </ProductDetail>


            <PriceDetail>
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>

              </ProductAmountContainer>
              <ProductPrice>5000 Rs.</ProductPrice>
            </PriceDetail>
          </Product>

          <Hr/>

          <Product>
            <ProductDetail>
              <Image src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png"/>
              <Details>
                <ProductName><b>Product:</b> Nike Shoes</ProductName>
                <ProductId><b>ID:</b> 123456789</ProductId>
                <ProductColor color="black" />
                <ProductSize><b>Size:</b> 37.5</ProductSize>
              </Details>
            </ProductDetail>


            <PriceDetail>
              <ProductAmountContainer>
                <Add/>
                <ProductAmount>2</ProductAmount>
                <Remove/>

              </ProductAmountContainer>
              <ProductPrice>5000 Rs.</ProductPrice>
            </PriceDetail>
          </Product>




        </Info>


        <Summary>

          <SummaryTitle>Order Summary</SummaryTitle>

          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>10000 Rs.</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shiping</SummaryItemText>
            <SummaryItemPrice>500 Rs.</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>-500 Rs.</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type='total'>
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>10000 Rs.</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Wrapper>



    <Footer/>
    </Container>
  )
}

export default Cart;

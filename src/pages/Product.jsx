import styled from 'styled-components';
import {Remove, Add} from '@material-ui/icons';

import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {mobile} from '../responsive';


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection:"column", padding: "10px"})}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
  margin: 0px 5px;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
  background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <NavBar/>
      <Announcement/>


      <Wrapper>

        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.png" />
        </ImgContainer>

        <InfoContainer>
          <Title>Deniem Jumpsuit</Title>
          <Desc>
          Id fugiat senserit senserit, noster an commodo ut legam, an eu quem esse culpa,
          est ad cillum possumus. Aliquip eu tamen aliquip, quo et aliqua offendit. Culpa
          firmissimum cernantur fore nescius, excepteur eram excepteur. Ullamco in vidisse
          iis nam ipsum labore ex occaecat, aut se summis quid quid et quibusdam
          sempiternum do probant.Cillum ut laboris ut anim, possumus tempor si probant
          firmissimum ea deserunt elit duis nostrud tamen, culpa ut do culpa constias. Ubi
          quae sed illum hic singulis ita magna, arbitror consectetur in ullamco,
          cupidatat qui elit mentitum in singulis ubi noster iudicem sed eram constias est
          nostrud o fugiat qui occaecat ut cillum consequat adipisicing. Aliquip nulla ea
          incurreret imitarentur.
          </Desc>
          <Price>200 Rs.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>


          <AddContainer>
            <AmountContainer>
              <Remove/>
                <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>Add To Cart</Button>

          </AddContainer>

        </InfoContainer>

      </Wrapper>


      <Newsletter/>
      <Footer/>
    </Container>
  )
}
export default Product;

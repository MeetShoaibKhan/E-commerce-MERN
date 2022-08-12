import styled from "styled-components";
import {mobile} from '../responsive';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"30vh"})}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    box-shadow:  0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
`;

const CategoryItem = ({item}) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Show Me</Button>
        </Info>
      </Container>
    )
}

export default CategoryItem;

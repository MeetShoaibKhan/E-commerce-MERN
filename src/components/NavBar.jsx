import React from 'react';
import styled from 'styled-components';

import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import {mobile} from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;
const SerachContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  width: 200px;
`;



const Center = styled.div`
  flex: 1
  justify-content: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;



const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
  `;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Select = styled.select`
border: none;

`;
const Option = styled.option``;

const NavBar = () => {
 return (
 	<Container>
    <Wrapper>
      <Left>
        <Language>
          <Select>
            <Option selected>EN</Option>
            <Option>UR</Option>
          </Select>
        </Language>
        <SerachContainer>
          <Input placeholder="Search"/>
          <Search style={{color: 'gray', fontSize: 16 }}/>
        </SerachContainer>
      </Left>
      <Center>
        <Logo>MEN'style.</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
        </MenuItem>
      </Right>

    </Wrapper>
 	</Container>
 	)
}

export default NavBar;

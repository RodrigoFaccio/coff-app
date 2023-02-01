import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
  width: 256px;
height: 310px;
background: #F3F2F2;
border-radius: 6px 36px;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-right: 32px;
`;
export const Coffe = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -15%;

`;
export const Title = styled.p`
font-family: 'Baloo 2';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 130%;
display: flex;
align-items: flex-end;
text-align: center;
color: #403937;

`;

export const Description = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
text-align: center;
color: #8D8686;

`;
export const DivPrincing = styled.div`
display: flex;
flex-direction: flex;
justify-content: center;
align-items: center;
img{
    margin-left: 15px;
    width: 38px;
    height: 38px;
}

height: 38px;

`;
export const Value = styled.p`
  font-family: 'Baloo 2';
  font-size: 26px;
  font-weight: 700;
  color: #574F4D;
  margin-left: 10px;

`;
export const Count = styled.div`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;
width: 72px;
height: 30px;
background: #E6E5E5;
border-radius: 6px;
margin-left: 23px;
color:${colors.purple};
font-family: 'Baloo 2';

    font-size: 25px;
p{
  font-family: 'Baloo 2';

    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 2%;

}

`;
import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
    width: 90%;
    justify-content: space-between;
    height: 104px;
    display: flex;
    align-items: center;
    margin-left: 5%;
  
`;
export const Logo = styled.div`
`;
export const Menu = styled.div`
display: flex;
flex-direction: row;
  
`;
export const ImgLogo = styled.img`
 width: 84.95px;
height: 40px;
  
`;

export const Location = styled.div`
  width: 143px;
height: 40px;
background: ${colors['purple-light']};
border-radius: 6px;
justify-content: center;
display: flex;
align-items: center;
p{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
/* or 18px */


/* Brand/Purple Dark */

color: #4B2995;

}
`;

export const Car = styled.div`
width: 40px;
height: 40px;
background: ${colors['yellow-light']};
border-radius: 6px;
justify-content: center;
align-items: center;
display: flex;
margin-left: 12px;

`;

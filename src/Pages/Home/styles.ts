import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 5%;
`;
export const Title = styled.p`
  font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 130%;
color: #272221;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
width: 588px;

`;
export const SubTitle = styled.p`
 width: 588px;
height: 52px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;

color: #403937;
font-stretch: 100;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

`;
export const DivIcons = styled.div`
margin-right: 40px;
display: flex;
flex-direction: row;
align-items: center;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #574F4D; 
        padding-left:20px ;
    }

    img{
        width: 32px;
        height: 32px;
    }

`;

export const DivInfos = styled.div`
    display: flex;
`;
export const DivTitle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ImagemPrincipal = styled.img`
    
`;
export const Body = styled.div`
    width: 100%;
    p{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: #403937;
    }
`;

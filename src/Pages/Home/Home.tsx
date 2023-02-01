/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Header } from '../../Components/Header';
import {Container,Title,SubTitle,DivIcons,DivInfos,DivTitle,ImagemPrincipal,Body} from './styles'
//@ts-ignore
import cartIcon from '../../assets/Icon.png'
//@ts-ignore
import time from '../../assets/Icon (1).png'
//@ts-ignore
import entrega from '../../assets/Icon (2).png'
//@ts-ignore
import cafe from '../../assets/Icon (3).png'
//@ts-ignore
import imagePricipal from '../../assets/Imagem.png'
import Cards from '../../Components/Cards'




function Home() {
  return (
    <Container>
        <Header/>
        <DivTitle>

       <div>

        <Title>
            Encontre o café perfeito para qualquer hora do dia
        </Title>
        <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </SubTitle>

        <DivInfos>
            <DivIcons>
                <img src={cartIcon}/>
                <p>Compra simples e segura </p>
            </DivIcons>
            <DivIcons>
                <img src={time}/>
                <p>Entrega rápida e rastreada </p>
            </DivIcons>
        </DivInfos>

        
        <DivInfos>
            <DivIcons>
                <img src={entrega}/>
                <p>Compra simples e segura </p>
            </DivIcons>
            <DivIcons>
                <img src={cafe}/>
                <p>Entrega rápida e rastreada </p>
            </DivIcons>
        </DivInfos>
       </div>

        <ImagemPrincipal src={imagePricipal}/>

        </DivTitle>

        <Body>
            <p>
            Nossos cafés
            </p>
        </Body>

        <div style={{maxWidth:'100%',display:'flex',flexDirection:'row'}}>


        <Cards/>  
        <Cards/>        
        <Cards/>        
        <Cards/>   
        <Cards/>        
        <Cards/>        

        </div>

        
    </Container>
  );
}

export default Home;

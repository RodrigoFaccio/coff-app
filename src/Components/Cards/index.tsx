/* eslint-disable jsx-a11y/alt-text */

import React,{useState} from 'react'
import {Container,Title,Description,Coffe,DivPrincing,Value, Count} from './styles'
//@ts-ignore
import cafe from '../../assets/cafe.png'
//@ts-ignore

import cardIcon from '../../assets/Icon Button.png'



 function Cards(){

    const [quant,setQuant] = useState(1);
    return(
        <Container>
            <Coffe src={cafe}/>

            <Title>
            Expresso Tradicional
            </Title>
            <Description>
            O tradicional café feito com água quente e grãos moídos
            </Description>
            <DivPrincing>
               <p> R$</p> <Value>9,90</Value>
            <Count> <p>-</p> {quant}<p>+</p></Count>
            <img src={cardIcon} style={{height:38}}/>

            </DivPrincing>
        </Container>
    )
}

export default Cards;
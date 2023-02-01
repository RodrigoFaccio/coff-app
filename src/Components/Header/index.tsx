// eslint-disable-next-line @typescript-eslint/no-unused-vars
 import {Container,ImgLogo,Logo,Menu,Location,Car} from './styles'
 //@ts-ignore
 import logo from '../../assets/Logop.png'
  import { IoLocationSharp,IoCartSharp } from 'react-icons/io5';
import { colors } from '../../utils/colors';

 export function Header(){
   return(
     <Container>
        <Logo>
          <ImgLogo src={logo} />
        </Logo>
        <Menu>
          <Location>
            <IoLocationSharp color={colors.purple}/>

            <p>Porto Alegre, RS</p>
          </Location>
          <Car>
            <IoCartSharp color={colors.yellow} style={{width:25,height:25}}/>
          </Car>
        </Menu>
    </Container>
   )
}


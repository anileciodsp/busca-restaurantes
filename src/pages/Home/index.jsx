import React, {useState} from 'react';
import Slider from 'react-slick';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal} from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';


const Home = () => {

const [inputValue, setInputValue] = useState('');
const [modalOpened, setModalOpened] = useState(false);

var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    };

return (
<Wrapper>       
    <Container>
        <Search>
            <Logo src={logo} alt="logo do restaurante" />
            <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
            >
                <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            </TextField> 
            <CarouselTitle>Na sua Área</CarouselTitle>   
            <Carousel {...settings}>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                <Card photo={restaurante} title="nome sei lá"/>
                
            </Carousel>
            
        </Search>
        <RestaurantCard />
    </Container>
    <Map />
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
</Wrapper>    
   );
};

export default Home;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Style = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

div{
    font-weight:700;
    font-size:100px;
}
img{
    width:50%;
}
`

function Adventure(){
    const navigate = useNavigate();

    const location = useLocation();
    const { pokemonData } = location.state || { img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg" ,name: "푸린"};
    return(
        <Style>
            <div>낚였다! </div>
            <p>돌아가고싶으면 {pokemonData.name}을 클릭해라!</p>
            <img src={pokemonData.img} onClick={()=>{
                navigate('/')
            }}></img>
        </Style>
    )
}

export default Adventure;
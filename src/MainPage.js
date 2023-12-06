import React,{ useState, useRef,useEffect } from 'react';
import draw from './drawMachine.svg';
import drawBtn from './drawBtn.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const MainPageStyle = styled.div`

width:100vw;
  height:100vh;
  background: linear-gradient(to bottom, #054CA9, #1B67C3,#054CA9);

  background-color: #054CA9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
.content-container{

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

}
.image-container{
    position:relative;
}

.draw-btn{
    position:absolute;
    bottom:47px;
    left:68px;
}
.move{
    position:absolute;
    left:91px;
    bottom:70px;
}
.draw-btn:hover{
    cursor:pointer;
}
.title-text{
    color: #FFF;
    font-family: 'Noto Sans KR', sans-serif;    
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.btn-text{
    color: #FFF;
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

`




  
function MainPage(){
    const [rotationDegree, setRotationDegree] = useState(0);
    const [pokemonData, setPokemonData] = useState({ img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg" ,name: "푸린"});

    const drawBtnRef = useRef(null);
    const navigate = useNavigate();

    const rotateImage = () => {
        const newRotationDegree = rotationDegree +360;
        setRotationDegree(newRotationDegree);
    
        if (drawBtnRef.current) {
            drawBtnRef.current.style.transition = 'transform 2s ease-in-out';
            drawBtnRef.current.style.transform = `rotate(${newRotationDegree}deg)`;
        }
        
        if (!window.location.pathname.endsWith('/result')) {
            
            setTimeout(() => {
                navigate('/result', { state: {pokemonData} });
            }, 3000);
        }
    };

    

    useEffect(()=>{
        const fetchData = async () => {
            console.log('fetch');
            const maxPokemonNumber = 151;
            const randomIndex = Math.floor(Math.random() * maxPokemonNumber) + 1;
            
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`);
                const pokemonData = await response.json();
                const imageUrl = pokemonData.sprites.other.dream_world.front_default;
            
                const speciesResponse = await fetch(pokemonData.species.url);
                const speciesData = await speciesResponse.json();
                const koreanNameObject = speciesData.names.find(
                    (nameObject) => nameObject.language.name === 'ko'
                );
            
                const updatedPokemonData = { img: imageUrl, name: koreanNameObject.name };
                setPokemonData(updatedPokemonData);
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },[])

    return(
        <MainPageStyle>
            <div className='content-container'>
                <div className='title-text'>오늘의 포켓몬은?</div>
                <div className='image-container'>
                    <div className='machine-img-container'>
                        <img src={draw} className='draw-machine'></img>
                    </div>
                    <div className='machine-btn-container'>
                        <img src={drawBtn} className='draw-btn' ></img>
                        <img src={'/img/btn.png'} className='draw-btn move' ref={drawBtnRef} onClick={rotateImage}></img>
                    </div>
                </div>
                <div className='btn-text'>버튼을 돌려주세요~</div>
            </div>
        </MainPageStyle>
    );
}

export default MainPage;
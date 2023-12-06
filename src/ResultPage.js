import React,{ useState, useRef, useEffect } from 'react';
import draw from './drawMachine.svg';
import monsterBall from './monsterBall.svg';
import btnBG from './mainBtn_bg.svg';
import drawBtn from './drawBtn.svg';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ResultPageStyle = styled.div`
width:100vw;
height:100vh;

display: flex;
justify-content: center;
align-items: center;
overflow:hidden;
background-color: rgba(0,0,0,0.9);
position:absolute;
top:0;

.result-container{
    display:flex;
    flex-direction:column;
    align-items:center;

}
.result-text{
    color: #FFF;
    font-family: 'Noto Sans KR', sans-serif;    
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.result-textBox{
    width:223px;
    height:68px;
}
.cancel{
    width:38px;
    margin-top:64px;
}
.monsterBall-container{
    position:relative;
    width: 390px;
    height: 394px;
}
.monsterImg{
    position:absolute;
    width:130px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.monster-name-box{
    position:relative;
    width:223px;
    height:68px;
    white-space: nowrap;
    margin-top:9px;
}
.monster-name{
    color: #FFF;
    font-family: 'Noto Sans KR', sans-serif;    
    font-size: 1em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position:absolute;
    top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

`


  
function ResultPage(){
    const location = useLocation();
    const { pokemonData } = location.state || { img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg" ,name: "푸린"};
    const navigate = useNavigate();
    return(

        <ResultPageStyle>
            <div className='result-container'>
                <div className='result-text'>{pokemonData.name}이(가) 나왔다!</div>
                <div className='monsterBall-container'>
                    <img src={monsterBall} className='monsterBall'></img>
                    <img src={pokemonData.img} className='monsterImg'></img>
                </div>
                
                <div className='monster-name-box' onClick={()=>{
                    navigate('/adventure', { state: {pokemonData} });
                }}>
                    <img src={btnBG} className='result-textBox'></img>
                    <div className='monster-name' >{pokemonData.name}와(과) 모험을 떠나자!</div>
                </div>
                <Link to='/' className='cancel'>
                    <img src='/img/cancelBtn.png' ></img>
                </Link>
            </div>
        </ResultPageStyle>
        
    );
}

export default ResultPage;
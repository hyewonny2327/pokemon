import React from 'react';
import doctor from './doctor.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StartPageStyle = styled.div`
width:100vw;
  height:100vh;
  background-color: #6DC2DF;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
.content-container{

    /* height:844px; */
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin:5%;
   
}
.logo{
    padding:5%;
    width:60vw;
    height:auto;
    
}
.image-container{
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
    position:relative;
    justify-content:center;
    
    
  }
  .image-container .doctor-img{
        object-fit:cover;
    display: inline-block;
  }
  .title-text{
    padding-top:10%;
  }
  .start-btn{
    position:fixed;
    bottom:100px;
  }
  .start-btn:hover{
    cursor:point;
  }
`
function StartPage(){
    return(
        <StartPageStyle>
            <div className='content-container'>
                <img src ='/img/logo.png' className='logo'></img>
                <div className='image-container'>
                <img src={doctor} className='doctor-img'></img>
                <Link to='/draw' className='start-btn'>
                    <img src='/img/startBtn.png' ></img>
                </Link>
                </div>
            </div>
        </StartPageStyle>
    );
}

export default StartPage;
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,backgroundImage,leftBtnText,rightBtnText}) {
    return (
        <Wrap bgImag={backgroundImage}>
            <Fade bottom>
                 <ItemText>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </ItemText>
            </Fade>
           
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                         <RightButton> 
                    {rightBtnText}
                </RightButton>
                    }
               
            </ButtonGroup>
            </Fade>
            <DownArrow src='/images/down-arrow.svg'/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    
    background-image:${props=> `url("/images/${props.bgImag}")`};
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:10px;

`


const RightButton = styled(LeftButton)`
    background: white;
    opacity:0.69;
    color:black;
`

const DownArrow = styled.img`
    
    height:40px;
    animation: animateDown infinite 1.5s;
    overflow-x:hidden;
`

const Buttons = styled.div`

`

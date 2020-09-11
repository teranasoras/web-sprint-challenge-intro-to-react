import React, {useState} from 'react';
import styled from 'styled-components';


const Birthyeardiv = styled.div`
margin-top:.5rem;
background-color :lightgray;
width: 5rem;
border-radius: 5% 10%;
height: 75%;
font-size: .75rem;
color:purple;
font-weight: bold;
`;

function Birthyear(props){
    const {persondata} = props;
    return(
        <Birthyeardiv>
            <p>{persondata.birth_year}</p>
        </Birthyeardiv>
    )
}
export default Birthyear;
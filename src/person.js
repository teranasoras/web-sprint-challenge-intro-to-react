import React from 'react';
import Birthyear from './birthyear';
import styled from 'styled-components';

const Persondiv = styled.div`
display:flex;
justify-content:space-between;
margin:1rem;
font-size: 1rem;
border: 2px solid green;
padding-left: 1rem;
padding-right:1rem;
color:white;
font-family: 'Monoton', cursive;
font-family: 'Sigmar One', cursive;
`;


function Person(props){
    const {persondata} = props;

    return(
        <Persondiv>
            <p>{persondata.name}</p>
            <Birthyear persondata = {persondata}/>
        </Persondiv>
    )
}
export default Person;
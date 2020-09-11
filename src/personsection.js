import React from 'react'
import Person from './person';
import styled from 'styled-components';

const Personsdiv = styled.div`
width:35%;
margin-left: 31.75%;
background-color: grey;
opacity: 75%;
padding-top:.5rem;
padding-bottom:.5rem;
`;

function Personsection(props){
    const {persondata} = props;

    return(
        <Personsdiv>
            {persondata.map(person => {
                return <Person persondata = {person}/>
            })}
        </Personsdiv>
    )
}
export default Personsection;
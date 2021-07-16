import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: stretch;
  padding: 3rem;
`;

const Card = styled.div`
  border: 5px solid white;
  border-radius: 4px;
  padding: 3rem;
  background-color: black;
  opacity: 70%;
  color: beige;
  margin-left: auto;
  margin-right: auto;
  width: 8em;
`;

const Character = (props) => {
  let { data } = props;

  return (
    <div>
      {data.map((starWars) => {
        return (
          <Cards>
            <Card>
              <h3>Name: {starWars.name}</h3>
              <h3>Gender: {starWars.gender}</h3>
              <h3>Birth Year: {starWars.birth_year}</h3>
            </Card>
          </Cards>
        );
      })}
    </div>
  );
};
export default Character;

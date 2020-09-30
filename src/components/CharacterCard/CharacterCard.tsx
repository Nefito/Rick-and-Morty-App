import React from 'react';
import styled from 'styled-components';

const CharacterCard = (props: any) => {

  const Card = styled.section`
    background: gray;
    display: block;
    border-radius: 8px;
  `;

  const CardImg = styled.img`
    border-radius: 8px;
  `;

  const Name = styled.h1`
    color: white;
    display: inline;
    margin: 1rem;
  `;
  const Status = styled(Name)``;
  const Container = styled.div`
      display: block;
      padding: 6px;
      margin: 2px;
    `;

  return (
    <Card>
      <CardImg src={props.character.image} alt={props.character.name} />
      <Container>
        <Name>{props.character.name}</Name>
        <Status as="h3">{props.character.status}-{props.character.species}</Status>
        <Status as="h3">Last known location: </Status>
        <Status as="h3">{props.character.location.name}</Status>
        <Status as="h3">First seen in: </Status>
        <Status as="h3">{props.character.episode[0]}</Status>
      </Container>
    </Card>
  );
};

export default CharacterCard;

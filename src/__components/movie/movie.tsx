import React from "react";
import styled from "styled-components";
import { CardContainer } from "../cardContainer";
import { MovieProps } from "./types";

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
`;

const CardDirector = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

const TopInfo = styled.div`
  position: absolute;
  background-color: #ffffff57;
  padding: 5px 15px;
  border-bottom-left-radius: 15px;
  right: 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

export const Movie: React.FC<MovieProps> = ({
  image,
  title,
  director,
  description,
  year,
}) => {
  return (
    <CardContainer>
      <TopInfo>{year}</TopInfo>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDirector>{director}</CardDirector>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

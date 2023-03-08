import styled from "styled-components";

export const CardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
`;

export const CardDirector = styled.h3`
  font-size: 1rem;
  margin: 0 0 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  margin: 0 0 1rem;
`;

export const TopInfo = styled.div`
  position: absolute;
  background-color: #ffffff57;
  padding: 5px 15px;
  border-bottom-left-radius: 15px;
  right: 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

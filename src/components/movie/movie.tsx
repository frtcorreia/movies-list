import { CardContainer } from "../cardContainer";
import {
  CardContent,
  CardDescription,
  CardDirector,
  CardImage,
  CardTitle,
  TopInfo,
} from "./styled";
import { MovieProps } from "./types";

export const Movie: React.FC<MovieProps> = ({
  image,
  title,
  director,
  description,
  year,
}) => {
  return (
    <CardContainer>
      {year && <TopInfo>{year}</TopInfo>}
      <CardImage src={image} alt={title} />
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {director && <CardDirector>{director}</CardDirector>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
    </CardContainer>
  );
};

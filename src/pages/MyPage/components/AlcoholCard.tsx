import React from 'react';

import { styled } from 'styled-components';

import { Images } from '../../../assets/image';
import { FiveStarLabel } from '../../../components';
import { AlcoholTypeEnum } from '../../../types/alcohols/AlcoholTypeEnum';
import {
  CocktailResponse,
  SpiritResponse,
  WineResponse,
} from '../../../types/api/alcohols/AlcoholResponse';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  height: 220px;
  padding: ${props => props.theme.padding};

  background-color: ${props => props.theme.colors.componentBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  cursor: pointer;

  /* Desktop hover effect */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  /* Mobile touch effect */
  @media (hover: none) and (pointer: coarse) {
    &:active {
      transform: scale(0.98);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    }
  }

  /* Fallback for touch devices that also support hover */
  @media (pointer: coarse) {
    &:active {
      transform: scale(0.98);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 8px;

  overflow: hidden;
`;

const AlcoholImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const AlcoholName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;

  width: 100%;
  height: 34px;

  color: ${props => props.theme.colors.text};
  margin: 0 0 8px 0;

  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
`;

interface AlcoholCardProps {
  alcohol: SpiritResponse | WineResponse | CocktailResponse;
  alcoholType: AlcoholTypeEnum;
}

export default function AlcoholCard({
  alcohol,
  alcoholType,
}: AlcoholCardProps) {
  // Get the default image based on alcohol type
  const getDefaultImage = (type: AlcoholTypeEnum) => {
    switch (type) {
      case AlcoholTypeEnum.WINE:
        return Images.DEFAULT_WINE;
      case AlcoholTypeEnum.SPIRIT:
        return Images.DEFAULT_SPIRIT;
      case AlcoholTypeEnum.COCKTAIL:
        return Images.DEFAULT_COCKTAIL;
      default:
        return Images.DEFAULT_WINE;
    }
  };

  // Get the main image or fallback to default
  const imageUrl =
    alcohol.images && alcohol.images.length > 0
      ? alcohol.images[0].path
      : getDefaultImage(alcoholType);

  // Calculate average rating (placeholder - you'll need to implement this based on your actual rating system)
  const averageRating = 4.0; // This should come from actual rating data

  return (
    <Container>
      <ImageContainer>
        <AlcoholImage
          src={imageUrl}
          alt={alcohol.name}
          onError={e => {
            // Fallback to default image if the main image fails to load
            e.currentTarget.src = getDefaultImage(alcoholType);
          }}
        />
      </ImageContainer>

      <AlcoholName>{alcohol.name}</AlcoholName>

      <RatingContainer>
        <FiveStarLabel numOfStars={averageRating} />
      </RatingContainer>
    </Container>
  );
}

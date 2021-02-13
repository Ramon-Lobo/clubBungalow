import React from 'react';
import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

interface AvatarProps extends ImageProps {
  distance?: number[];
  width?: number | string;
  border?: boolean;
}

function getWidth(prop?: string | number) {
  return prop ? (typeof prop === 'number' ? `${prop}px` : prop) : '70px';
}

function getPadding(prop: number[] = []): string {
  switch (prop.length || 0) {
    case 1:
      return `${prop[0]}px`;
    case 2:
      return `${prop[0]}px ${prop[1]}px`;
    case 3:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px`;
    case 4:
      return `${prop[0]}px ${prop[1]}px ${prop[2]}px ${prop[3]}px`;
    default:
      return '0px';
  }
}

function getBorder(prop?: boolean) {
  return prop ? '3px' : '0px';
}

const Avatar: React.FC<AvatarProps> = styled.Image`
  max-width: ${(props: AvatarProps) => getWidth(props.width)};
  max-height: ${(props: AvatarProps) => getWidth(props.width)};
  width: ${(props: AvatarProps) => getWidth(props.width)};
  height: ${(props: AvatarProps) => getWidth(props.width)};
  border-radius: 100px;
  margin: ${(props: AvatarProps) => getPadding(props.distance)};
  border-width: ${(props: AvatarProps) => getBorder(props.border)};
  border-color: #e6eaf0;
`;

export default Avatar;

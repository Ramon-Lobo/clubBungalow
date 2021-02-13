import React from 'react';
import { TouchableOpacity, Animated, Insets, GestureResponderEvent, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

type AlignSelf = 'auto' | 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
export interface BlockProps extends ViewProps {
  distance?: number[];
  pad?: number[];
  width?: string | number;
  justify?: string;
  align?: string;
  row?: boolean;
  height?: string | number;
  background?: string;
  radius?: number;
  border?: boolean;
  alignSelf?: AlignSelf;
  shadow?: number[];
  shadowColor?: string;
  /* Android only */
  shadowIntensity?: number;
  onPress?: (event: GestureResponderEvent) => void;
  activeOpacity?: number | Animated.Value | Animated.AnimatedInterpolation | undefined;
  children?: React.ReactNode;
  touchableStyle?: object;

  // Touchable Opacity
  onPressIn: (event: GestureResponderEvent) => void;
  onPressOut: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  onMagicTap: () => void;

  pressRetentionOffset: Animated.WithAnimatedObject<Insets>;
  disabled: boolean | Animated.Value | Animated.AnimatedInterpolation | null | undefined;
  delayPressIn: number | Animated.Value | Animated.AnimatedInterpolation | undefined;
  delayLongPress: number | Animated.Value | Animated.AnimatedInterpolation | undefined;
  delayPressOut: number | Animated.Value | Animated.AnimatedInterpolation | undefined;
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

function getWidth(prop?: string | number) {
  return prop ? (typeof prop === 'number' ? `${prop}px` : prop) : '100%';
}

function getHeight(prop?: string | number) {
  return prop ? (typeof prop === 'number' ? `${prop}px` : prop) : 'auto';
}

function getAlign(props: BlockProps) {
  return props?.align !== undefined ? props.align : props.row ? 'center' : 'flex-start';
}

function getJustify(props: BlockProps) {
  return props?.justify !== undefined ? props.justify : props.row ? 'flex-start' : 'center';
}

function getDirection(prop?: boolean) {
  return prop ? 'row' : 'column';
}

function getShadow(prop: number[] = []): string {
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
      return '0px 0px 0px';
  }
}

const TouchableBase: React.FC<BlockProps> = styled(AnimatedTouchableOpacity)`
  width: ${(props: BlockProps) => getWidth(props.width)};
  height: ${(props: BlockProps) => getHeight(props.height)};
  flex-direction: ${(props: BlockProps) => getDirection(props.row)};
  align-items: ${(props: BlockProps) => getAlign(props)};
  justify-content: ${(props: BlockProps) => getJustify(props)};
  margin: ${(props: BlockProps) => getPadding(props.distance)};
  padding: ${(props: BlockProps) => getPadding(props.pad)};
  background-color: ${(props: BlockProps) => props.background};
  border-radius: ${(props: BlockProps) => props.radius}px;
  border: 0px solid #e6eaf0;
  border-bottom-width: ${(props: BlockProps) => (props.border ? 1 : 0)}px;
  overflow: hidden;
  align-self: ${(props: BlockProps) => props.alignSelf};
  box-shadow: ${(props: BlockProps) => `${getShadow(props.shadow)} ${props.shadowColor || '#0000000D;'}`};
  elevation: ${(props: BlockProps) => (props.shadow !== undefined && props.shadowIntensity) || 0};
`;

const BlockBase: React.FC<BlockProps> = styled.View`
  width: ${(props: BlockProps) => getWidth(props.width)};
  flex-direction: ${(props: BlockProps) => getDirection(props.row)};
  align-items: ${(props: BlockProps) => getAlign(props)};
  justify-content: ${(props: BlockProps) => getJustify(props)};
  margin: ${(props: BlockProps) => getPadding(props.distance)};
  padding: ${(props: BlockProps) => getPadding(props.pad)};
  background-color: ${(props: BlockProps) => props.background};
  border-radius: ${(props: BlockProps) => props.radius}px;
  border: 0px solid #e6eaf0;
  border-bottom-width: ${(props: BlockProps) => (props.border ? 1 : 0)}px;
  overflow: hidden;
  align-self: ${(props: BlockProps) => props.alignSelf};
  box-shadow: ${(props: BlockProps) => `${getShadow(props.shadow)} ${props.shadowColor || '#0000000D;'}`};
  elevation: ${(props: BlockProps) => (props.shadow !== undefined && props.shadowIntensity) || 0};
`;

const Block: React.FC<BlockProps> = ({
  onPress,
  activeOpacity,
  onPressIn,
  onPressOut,
  onLongPress,
  onMagicTap,
  pressRetentionOffset,
  disabled,
  delayPressIn,
  delayLongPress,
  delayPressOut,
  touchableStyle,
  children,
  ...rest
}) => {
  function getComponent() {
    if (onPress) {
      return (
        <TouchableBase
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          onMagicTap={onMagicTap}
          pressRetentionOffset={pressRetentionOffset}
          disabled={disabled}
          delayPressIn={delayPressIn}
          delayLongPress={delayLongPress}
          delayPressOut={delayPressOut}
          onPress={onPress}
          activeOpacity={activeOpacity}
          {...rest}
        >
          {/* <BlockBase {...rest}>{children}</BlockBase> */}
          {children}
        </TouchableBase>
      );
    }

    return <BlockBase {...rest}>{children}</BlockBase>;
  }

  return <React.Fragment>{getComponent()}</React.Fragment>;
};

Block.defaultProps = {
  row: false,
  background: 'transparent',
  radius: 0,
  alignSelf: 'auto',
  activeOpacity: 1,
  touchableStyle: {},
};

export default Block;

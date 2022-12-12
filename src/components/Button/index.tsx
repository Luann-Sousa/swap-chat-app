/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { WrapperButton, TitleButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Buttonn({ title, ...rest }: ButtonProps) {
  return (
    <WrapperButton {...rest}>
      <TitleButton>{title}</TitleButton>
    </WrapperButton>
  );
}

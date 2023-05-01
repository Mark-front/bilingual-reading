import React from 'react';
import { Flex, IFlexProps } from '../Flex/Flex';

type IHStackProps = Omit<IFlexProps, 'direction'>

export const HStack = (props: IHStackProps) => {
    return (
        <Flex {...props} direction={'row'}/>
    );
}

HStack.displayName = 'HStack'
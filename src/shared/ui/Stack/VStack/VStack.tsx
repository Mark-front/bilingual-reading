import React from 'react';
import { Flex, IFlexProps } from '../Flex/Flex';

type IVStackProps = Omit<IFlexProps, 'direction'>

export const VStack = (props: IVStackProps) => {
    return (
        <Flex {...props} direction={'column'}/>
    );
}

VStack.displayName = 'VStack'
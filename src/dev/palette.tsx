import React, {Fragment} from 'react';
import {Category, Component, Palette, Variant,} from '@react-buddy/ide-toolbox';
import {Text, TextSize} from "@/shared/ui/Text";

export const PaletteTree = () => (
    <Palette>
        <Category name="App">
            <Component name="Loader">
                <Variant>
                    <ExampleLoaderComponent/>
                </Variant>
                <Text
                    size={TextSize.M}
                    title={'Title'}
                    text={'lorem loremloremlorem loremlorem lorem lorem lorem lorem'}
                />
            </Component>
            <Component name="Text">
                <Variant name="with title">
                    <Text
                        size={TextSize.M}
                        title={'Title'}
                        text={'lorem loremloremlorem loremlorem lorem lorem lorem lorem'}
                    />
                </Variant>
            </Component>
        </Category>
    </Palette>
);

export function ExampleLoaderComponent() {
    return (
        <Fragment>Loading...</Fragment>
    );
}
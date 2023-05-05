import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import ArticleDetailPage from "../pages/ArticleDetailPage/ui/ArticleDetailPage/ArticleDetailPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ArticleDetailPage">
                <ArticleDetailPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '@/widgets/Page/model/types/scroll';

const initialState: SaveScrollSchema = {
    scroll: {},
}

const scrollSaveSlice = createSlice({
    name: 'scrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
})

export const { reducer: scrollSaveReducer } = scrollSaveSlice;
export const { actions: scrollSaveAction } = scrollSaveSlice;

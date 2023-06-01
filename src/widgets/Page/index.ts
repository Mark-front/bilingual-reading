import { Page } from './ui/Page/Page'
import { SaveScrollSchema } from './model/types/scroll'
import { scrollSaveAction, scrollSaveReducer } from './model/slices/scrollSaveSlice/scrollSaveSlice'
import { getSaveScrollByPath } from './model/selectors/saveScroll'

export {
    Page,
    scrollSaveReducer,
    scrollSaveAction,
    getSaveScrollByPath,
}

export type {
    SaveScrollSchema,
}
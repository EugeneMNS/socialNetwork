export const ADD_DIALOGS_TEXT = 'ADD-DIALOGS-TEXT'
export const UPDATE_DIALOGS_TEXT = 'UPDATE-DIALOGS-TEXT'


export type DialogItemType = {
    id: number
    name: string
}

export type DialogsTextsType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogItems: Array<DialogItemType>
    dialogTexts: Array<DialogsTextsType>
    newMessage: string
}


export type DialogsActionType = AddDialogsTextActionCreate | UpdateDialogsMessageActionCreate


const initialState: DialogsPageType = {
    dialogItems: [{id: 1, name: 'Serik'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Gleb'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Ivan'},
    ],
    dialogTexts: [{id: 9, message: 'Hello.How are you?'},
        {id: 10, message: `Hi, thank's, i am fine.And how are you?`},
        {id: 11, message: 'I am fine too!'},
    ],
    newMessage: 'hello'
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionType): DialogsPageType => {
    switch (action.type) {
        case (ADD_DIALOGS_TEXT):

            const newText = {
                id: 13,
                message: state.newMessage
            }
            state = {...state, dialogTexts:[...state.dialogTexts, newText]}
            state.newMessage = ''
            return state
        case (UPDATE_DIALOGS_TEXT):

            state = {...state, newMessage: action.text}
            return state
        default:
            return state
    }
}

type AddDialogsTextActionCreate = {type: typeof ADD_DIALOGS_TEXT}
export const addDialogsTextActionCreate = (): AddDialogsTextActionCreate => ({
    type: ADD_DIALOGS_TEXT
})

type UpdateDialogsMessageActionCreate = {
    type: typeof  UPDATE_DIALOGS_TEXT,
    text: string

}
export const updateDialogsMessageActionCreate = (text: string ): UpdateDialogsMessageActionCreate => ({
    type: UPDATE_DIALOGS_TEXT,
    text: text
})



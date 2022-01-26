export const ADD_DIALOGS_TEXT= 'ADD-DIALOGS-TEXT'
export const UPDATE_DIALOGS_TEXT=  'UPDATE-DIALOGS-TEXT'

export type DialogItemType={
    id: number
    name: string
}

type DialogTextType={
    id: number
    message: string | undefined
}
export type DialogsPageType={
    dialogItems:Array<DialogItemType>
    dialogTexts: Array<DialogTextType>
    newMessage:string | undefined
}
export type ActionType={
    type: string;
    text?:string | undefined
}
const initialState={
    dialogItems:[{id:1, name: 'Serik'},
        {id:2, name:'Olya'},
        {id:3, name:'Gleb'},
        {id:4, name:'Tanya'},
        {id:5, name:'Ivan'}
    ],
    dialogTexts:[{id:9, message: 'Hello. How are you?'},
        {id:10, message: "Hi, thank's, i'm fine. Are you?"},
        {id: 11, message: "I'm fine too!"}
    ],
    newMessage: "Hello"
}

export const dialogsReducer =(state:DialogsPageType = initialState, action: ActionType): DialogsPageType =>{
    switch (action.type){
        case (ADD_DIALOGS_TEXT):
            const newText={
                id:13,
                message:state.newMessage
            }
            state= {...state, dialogTexts:[...state.dialogTexts, newText]}
            state.newMessage=''
            return state
        case (UPDATE_DIALOGS_TEXT):
            state = {...state, newMessage: action.text}
            return  state
        default:
            return state
    }
}
export const addDialogsTextActionCreate=():ActionType =>({
    type: ADD_DIALOGS_TEXT
})

export const updateDialogsMessageActionCreate=(text: string | undefined): ActionType => ({
    type: UPDATE_DIALOGS_TEXT,
    text: text
})

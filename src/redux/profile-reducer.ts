export const ADD_POST = 'ADD-POST'
export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'


export type MessageType = {
    id: number
    message: string | undefined
    likesCount: number
}

export type ProfilePageType = {
    messages: Array<MessageType>
    textMessage: string | undefined
}



export type ActionType = {
    type: string
    text?: string | undefined
}


const initialState = {
    messages: [
        {
            id: 1,
            message: 'Hello, it is my message!',
            likesCount: 11
        },
        {
            id: 2,
            message: 'Hi. I am write message too!',
            likesCount: 2

        },
        {
            id: 3,
            message: "Don't forget for me, please!",
            likesCount: 15
        }
    ],
    textMessage: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case (ADD_POST):

            const newPost = {
                id: 4,
                message: state.textMessage,
                likesCount: 19
            }

            state = {...state, messages: [...state.messages, newPost]}
            state.textMessage = ''
            return state


        case (CHANGE_TEXT_MESSAGE):

            state = {...state, textMessage: action.text}
            return state
        default:
            return state

    }
}
export const addPostActionCreate = (): ActionType => ({
    type: ADD_POST
})
export const changeTextMessageActionCreate = (text: string | undefined): ActionType => ({
    type: CHANGE_TEXT_MESSAGE,
    text: text
})
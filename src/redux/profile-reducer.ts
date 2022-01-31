export const ADD_POST = 'ADD-POST'
export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'


export type MessageType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<MessageType>
    textMessage: string

}

export type ProfileActionType = AddPostActionCreate | ChangeTextMessageActionCreate


const initialState: ProfilePageType = {
    posts: [
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
            message: `Don't forget for me, please!`,
            likesCount: 15
        }
    ],
    textMessage: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {

    switch (action.type) {
        case (ADD_POST):

            const newPost = {
                id: 4,
                message: state.textMessage,
                likesCount: 19
            }

            state = {...state, posts: [...state.posts, newPost]}
            state.textMessage = ''
            return state


        case (CHANGE_TEXT_MESSAGE):

            state = {...state, textMessage: action.text}
            return state
        default:
            return state

    }
}

type AddPostActionCreate = {type: typeof ADD_POST}
export const addPostActionCreate = (): AddPostActionCreate => ({
    type: ADD_POST
})

type ChangeTextMessageActionCreate = {
    type: typeof CHANGE_TEXT_MESSAGE,
    text: string

}
export const changeTextMessageActionCreate = (text: string): ChangeTextMessageActionCreate => ({
    type: CHANGE_TEXT_MESSAGE,
    text: text
})
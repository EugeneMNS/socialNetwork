export const ADD_POST = 'ADD-POST'
export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'
export const ADD_DIALOGS_TEXT = 'ADD-DIALOGS-TEXT'
export const UPDATE_DIALOGS_TEXT = 'UPDATE-DIALOGS-TEXT'


export type MessageType = {
    id: number
    message: string | undefined
    likesCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type ProfilePageType = {
    messages: Array<MessageType>
    textMessage: string | undefined
}
type DialogTextType = {
    id: number
    message: string | undefined
}
export type DialogsPageType = {
    dialogItems: Array<DialogItemType>
    dialogTexts: Array<DialogTextType>
    newMessage: string | undefined

}
export type FriendsType = {
    id: number
    name: string
    src: string
}
export type SidebarType = {
    friends: Array<FriendsType>

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type ActionType = {
    type: string
    text?: string
}
export type StoreType = {
    _callSubscriber: () => void
    _state: StateType
    getState: () => StateType
    subscriber: (observer: () => void) => void
    addPost: () => void
    addDialogsText: () => void
    changeTextMessage: (text: string | undefined) => void
    updateDialogsMessage: (newMessage: string | undefined) => void
    dispatch: (action: ActionType) => void
}




export const store: StoreType = {
    _callSubscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogItems: [{id: 1, name: 'Serik'},
                {id: 2, name: 'Olya'},
                {id: 3, name: 'Gleb'},
                {id: 4, name: 'Tanya'},
                {id: 5, name: 'Ivan'},
            ],
            dialogTexts: [{id: 9, message: 'Hello.How are you?'},
                {id: 10, message: "Hi, thank's, i am fine.And how are you?"},
                {id: 11, message: 'I am fine too!'},
            ],
            newMessage: 'hello'
        },
        sidebar: {
            friends: [
                {
                    id: 6,
                    name: 'Gleb',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU'
                },
                {
                    id: 7,
                    name: 'Tanya',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AuCaCDS8eeLRXGL0pFD9cIddYuHc8AJoSA&usqp=CAU'
                },
                {
                    id: 8,
                    name: 'Ivan',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU'
                },

            ],
        }
    },
    getState() {

        return this._state
    },

    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },


    addPost() {
        const newPost = {
            id: 4,
            message: this._state.profilePage.textMessage,
            likesCount: 19
        }

        this._state.profilePage.messages.push(newPost)
        this._state.profilePage.textMessage = ''
        this._callSubscriber()

    },

    addDialogsText() {
        const newText = {
            id: 13,
            message: this._state.dialogsPage.newMessage
        }
        this._state.dialogsPage.dialogTexts.push(newText)
        this._state.dialogsPage.newMessage = ''
        this._callSubscriber()
    },
    changeTextMessage(text: string | undefined) {

        this._state.profilePage.textMessage = text
        this._callSubscriber()
    },
    updateDialogsMessage(newMessage: string | undefined) {

        this._state.dialogsPage.newMessage = newMessage
        this._callSubscriber()
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: 4,
                message: this._state.profilePage.textMessage,
                likesCount: 19
            }

            this._state.profilePage.messages.push(newPost)
            this._state.profilePage.textMessage = ''
            this._callSubscriber()

        }else if (action.type === CHANGE_TEXT_MESSAGE) {
            this._state.profilePage.textMessage = action.text
            this._callSubscriber()

        }else if (action.type === ADD_DIALOGS_TEXT) {
            const newText = {
                id: 13,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.dialogTexts.push(newText)
            this._state.dialogsPage.newMessage = ''
            this._callSubscriber()

        }else if (action.type === UPDATE_DIALOGS_TEXT) {
            this._state.dialogsPage.newMessage = action.text
            this._callSubscriber()

        }

    }
} 

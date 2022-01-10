

let rerenderEntireTree = () => {console.log('rerender falsh')}

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


export const state: StateType = {
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
                message: `Don't forget for me, please!`,
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
            {id: 10, message: `Hi, thank's, i am fine.And how are you?`},
            {id: 11, message: 'I am fine too!'},
        ],
        newMessage: 'hello'
    },
    sidebar: {
        friends: [
            {id: 6, name: 'Gleb', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU'},
            {id: 7, name: 'Tanya', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AuCaCDS8eeLRXGL0pFD9cIddYuHc8AJoSA&usqp=CAU'},
            {id: 8, name: 'Ivan', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU'},

        ],
     }
}

export const addPost = () => {
    const newPost = {
        id: 4,
        message: state.profilePage.textMessage,
        likesCount: 19
    }

    state.profilePage.messages.push(newPost)
    state.profilePage.textMessage = ''
    rerenderEntireTree()

}

export const addDialogsText = () => {
    const newText = {
        id: 13,
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.dialogTexts.push(newText)
    state.dialogsPage.newMessage = ''
    rerenderEntireTree()
}

export const changeTextMessage = (text: string | undefined) => {

    state.profilePage.textMessage = text
    rerenderEntireTree()
}
export const updateDialogsMessage = (newMessage: string | undefined) => {

    state.dialogsPage.newMessage = newMessage
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

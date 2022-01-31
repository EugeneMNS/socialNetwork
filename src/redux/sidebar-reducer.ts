export type FriendsType = {
  id: number
  name: string
    src: string
}
export type SidebarType={
    friends:Array<FriendsType>
}
const initialState:SidebarType={
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

export const sidebarReducer = (state: SidebarType = initialState, action: any): SidebarType => {
    return state
}
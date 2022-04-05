import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    changeUserProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        localStatus: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true});

    }

    deactivateEditMode() {
        this.setState({editMode: false});
        this.props.changeUserProfileStatus(this.state.localStatus)
    }
    changeInputText = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({localStatus: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {

        if (prevProps.status !== this.props.status) {
            this.setState({localStatus: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status? this.props.status: '--------'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
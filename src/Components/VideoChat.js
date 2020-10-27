import React from 'react';
import '../App.css';
import 'firebase/database';
import classnames from 'classnames';

export default class VideoChat extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            userToCall: null,
            username: null
        }
    }

    onLoginClicked = async () => {
        await this.props.onLogin(this.state.username)
        this.setState({
            isLoggedIn: true
        });
    }

    onStartCallClicked = () => {
        this.props.startCall(this.state.username, this.state.userToCall)
    }

    renderVideos = () => {
        return <div className={classnames('videos', { active: this.state.isLoggedIn })}>
            <div>
                <label>{this.state.username}</label>

                <video ref={this.props.setLocalVideoRef} autoPlay playsInline></video>
            </div>

        </div>
    }
}
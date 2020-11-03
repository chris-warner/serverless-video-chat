import React from 'react'
import './App.css'
import 'firebase/database'

import config from './config'
import VideoChat from './VideoChat'
import { doLogin } from './modules/FirebaseModule'
import firebase from 'firebase/app'
import { initiateConnection, initiateLocalStream } from './modules/RTCModule'

class VideoChatContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      database: null,
      connectedUser: null,
      localStream: null,
      localConnection: null
    }
    this.localVideoRef = React.createRef()
    this.remoteVideoRef = React.createRef()
  }

  componentDidMount = async () => {
    // initialize firebase
    firebase.initializeApp(config)
    // getting local video stream
    const localStream = await initiateLocalStream()
    this.localVideoRef.srcObject = localStream
    // create the local connection
    const localConnection = await initiateConnection()
    this.setState({
      database: firebase.database(),
      localStream,
      localConnection
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    // prevent rerenders if not necessary

    return true
  }

  startCall = async (username, userToCall) => {
    // listen to the events first

    // create a new offer

  }

  onLogin = async (username) => {
    // do the login phase
    await doLogin(username, this.state.database, this.handleUpdate)
  }

  setLocalVideoRef = ref => {
    this.localVideoRef = ref
  }

  setRemoteVideoRef = ref => {
    this.remoteVideoRef = ref
  }

  handleUpdate = (notif, username) => {
    // read the received notif and apply it

    if (notif) {
      switch (notif.type) {
        case 'offer':
          // listen to the connection events

          // send a answer
          break
        case 'answer':
          // start the call
          break
        case 'candidate':
          // add candidate to our connection
          break
        default:
          break
      }
    }
  }

  render() {
    return <VideoChat
      startCall={this.startCall}
      onLogin={this.onLogin}
      setLocalVideoRef={this.setLocalVideoRef}
      setRemoteVideoRef={this.setRemoteVideoRef}
      connectedUser={this.state.connectedUser}
    />
  }
}

export default VideoChatContainer

import { doCandidate, doOffer } from "./FirebaseModule";

export const createOffer = async (connection, localStream, userToCall, doOffer, database, username) => {
  try {
    connection.addStream(localStream)

    const offer = await connection.createOffer()
    await connection.setLocalDescription(offer)

    doOffer(userToCall, offer, database, username)

  } catch (exception) {
    console.error(exception)
  }
}

export const initiateLocalStream = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    return stream;
  } catch (exception) {
    console.error(exception)
  }
}
export const initiateConnection = async () => {
  try {
    // create a connection
    // using Google public stun server

    const configuration = {
      iceServers: [{ urls: 'stun:stun2.1.google.com:19302' }]
    }
    const conn = new RTCPeerConnection(configuration)
    return conn
  } catch (exception) {
    console.error(exception)
  }
}

export const listenToConnectionEvents = (conn, username, remoteUsername, database, remoteVideoRef, doCandidate) => {
  // listen for ice candidates
  conn.oniceCandidate = function (event) {
    if (event.candidate) {
      doCandidate(remoteUsername, event.candidate, database, username)
    }
  }
  // when a remote user adds stream to the peer connection, we display it
  conn.ontrack= function (e) {
    if (remoteVideoRef.srcObject !== e.streams[0]) {
      remoteVideoRef.srcObject = e.streams[0]
    }
  }
}

export const sendAnswer = async (conn, localStream, notif, doAnswer, database, username) => {
  try {
    // add the localstream to the connection
    // set the remote and local descriptions and create an answer

    // create an answer to an offer

    // send answer to the other peer

  } catch (exception) {
    console.error(exception)
  }
}

export const startCall = (username, userToCall) => {
  const { database, localConnection, localstream } = this.state
  // listen to the events first
  listenToConnectionEvents(localConnection, username, userToCall, database, this.remoteVideoRef, doCandidate)
  // create a new offer
  createOffer(localConnection, localstream, userToCall, doOffer, database, username)

}

export const addCandidate = (yourConn, notif) => {
  // apply the new received candidate to the connection

}

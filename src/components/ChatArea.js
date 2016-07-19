import React from 'react'
import ChatAreaTitle from '../containers/ChatAreaTitle'
import CurrentMsgList from '../containers/CurrentMsgList'
import InputArea from '../containers/InputArea'

const ChatArea = () => (
  <div>
    <ChatAreaTitle />
    <CurrentMsgList />
    <br/>
    <InputArea />
  </div>
)

export default ChatArea

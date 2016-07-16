import React from 'react'
import ChatAreaTitle from './ChatAreaTitle'
import CurrentMsgList from './CurrentMsgList'
import InputArea from './InputArea'

const ChatArea = () => (
  <div>
    <ChatAreaTitle />
    <CurrentMsgList />
    <br/>
    <InputArea />
  </div>
)

export default ChatArea

import React from 'react';
import connect from '../utils/connect.js';

const mapStateToProps = (state) => {
  const { messages, currentChannelId } = state;
  return { messages, currentChannelId };
};

@connect(mapStateToProps)


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.current.scrollIntoView({ behavior: 'auto' });
  }

  render() {
    const { messages, currentChannelId } = this.props;
    const filteredMessages = messages.filter(el => el.channelId === currentChannelId);
    return (
        <div className='messages w-100 pl-4 pr-4'>
            {filteredMessages.length === 0 ? null
              : filteredMessages.map(({ id, text, username }) => (
             <div key={id} id='newMessage' className='row message-base'>
               <div className='col-sm-12 col-md-12 message-text border rounded mb-1 bg-white'>
                <p className="text-wrap">({username}): {text}</p>
               </div>
             </div>
              ))}
          <div ref={this.messagesEnd} />
        </div>);
  }
}

export default MessageList;

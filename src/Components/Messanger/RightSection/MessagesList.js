import Message from './Message';

export default function MessagesList({ id, messages }) {
  if (!messages) return <></>;

  return (
    <>
      <div className={``}>
        {messages.map((message, index) => {
          let mine = false;

          if (message?.sender?.id === id || message.senderId == id) mine = true;

          if (!message.body) return '';
          return <Message mine={mine} message={message.body} key={index} />;
        })}
      </div>
    </>
  );
}

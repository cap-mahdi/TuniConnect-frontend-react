import style from './Message.module.css';

export default function Message({ mine, message }) {
  //   const json = JSON.parse(message);
  //   if (!json?.message) return <></>;
  //   const text = json?.message;

  return (
    <>
      <div className={`${mine ? style['mine'] : ''} ${style['container']}`}>
        <p>{message}</p>
      </div>
    </>
  );
}

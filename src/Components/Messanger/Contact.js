import avatar from '../../assets/avatar.svg';

export default function Contact({ person, member, friend, activeRoom, setActiveRoom, room, onClick }) {
  return (
    <button
      key={room.id}
      onClick={() => {
        console.log('change to ', room);
        onClick(room);
      }}
      className={`sidebar ${activeRoom?.id == room.id ? 'bg-gray-50' : ''}`}
    >
      <div className="flex gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={friend?.profilePicture ? `http://localhost:8000/images/${friend.profilePicture}` : avatar}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {friend.firstName} {friend.lastName}
          </p>
        </div>
      </div>
      {/* <div className="hidden sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{person.role}</p>
      {person.lastSeen ? (
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
        </p>
      ) : (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">Online</p>
        </div>
      )}
    </div> */}
    </button>
  );
}

import axios from 'axios';
import { getData, postData } from '../utilities';

export async function getRoomMessages(args) {
  const { roomId } = args;
  return await getData(`/room/getRoomMessages/${roomId}`);
}

export async function createRoom(args) {
  const { member, friend, setRooms } = args;
  if (member.id == friend.id) return;
  const create = { creatorId: member.id };
  const room = await postData(`/room/create`, create);
  const add = { roomId: room.data.id, memberId: friend.id };
  const newRoom = await postData(`/room/addMember`, add);
  setRooms((prev) => {
    if (!prev) return [newRoom.data];
    return [...prev, newRoom.data];
  });
}

export async function getRooms(args) {
  return await getData(`/room/getRooms/${args}`);
}

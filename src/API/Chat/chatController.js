import axios from 'axios';
import { getData } from '../utilities';

export async function getRoomMessages(args) {
  const { roomId } = args;
  return getData(`/room/getRoomMessages/${roomId}`);
}

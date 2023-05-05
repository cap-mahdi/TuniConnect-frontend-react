import axios from 'axios';
import { getData } from '../utilities';

export async function getMember() {
  return getData('/member/');
}

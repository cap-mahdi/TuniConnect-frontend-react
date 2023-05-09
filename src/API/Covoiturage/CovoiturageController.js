import axios from 'axios';
import { getData, postData } from '../utilities';

export async function getCovoiturages() {
  return getData('/covoiturage/');
}

export async function postCovoiturage(data) {
  return postData('/covoiturage/', data);
}

export async function sendRequest(sender_id, covoiturage_id,data) {
  return postData(`/member/sendCovRequest?id=${sender_id}&covoiturage_id=${covoiturage_id}`, data);
}

export async function getCovoituragesByDriver(driver_id) {
  return getData(`/covoiturage/driver?id=${driver_id}`);
} 
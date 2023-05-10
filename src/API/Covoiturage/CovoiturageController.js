import { deleteData, getData, postData, putData } from '../utilities';

export async function getCovoiturages() {
  return await getData('/covoiturage/');
}

export async function postCovoiturage(data) {
  return await postData('/covoiturage/', data);
}

export async function sendRequest(sender_id, covoiturage_id,data) {
  return await postData(`/member/sendCovRequest?id=${sender_id}&covoiturage_id=${covoiturage_id}`, data);
}

export async function getCovoituragesByDriver(driver_id) {
  return await getData(`/covoiturage/driver?id=${driver_id}`);
} 

export async function getCovoituragesByID(id) {
  return await getData(`/covoiturageRequest/covoiturage?id=${id}`);
}

export async function acceptCov(sender_id, cov_id) {
  return await putData(`/member/acceptCov?sender_id=${sender_id}&covoiturage_id=${cov_id}`, {});
}

export async function declineCov(sender_id, cov_id) {
  return await putData(`/member/rejectCov?sender_id=${sender_id}&covoiturage_id=${cov_id}`, {});
}

export async function deleteCovoiturage(id) {
  return await deleteData(`/covoiturage/delete?id=${id}`);
}
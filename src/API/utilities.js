import axios from 'axios';
import AuthController from './Accounts/AuthController';
axios.defaults.headers.common['Authorization'] = `Bearer ${AuthController.getToken()}`;
/**
 *
 * @param {*} getData Async function to acess backend route
 * @param {*} setState Where to save data
 */

export async function fetchData(getData, setState) {
  try {
    const response = await getData();
    if(response.data)
      setState(response.data);
  } catch (error) {
    console.log("error ", error);
  }
}

export async function fetchDataWithArgs(getData, setState, args) {
  try {
    const response = await getData(args);
    setState(response.data);
  } catch (error) {
    console.log(error);
  }
}

const baseUrl = 'http://localhost:8000';

export async function getData(uri) {
  try {
    const response = await axios.get(baseUrl + uri);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postData(uri, data) {
  try {
    return await axios.post(baseUrl + uri, data);
  } catch (error) {
    console.log("error", error);
    return {msg:error.response.data,status:404};
  }
}

export async function deleteData(uri) {
  try {
    const response = await axios.delete(baseUrl + uri);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function putData(uri, data) {
  try {
    const response = await axios.put(baseUrl + uri, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      if (count === 1) {
        return `${count} ${interval.label} ago`;
      } else {
        return `${count} ${interval.label}s ago`;
      }
    }
  }
  return 'just now';
}
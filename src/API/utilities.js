import axios from 'axios';

/**
 *
 * @param {*} getData Async function to acess backend route
 * @param {*} setState Where to save data
 */

export async function fetchData(getData, setState) {
  try {
    const response = await getData();
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
    const response = await axios.post(baseUrl + uri, data);
    return response;
  } catch (error) {
    console.log(error);
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

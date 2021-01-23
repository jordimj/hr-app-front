import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

export async function getDepartaments() {
  const response = await instance.get('/departaments/');
  return response.data;
}

export async function getEmployees() {
  const response = await instance.get('/employees/');
  return response.data;
}

export async function getSalaryStatsPerDepartament() {
  const response = await instance.get('/salary/stats/');
  return response.data;
}

export async function getSalaryStatsHigherThan() {
  const response = await instance.get('/salary/stats/higherThan/');
  return response.data;
}

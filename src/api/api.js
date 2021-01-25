import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

export async function getDepartments() {
  const response = await instance.get('/departments/');
  return response.data;
}

export async function getEmployees() {
  const response = await instance.get('/employees/');
  return response.data;
}

export async function createEmployee(employee) {
  const response = await instance.post('/employee/new/', employee);
  return response;
}

export async function getSalaryStatsPerDepartment() {
  const response = await instance.get('/salary/stats/');
  return response.data;
}

export async function getSalaryStatsHigherThan(amount) {
  const response = await instance.get(`/salary/higherThan/${amount}/`);
  return response.data;
}

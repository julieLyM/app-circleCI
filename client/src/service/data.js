import axios from 'axios';

export const sumSrv = async (num1, num2) => {
  const { data } = await axios.post('/api/v1/sum', {
    params: { num1, num2 },
  });
  console.log(data);
  return data;
};

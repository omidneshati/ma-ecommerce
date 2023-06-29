import instance from '@/lib/axios/instance';

const fetchDiscounted = async () => {
  try {
    const result = await instance
      .get('products', { params: { limit: 4 } })
      .then((data) => console.log(data));

    return result;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

export default fetchDiscounted;

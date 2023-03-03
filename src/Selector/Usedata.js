import { useSelector } from 'react-redux';

const useData = () => {
  const data = useSelector((state) => state.data);
  return data;
};

export default useData;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Erreur = () => {
  const error = useSelector((state) => state.error);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return <ToastContainer theme="black" position="top-center" />;
};

export default Erreur;

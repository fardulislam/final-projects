import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiossecure = () => {
  const { user , signout } = useAuth();
  const navigate = useNavigate()
  // intercept //
  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
    // interceptor response //
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        const statusCode = error.status;
        if(statusCode=== 401 || statusCode === 403){
            signout()
            .then(()=>{
                navigate('/signin')
            })
        } 

        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user , signout , navigate]);
  return axiosSecure;
};

export default useAxiossecure;

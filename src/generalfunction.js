import axios from "axios";
import { useEffect, useState } from "react";

export const isEmpty = (value) => {
  if (value === undefined || value === null || value?.length === 0) {
    return true
  }
  else {
    return false
  }
}
export const googlemapapikey = "AIzaSyBb4tKYYFZpXBdaaKbVvEIFfEFy4SdjcRg"


export const fetchImage = async (imageUrl) => {
  const res = await fetch(imageUrl);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  return (imageObjectURL);
};
export const baseURL = "https://gym-api-3r8c.onrender.com/";

//  export const baseURL="http://10.5.50.213:8000/";
//  export const baseURL="http://10.5.50.208:8000/";
export const API = axios.create({
  baseURL: `${baseURL}`,
});


export const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (error) {
    console.log("error", error)
    return Promise.reject(error);
  }
);



export const convertfirstletter = (string) => {

  let str = string?.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter?.toUpperCase();
  });
  return str
}


export const getDistanceOneToOne = async (lat1, lng1, lat2, lng2) => {
  let body = {
    lat1: lat1,
    lng1: lng1,
    lat2: lat2.toString(),
    lng2: lng2.toString()
  }

  let response=await axios.post('http://65.2.169.102:8000/v.1.0/googlemap', body)
  return response
}


export const calculateDistance = (lattitude1, longittude1, lattitude2, longittude2) => {

  const toRadian = n => (n * Math.PI) / 180

  let lat2 = lattitude2
  let lon2 = longittude2
  let lat1 = lattitude1
  let lon1 = longittude1

  console.log(lat1, lon1 + "===" + lat2, lon2)
  let R = 6371  // km
  let x1 = lat2 - lat1
  let dLat = toRadian(x1)
  let x2 = lon2 - lon1
  let dLon = toRadian(x2)
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c
  console.log("distance==?", d)
  return d
}


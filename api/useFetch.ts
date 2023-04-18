import axios from "axios";
import { useState, useEffect } from "react";
const base_url = "http://10.0.2.2:8080/api";
const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const postUser = async (mobile_id: string, nickname: string) => {
  const res = await axios({
    method: "post",
    url: base_url + "/users/AddUser",
    headers: headers.headers,
    data: {
      mobile_id: mobile_id,
      nickname: nickname,
    },
  });
  return res;
};

export const auth2 = async (mobile_id: string) => {
  const res = await axios({
    method: "get",
    url: base_url + "/auth/" + mobile_id,
    headers: headers.headers,
  });
  return res;
};

export const postMatch = async (n_cards: number) => {
  const res = await axios({
    method: "post",
    url: base_url + "/matches/addMatch",
    headers: headers.headers,
    data: {
      n_cards: n_cards,
    },
  });

  return res;
};

export const startGame = (match_id: number) => {
  const res = axios({
    method: "get",
    url: "http://10.0.2.2:8080/start_game/" + match_id,
    headers: headers.headers,
  });
};

export const getMatches = async () => {
  const res = await axios({
    method: "get",
    url: base_url + "/matches/pending",
    headers: headers.headers,
  });
  //console.log(res.data.data);
  return res;
};

export const joinMatch = async (user_id: string, match_id: number) => {
  const res = await axios({
    method: "post",
    url: base_url + "/cards/joinGame",
    headers: headers.headers,
    data: {
      user_id: user_id,
      match_id: match_id,
    },
  });
  return res;
};

export const ready = async (match_id: number) => {
  const res = await axios({
    method: "get",
    url: base_url + "/users/ready/" + match_id,
    headers: headers.headers,
  });
  return res;
};

export const exit = async (match_id: number) => {
  const res = await axios({
    method: "get",
    url: base_url + "/users/exit/" + match_id,
    headers: headers.headers,
  });
  return res;
};

export const getNumber = async (match_id: number) => {
  const res = await axios({
    method: "get",
    url: base_url + "/matches/getNumber/" + match_id,
    headers: headers.headers,
  });
  return res;
};

export const getCinquina = async (user_id: string, match_id: number) => {
  const res = await axios({
    method: "put",
    url: base_url + "/matches/checkFive",
    headers: headers.headers,
    data: {
      user_id: user_id,
      match_id: match_id,
    },
  });
  return res;
};

export const getBingo = async (user_id: string, match_id: number) => {
  const res = await axios({
    method: "put",
    url: base_url + "/matches/checkBingo",
    headers: headers.headers,
    data: {
      user_id: user_id,
      match_id: match_id,
    },
  });
  return res;
};

export const getMatch = async (match_id: number) => {
  const res = await axios({
    method: "get",
    url: base_url + "/match/" + match_id,
    headers: headers.headers,
  });
  return res;
};

export const getUsers = async () => {
  const res = await axios({
    method: "get",
    url: base_url + "/users",
    headers: headers.headers,
  });
  //console.log(res.data.data);
  return res;
};

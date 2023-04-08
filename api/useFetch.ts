import axios from "axios";
import { useState, useEffect } from "react";
import { base_url, headers } from "../App";

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

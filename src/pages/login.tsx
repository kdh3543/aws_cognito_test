import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import userPool from "@/userPool";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

export default function Login() {
  const [loginData, setVerifyData] = useState({
    loginId: "",
    loginPw: "",
  });

  const inputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setVerifyData((prev) => ({ ...prev, [name]: value }));
    console.log(loginData);
  };

  const onLogin = () => {
    const userData = {
      Username: loginData.loginId,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    const authDetails = new AuthenticationDetails({
      Username: loginData.loginId,
      Password: loginData.loginPw,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: function (result: any) {
        console.log(result);
      },
      onFailure: function (err) {
        console.log(err);
      },
    });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.title}>{"로그인"}</div>
          <div className={styles.formBox}>
            <div className={styles.idBox}>
              <p>{"아이디: "}</p>
              <input
                name="loginId"
                onChange={(e) => inputData(e)}
                type="text"
              />
            </div>
            <div className={styles.pwBox}>
              <p>{"비밀번호: "}</p>
              <input
                name="loginPw"
                onChange={(e) => inputData(e)}
                type="text"
              />
            </div>
            <button onClick={onLogin} className={styles.button}>
              {"로그인"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
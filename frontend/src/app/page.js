// クライアントレンダリングに必要なおまじない
"use client"

import axios from "axios";

export default function Home() {


  function handleClick() {
    axios.get("http://localhost:3000")
    .then(function (response) {
      // リクエスト成功時の処理を記述
      console.log(response.data);
    })
    .catch(function (error) {
      // リクエスト失敗時の処理を記述
      console.log(error);
    })
    .finally(function () {
      // 必ず実行される処理を記述
    });
  }


  return (
    <>
      <button onClick={handleClick}>test</button>
    </>
  );
}

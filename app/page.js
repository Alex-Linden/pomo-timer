//A pomodoro timer that counts down from 25 minutes
//The countdown is displayed in the format mm:ss
//The countdown is updated every second
//The countdown is stopped when it reaches 00:00
import Timer from './components/timer.js';
import React,{useState} from 'react';


export default function Home({ Component, pageProps }) {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <Timer minutes={25} />

    </div>
  );
}



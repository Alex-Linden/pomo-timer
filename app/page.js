//A pomodoro timer that counts down from 25 minutes
//The countdown is displayed in the format mm:ss
//The countdown is updated every second
//The countdown is stopped when it reaches 00:00

export default function Home() {
  return (
    <>
      <span className="loading loading-spinner loading-lg">
      </span>
      <span className="countdown font-mono text-2xl">
        <span style={{ "--value": 10 }}>25</span>:
        <span style={{ "--value": 24 }}>24</span>
      </span>
    </>
  );
}

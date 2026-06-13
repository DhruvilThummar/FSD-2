import { useEffect, useState } from "react";

function Clock() {
  const [date, setData] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setData(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h3>
        Time Using Localstring - {date.toLocaleTimeString()}
        <br />
        Hour: {date.getHours()}
        <br />
        Min : {date.getMinutes()}
        <br />
        Sec : {date.getSeconds()}
      </h3>
      <div
        style={{
          color: "#c084fc;",
          border: "2px solid  #aa3bff85",
          padding: " 5px 160px",
          borderRadius: "10px",
          transition: 'border-color 0.3s',
          margin: '24px',
          
        }}
      >
        <h1>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </h1>
      </div>
    </div>
  );
}

export default Clock;

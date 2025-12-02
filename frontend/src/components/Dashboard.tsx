import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

interface AnalyticsType {
  ip: string;
  page: string;
  browser: string;
  device: string;
  timestamp: string;
}

export default function Dashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then(res => res.json())
      .then(data => setAnalytics(data));

    socket.on("analytics-update", (data) => {
      setAnalytics(prev => [data, ...prev]);
    });
  }, []);

  return (
    <div>
      <h1>Real-Time Analytics</h1>
      {analytics.map((item, index) => (
        <div key={index}>
          <p>{item.ip} - {item.page} - {item.browser}</p>
        </div>
      ))}
    </div>
  );
}

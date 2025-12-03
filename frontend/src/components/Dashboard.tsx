import React, { useEffect, useState } from 'react';
import { fetchRecent, postEvent } from '../api/analytics.api';
import socket from '../sockets/socket';

type EventType = {
  _id: string;
  eventType: string;
  metadata: any;
  createdAt: string;
};

export const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchRecent().then(res => setEvents(res.data.data)).catch(console.error);

    socket.on('analytics:new_event', (payload: EventType) => {
      setEvents(prev => [payload, ...prev].slice(0, 100));
    });

    return () => { socket.off('analytics:new_event'); };
  }, []);

  const sendTest = async () => {
    if (!msg) return;
    await postEvent({ eventType: 'test_click', metadata: { text: msg } });
    setMsg('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Realtime Analytics Dashboard</h2>

      <div style={{ marginBottom: 16 }}>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="message" />
        <button onClick={sendTest}>Send event</button>
      </div>

      <ul>
        {events.map(ev => (
          <li key={ev._id}>{new Date(ev.createdAt).toLocaleString()} — {ev.eventType} — {JSON.stringify(ev.metadata)}</li>
        ))}
      </ul>
    </div>
  );
};

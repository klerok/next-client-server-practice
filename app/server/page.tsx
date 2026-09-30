export default async function Server() {
  const time = new Date().toISOString();
  return (
    <div>
      <h1>Server Component Time</h1>
      <p>Время на сервере: {time}</p>
    </div>
  );
}

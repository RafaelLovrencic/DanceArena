import {useState, useEffect} from 'react';

export default function Naslovnica() {
  const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('https://dancearena-devtrak-backend.onrender.com')
            .then(response => response.text())
            .then(data => setUserData(data));
    }, []);
  return (
  <>
    <h1>Naslovnica</h1>
    <p>{userData}</p>
  </>
  )
}

import { Link } from '@remix-run/react';

export default function ChungusRoute() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'Bungee Spice, sans-serif',
          color: 'pink',
          lineHeight: '1.4',
        }}
      >
        Chungus is Among Us.
      </h1>

      <p
        style={{
          fontFamily: 'ASAP, sans-serif',
          fontWeight: '800',
          color: 'black',
          lineHeight: '1.4',
        }}
      >
        Damn Son, Shut The Fuck Up!
      </p>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link to="./butt">bungus mcbutt</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

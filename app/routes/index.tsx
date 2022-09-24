import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'Bungee Spice, sans-serif',
          color: 'pink',
          lineHeight: '1.4',
        }}
      >
        Brando is the Mando
      </h1>

      <p
        style={{
          fontFamily: 'ASAP, sans-serif',
          fontWeight: '800',
          color: 'black',
          lineHeight: '1.4',
        }}
      >
        Damn Son, Where'd Ya Find This (font)??
      </p>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link to="/chungus">chungus</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

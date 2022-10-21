import { Link } from '@remix-run/react';

export default function FarfRoute() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'Bungee Spice, sans-serif',
          color: 'pink',
          lineHeight: '1.4',
        }}
      >
        farfegnugen The German word for "Driving Pleasure."
      </h1>

      <p
        style={{
          fontFamily: 'ASAP, sans-serif',
          fontWeight: '800',
          color: 'black',
          lineHeight: '1.4',
        }}
      >
        Use the __ thing!
      </p>
      <div>
        <ul style={{ listStyle: 'none' }}>
          <li className="link">
            <Link
              className="link"
              style={{ textDecoration: 'none', color: 'black' }}
              to="/"
            >
              back
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

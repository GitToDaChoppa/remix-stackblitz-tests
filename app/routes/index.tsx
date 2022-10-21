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
        This is a playground for my Remix farfegnugens...
      </p>
      <p>
        ...but it's time to add mofoin' Tailwind because this LinksFunction b.s.
        ain't f'n workin!!!!!!!!!!
      </p>
      <div>
        <h4 style={{ margin: '0 0 0 0' }}> LANKS BUHLOW</h4>
        👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            gap: '4px',
            backgroundColor: 'gray',
            color: 'white',
            marginTop: '12px',
          }}
        >
          <li className="link">
            <Link
              className="link"
              to="/chungus"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              chungus
            </Link>
          </li>
          |
          <li className="link">
            <Link
              className="link"
              to="/farfegnugen"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              farf
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

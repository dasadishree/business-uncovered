import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#blog">Blog</Link></li>
        <li><Link href="#chronicles">Business Chronicles</Link></li>
        <li><Link href="#future">The Future</Link></li>
        <li>
          <a
            href="https://www.instagram.com/business_uuncovered/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Business Uncovered Instagram"
            className="footer-instagram"
          >
            <span aria-hidden="true" className="footer-instagram-icon">
              <svg viewBox="0 0 24 24" role="img">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </span>
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

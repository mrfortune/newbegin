'use client';

import Link from 'next/link';
import Image from 'next/image';

const myLoader = ({ src }: { src: string }) => {
  return src;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="grid gap-4 grid-cols-12  mx-auto justify-between max-w-screen-2xl">
        <div className="flex flex-col col-span-4">
          <Link href="/">
           
          </Link>
          <ul className="flex space-x-4 mt-4">
            <li>
              <Link href="http://linkedin.com/in/robertsharris">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.268c.878-.878 2.122-1.268 3.5-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.851.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.851s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.851-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.418.27-3.291 1.143-.873.873-1.084 2.01-1.143 3.291-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.27 2.418 1.143 3.291.873.873 2.01 1.084 3.291 1.143 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.418-.27 3.291-1.143.873-.873 1.084-2.01 1.143-3.291.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.27-2.418-1.143-3.291-.873-.873-2.01-1.084-3.291-1.143-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col  col-span-2">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/story">Story</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col col-span-2">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link href="http://www.adobe.com">Adobe</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">OpenAI</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">ChatGPT</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">Figma</Link>
            </li>
            <li>
              <Link href="https://www.framer.com/motion">Framer Motion</Link>
            </li>
            <li>
              <Link href="https://m3.material.io">Material</Link>
            </li>
            <li>
              <Link href="http://www.figma.com">Midjourney</Link>
            </li>
            <li>
              <Link href="https://nextjs.org/">Next.js</Link>
            </li>
            <li>
              <Link href="https://react.dev/">React</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col col-span-2">
          <h4>Partners</h4>
          <ul>
            <li>
              <Link href="https://ionblade.com/">IONBLADE</Link>
            </li>
            <li>
              <Link href="https://www.godaddy.com/">GoDaddy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col col-span-2">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400" style={{ fontSize: 'clamp(0.5rem, 1vw + 0.25rem, 0.75rem)' }}>
        &copy; 2025 Worldshaker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
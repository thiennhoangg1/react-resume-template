import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import type { AppProps } from 'next/app';
import { memo } from 'react';
import CursorTracker from '../components/Sections/CursorTracker';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="bg-white text-black transition-all duration-500">
      <CursorTracker />
      <Component {...pageProps} />
    </div>
  );
});

export default MyApp;

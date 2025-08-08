import './globals.css';
import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Architecture React Base',
  description: 'Starter project'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

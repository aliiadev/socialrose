import dynamic from 'next/dynamic';
import React from 'react';
import { SFooter } from './SFooter';

const SHeader = dynamic(() => import('./SHeader').then((mod) => mod.SHeader), { ssr: false });

function SLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SHeader />
      <main className="p-4">
        {children}
      </main>
      <SFooter />
    </>
  );
}

export { SLayout };

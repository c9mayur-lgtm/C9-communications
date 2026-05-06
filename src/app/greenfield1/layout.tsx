import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Greenfield Office Setup | One Partner, Day One Ready | C9 Communications',
  description:
    'Opening a new office or launching a new site? C9 Communications designs, deploys, and manages your entire technology environment — internet, phones, network, security, and support — before day one.',
};

export default function Greenfield1Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

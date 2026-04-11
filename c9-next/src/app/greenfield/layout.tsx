import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Greenfield Business Setup | C9 Communications',
  description:
    'Starting a new office, shop, or showroom? C9 sets up your IT, internet, phones, devices, security and workplace as one system — delivered before day one.',
};

export default function GreenfieldLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

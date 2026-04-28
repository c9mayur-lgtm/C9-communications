import { Metadata } from 'next';
import SecureRemoteWorkContent from './SecureRemoteWorkContent';

export const metadata: Metadata = {
  title: 'Secure Remote Work Solutions | Managed Hybrid Workforce IT | C9 Communications',
  description: 'Position your business for secure, scalable remote work. C9 delivers managed endpoint security, identity protection (MFA/Conditional Access), and 24/7 AU-based engineering support for distributed teams.',
  keywords: 'secure remote work solutions, managed remote workforce solutions, remote work IT support, secure hybrid work environment, managed endpoint security, remote workforce cybersecurity, Microsoft 365 managed services, endpoint management services, AU managed IT support',
};

export default function SecureRemoteWorkPage() {
  return <SecureRemoteWorkContent />;
}

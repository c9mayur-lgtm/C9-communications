import { Metadata } from 'next';

const INSIGHTS_META: Record<string, { title: string; description: string }> = {
  'state-of-australian-it-2026': {
    title: 'State of Australian IT 2026 | Managed Cloud Strategy',
    description: 'Learn why Australian mid-market firms are shifting to fully managed infrastructure to reduce hardware debt and operational drag.',
  },
  'scaling-network-architecture': {
    title: 'Scaling Network Architecture for 2026 | Multi-Site IT',
    description: 'Solving lag and security challenges for distributed workforces with SD-WAN and unified network command.',
  },
  'ceo-security-governance': {
    title: 'CEO Guide to Managed Security Governance | Essential Eight',
    description: 'A technical deep-dive into the Essential Eight and why cybersecurity is an operational discipline, not a product.',
  },
  'onshore-soc-benefits': {
    title: 'Onshore SOC Benefits for Australian Enterprise | C9',
    description: 'Why local security monitoring and response matters for data sovereignty and compliance.',
  },
  'modern-workplace-control': {
    title: 'Modern Workplace Strategy | Beyond Microsoft 365',
    description: 'The next frontier of business productivity: controlling the user environment for a consistent, secure experience.',
  },
  'set-and-forget-myth': {
    title: 'The Myth of "Set and Forget" IT | Operational Discipline',
    description: 'Why continuous governance and operational discipline are the only ways to maintain infrastructure stability.',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = INSIGHTS_META[params.slug];
  
  return {
    title: meta?.title || 'Industry Insight | C9 Communications',
    description: meta?.description || 'Strategic analysis on IT, network architecture, and security governance.',
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      type: 'article',
      url: `https://c9communications.com.au/insights/${params.slug}`,
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

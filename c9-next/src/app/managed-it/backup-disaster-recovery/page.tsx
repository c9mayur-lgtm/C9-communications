import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { WpFooter as Footer } from '@/components/layout/WpFooter'
import { WpFAQAndFeedback } from '@/components/wordpress/WpFAQAndFeedback'
import { WpConsultationForm } from '@/components/wordpress/WpConsultationForm'
import Hero from '@/components/sections/backup/Hero'
import Recognition from '@/components/sections/backup/Recognition'
import RTOExplainer from '@/components/sections/backup/RTOExplainer'
import WhatWeManage from '@/components/sections/backup/WhatWeManage'
import TestingCommitment from '@/components/sections/backup/TestingCommitment'
import DefenseBridge from '@/components/sections/backup/DefenseBridge'
import FAQ from '@/components/sections/backup/FAQ'
import FinalCTA from '@/components/sections/backup/FinalCTA'

const BACKUP_FAQS = [
  {
    q: 'What is the difference between backup and disaster recovery?',
    a: 'Backup is the process of copying your data to a safe location. Disaster recovery is the process of restoring your business operations after an incident — using that backup. Backup without a tested recovery plan is incomplete. C9 manages both.',
  },
  {
    q: 'How do I know my backups are actually working?',
    a: "You don't — unless they are tested. C9 performs scheduled recovery tests on your backup environment and provides a written test report each time. If a backup is failing or an issue is found during testing, you know about it before an incident — not during one.",
  },
  {
    q: 'What is ransomware-resistant backup and do I need it?',
    a: 'Standard backup can be encrypted by ransomware — leaving you with no clean recovery point. Ransomware-resistant backup uses immutable storage — data that cannot be modified or deleted once written, regardless of what happens to your primary environment. C9 includes immutable backup for clients with ransomware exposure.',
  },
  {
    q: 'How long would it take to recover from a ransomware attack?',
    a: 'Recovery time depends on the scope of the attack and the state of your backup environment. With a current, tested backup and a documented DR plan, most businesses can be operational within hours. Without these, recovery can take days — or may not be possible at all. Your RTO is defined in your agreement with C9.',
  },
  {
    q: 'Is backup and DR included in Managed IT or separate?',
    a: 'Managed backup is included in every C9 Managed IT engagement. Disaster recovery planning, ransomware-resistant storage, and formal recovery testing are scoped based on your environment and risk profile. Your account manager will walk through the options.',
  },
  {
    q: 'What does C9 Defense add to backup and recovery?',
    a: 'C9 Defense adds Recovery Assurance as a formal program — tested recovery with documented evidence, aligned to the ACSC Essential 8 framework. This is specifically designed for organisations that need to demonstrate their recovery capability to auditors, insurers, or boards.',
  },
]

export const metadata = {
  title: 'Backup & Disaster Recovery | Managed IT | C9 Communications',
  description:
    'C9 manages backup, disaster recovery, and business continuity for Australian businesses — with tested recovery procedures, defined RTOs, and ransomware-resistant storage.',
  openGraph: {
    title: 'Backup & Disaster Recovery | C9 Communications',
    description:
      'Managed backup with tested recovery. Defined RTO and RPO. Ransomware-resistant storage. Australian team.',
    url: 'https://c9communications.com.au/managed-it/backup-disaster-recovery',
  },
}

export default function BackupDRPage() {
  return (
    <main className="font-sans" style={{ fontFamily: '"Proxima Nova", sans-serif' }}>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <Recognition />
      <RTOExplainer />
      <WhatWeManage />
      <TestingCommitment />
      <DefenseBridge />
      <FAQ />
      <FinalCTA />
      <WpFAQAndFeedback faqItems={BACKUP_FAQS} showTestimonials={true} showFAQ={false} />
      <WpConsultationForm
        showHeader={false}
        eyebrow="BACKUP ASSESSMENT"
        title="Find out if your backup would actually save you."
        description="A C9 backup assessment reviews your current environment — what's being backed up, how often, where it's stored, and whether recovery has ever been tested. No obligation. Plain language report."
        formTitle="Request a Backup Assessment"
      />
      <Footer />
    </main>
  )
}

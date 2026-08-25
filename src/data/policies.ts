export type PolicySection = {
  heading: string;
  body: string[];
};

export type Policy = {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
  documentUrl?: string;
  documentLabel?: string;
};

export const policies: Policy[] = [
  {
    slug: 'statutory-disclosure',
    title: 'Statutory Disclosure',
    subtitle: 'Regulatory information as required by the Financial Advisory and Intermediary Services Act (FAIS)',
    lastUpdated: 'August 2026',
    documentUrl: '/Statutory_Disclosure_Notice.docx',
    documentLabel: 'Statutory Disclosure Notice',
    intro:
      'Black Swan Insurance Brokers is a registered financial services provider. In accordance with the Financial Advisory and Intermediary Services Act (Act 37 of 2002), we are required to provide clients with the following statutory disclosure.',
    sections: [
      {
        heading: 'Company Details',
        body: [
          'Black Swan Insurance Brokers (Pty) Ltd is a juristic representative authorised to render financial services in terms of the FAIS Act.',
          'Company registration number: [To be supplied]',
          'FSP number: [To be supplied]',
          'Registered address: Unit F1, Westlake Square, Westlake Drive, Westlake, 7945, South Africa.',
        ],
      },
      {
        heading: 'Services Rendered',
        body: [
          'We are authorised to render financial advisory and intermediary services in respect of short-term insurance products and long-term insurance products as categorised under the FAIS Act.',
          'Our services include needs analysis, product recommendation, placement of cover with insurers, ongoing review of cover, and assistance with claims.',
        ],
      },
      {
        heading: 'Professional Indemnity and Compliance',
        body: [
          'We carry professional indemnity cover as required by the FAIS Act and comply with the General Code of Conduct for Authorised Financial Services Providers and Representatives.',
          'We are subject to the jurisdiction of the Financial Sector Conduct Authority (FSCA) and the Ombud for Financial Services Providers (FAIS Ombud).',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your personal information',
    lastUpdated: 'August 2026',
    documentUrl: '/PRIVACY_POLICY.docx',
    documentLabel: 'Privacy Policy',
    intro:
      'This Privacy Policy explains how Black Swan Insurance Brokers collects, processes, and safeguards your personal information in compliance with the Protection of Personal Information Act (POPIA) and the General Data Protection Regulation (GDPR) where applicable.',
    sections: [
      {
        heading: 'Information We Collect',
        body: [
          'Personal information you provide directly: name, contact details, identity number, and information relevant to the insurance products you enquire about.',
          'Information collected automatically: IP address, browser type, and usage data when you visit our website.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        body: [
          'To provide insurance advisory and intermediary services, including obtaining quotations and placing cover.',
          'To communicate with you about your policy, claims, and related matters.',
          'To comply with legal and regulatory obligations.',
        ],
      },
      {
        heading: 'Sharing of Information',
        body: [
          'We may share your personal information with insurers, reinsurers, and other third parties necessary to provide the services you have requested.',
          'We do not sell your personal information to third parties.',
        ],
      },
      {
        heading: 'Data Security',
        body: [
          'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or destruction.',
          'Access to personal information is restricted to authorised personnel who require it to perform their duties.',
        ],
      },
      {
        heading: 'Your Rights',
        body: [
          'You have the right to access, correct, or request deletion of your personal information, subject to legal and regulatory retention requirements.',
          'To exercise these rights, contact us using the details on our Contact page.',
        ],
      },
    ],
  },
  {
    slug: 'paia-manual',
    title: 'PAIA Manual',
    subtitle: 'Promotion of Access to Information Act (Act 2 of 2000) — Section 51 Manual',
    lastUpdated: 'August 2026',
    documentUrl: '/PAIA_MANUAL.docx',
    documentLabel: 'PAIA Manual',
    intro:
      'This manual is published in accordance with Section 51 of the Promotion of Access to Information Act (PAIA), Act 2 of 2000, and sets out how to request access to records held by Black Swan Insurance Brokers.',
    sections: [
      {
        heading: 'Purpose of the Manual',
        body: [
          'The manual informs requesters of the procedure to be followed when requesting access to records held by Black Swan Insurance Brokers, the categories of records available, and the grounds on which access may be refused.',
        ],
      },
      {
        heading: 'Information Officer',
        body: [
          'Requests for access to information must be directed to the Information Officer.',
          'Information Officer: [To be supplied]',
          'Email: info@blackswaninsurance.co.za',
          'Address: Unit F1, Westlake Square, Westlake Drive, Westlake, 7945, South Africa.',
        ],
      },
      {
        heading: 'How to Request Access',
        body: [
          'A request must be made in writing on the prescribed form (Form C) and must contain sufficient particulars to identify the record requested and the requester.',
          'The prescribed fee, if applicable, must be paid before a request is processed.',
        ],
      },
      {
        heading: 'Records Available',
        body: [
          'Records that are automatically available without a PAIA request include marketing materials and this PAIA manual.',
          'Other records may be requested subject to the grounds of refusal set out in PAIA.',
        ],
      },
    ],
  },
  {
    slug: 'conflict-of-interest-policy',
    title: 'Conflict of Interest Policy',
    subtitle: 'How we identify, manage, and disclose conflicts of interest',
    lastUpdated: 'August 2026',
    documentUrl: '/CONFLICT_OF_INTEREST_MANAGEMENT_POLICY.docx',
    documentLabel: 'Conflict of Interest Management Policy',
    intro:
      'This Conflict of Interest Policy describes how Black Swan Insurance Brokers identifies, manages, and discloses actual or potential conflicts of interest in accordance with the General Code of Conduct under the FAIS Act.',
    sections: [
      {
        heading: 'Definition',
        body: [
          'A conflict of interest arises when a financial services provider or representative has an actual or potential interest that may, in providing a financial service, influence the objective rendering of that service.',
        ],
      },
      {
        heading: 'Identification and Management',
        body: [
          'We identify conflicts of interest that may arise in the course of providing financial services and take reasonable steps to avoid, mitigate, or manage them.',
          'Where a conflict cannot be avoided, we disclose it to clients in a timely and transparent manner.',
        ],
      },
      {
        heading: 'Inducements',
        body: [
          'We do not offer or accept any inducement that is not compliant with the FAIS Act and the General Code of Conduct.',
          'Any immaterial benefit received or offered is recorded in our register of immaterial benefits and is available for inspection by the FSCA.',
        ],
      },
      {
        heading: 'Disclosure',
        body: [
          'Where a conflict of interest exists, we will disclose the nature of the conflict, the measures taken to manage it, and any potential impact on the client before providing the relevant service.',
        ],
      },
    ],
  },
  {
    slug: 'complaints-procedure',
    title: 'Complaints Procedure',
    subtitle: 'How to raise a complaint and how we resolve it',
    lastUpdated: 'August 2026',
    documentUrl: '/TREATING_CUSTOMERS_FAIRLY_&_COMPLAINTS_PROCEDURE.docx',
    documentLabel: 'Treating Customers Fairly & Complaints Procedure',
    intro:
      'Black Swan Insurance Brokers is committed to resolving complaints fairly, promptly, and transparently. This procedure sets out how to lodge a complaint and how we will handle it.',
    sections: [
      {
        heading: 'How to Lodge a Complaint',
        body: [
          'Complaints may be submitted in writing to info@blackswaninsurance.co.za or by telephone to +27 21 701 9989.',
          'Please provide your full name, contact details, the nature of the complaint, and any relevant dates or reference numbers.',
        ],
      },
      {
        heading: 'Acknowledgement and Investigation',
        body: [
          'We will acknowledge receipt of your complaint within three business days.',
          'A representative will investigate the complaint and may contact you for further information.',
        ],
      },
      {
        heading: 'Resolution',
        body: [
          'We aim to resolve complaints within 14 business days of receipt. Where this is not possible, we will inform you of the expected timeline and reasons for the delay.',
          'You will receive a written response outlining the outcome of the investigation and any remedial action.',
        ],
      },
      {
        heading: 'Escalation',
        body: [
          'If you are not satisfied with our response, you may refer the matter to the FAIS Ombud.',
          'FAIS Ombud: 012 762 1320 / info@faisombud.co.za / www.faisombud.co.za',
        ],
      },
    ],
  },
];

export const policyFooterLinks = policies.map((p) => ({
  label: p.title,
  slug: p.slug,
}));

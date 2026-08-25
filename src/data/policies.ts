export type PolicySection = {
  heading: string;
  body: string[];
};

export type Policy = {
  slug: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  intro?: string;
  sections: PolicySection[];
  documentUrl?: string;
  documentLabel?: string;
  footerLabel?: string;
};

export const policies: Policy[] = [
  {
    slug: 'statutory-disclosure',
    title: 'Statutory Disclosure Notice',
    subtitle: 'Mandatory Disclosure in terms of the Financial Advisory and Intermediary Services (FAIS) General Code of Conduct',
    lastUpdated: 'August 2026',
    documentUrl: '/Statutory_Disclosure_Notice.docx',
    documentLabel: 'Statutory Disclosure Notice',
    sections: [
      {
        heading: '1. FSP License Status and Profile',
        body: [
          'The Dennis Butlion Organisation CC, trading as Black Swan Insurance Brokers, is an authorised Financial Services Provider, registered under FSP License Number 8231.',
          'A copy of our license certificate is available for inspection at our office or upon request via email.',
          'Physical Address: Unit F1, Westlake Square, Westlake Drive, Westlake, 7945',
          'Postal Address: PO Box 570, Constantia, 7848',
          'Telephone Number: 021 701 9989',
          'Email Address: info@blackswaninsurance.co.za',
          'Website: https://blackswaninsurance.co.za',
        ],
      },
      {
        heading: '2. Authorised Financial Product Categories',
        body: [
          'The FSP is licensed and authorised by the Financial Sector Conduct Authority (FSCA) to render financial advisory and intermediary services in respect of the following lines of business:',
          'Category I - Short-Term Insurance: Commercial Lines: Commercial Lines Short-Term Insurance (e.g., Business Assets, Liability, Fleet, and Engineering risk management).',
          'Category I - Short-Term Insurance: Personal Lines: Personal Lines Short-Term Insurance (e.g., Personal Motor, Homeowners, Householders, and All Risks protection).',
          'Category I - Long-Term Insurance: Subcategory B1 and/or B2: Long-Term Insurance (e.g., Life Assurance, Risk Protection, Disability Cover, Severe Illness, and Funeral Cover).',
          'Category I - Health Service Benefits: Medical Schemes and Health Intermediary Services (e.g., Corporate and Individual Medical Aid, Gap Cover, and Primary Health plans).',
          'Our authorised Key Individuals (KIs) and Representatives are duly registered and meet the fit and proper requirements, including qualifications, experience, and regulatory exams prescribed by the FAIS Act.',
        ],
      },
      {
        heading: '3. Intermediary Status and Independence',
        body: [
          'We operate strictly as an independent brokerage, offering solutions from multiple licensed insurers. This ensures that our advice remains objective and tailored directly to your risk profile. For total transparency, we confirm the following structural matters:',
          'No Shareholding: We do not hold, directly or indirectly, more than 10% of the shares or voting rights in any insurance product supplier or insurer.',
          'Remuneration Diversification: We do not receive more than 30% of our total brokerage remuneration from any single insurance product supplier or insurer over any given 12-month cycle.',
          'Professional Indemnity Cover: We maintain comprehensive Professional Indemnity (PI) Insurance cover and Fidelity Guarantee insurance, providing protection against administrative error or financial omissions as mandated under the FAIS Act.',
        ],
      },
      {
        heading: '4. Professional Fees and Remuneration',
        body: [
          'As an independent intermediary, we are compensated through statutory commission paid by product suppliers (insurers) which is built into your premium layout, and/or via professional binder or broker fees where explicitly agreed upon.',
          'Any non-statutory broker fees, admin fees, or advisory fees will always be disclosed upfront, itemised on your quotation, and require your explicit, written consent prior to deduction.',
        ],
      },
      {
        heading: '5. Conflict of Interest Management',
        body: [
          'We maintain a comprehensive Conflict of Interest Management Policy in strict compliance with the FAIS General Code of Conduct. Our staff are prohibited from accepting financial incentives, non-cash considerations, or soft-brokerage perks that compromise our duty to clients.',
          'A full copy of our Conflict of Interest Management Policy is available directly on our website or upon request from our compliance office.',
        ],
      },
      {
        heading: '6. Complaints Procedure and Dispute Resolution',
        body: [
          'We are committed to the principle of Treating Customers Fairly (TCF). Should you feel dissatisfied with our advisory or intermediary services, you may lodge a formal complaint following our standard procedure:',
          'Please submit your complaint in writing to our internal resolution department at complaints@blackswaninsurance.co.za.',
          'We will acknowledge receipt of your complaint within 3 working days and provide an estimated resolution timeframe.',
          'If the matter requires deeper investigation, we aim to provide a final substantive response within 21 working days. If we cannot resolve the dispute internally within 6 weeks, or if you remain dissatisfied with our outcome, you have the right to escalate the matter to the relevant Ombud within 6 months.',
        ],
      },
      {
        heading: '7. Statutory Ombud Office Details',
        body: [
          'For short-term, long-term, and medical aid administrative disputes:',
          'Ombud Name: National Financial Ombudsman Scheme South Africa (NFO)',
          'Physical Address: 110 Oxford Road, Rosebank, Johannesburg, 2196',
          'Sharecall Telephone: 0860 800 900',
          'Email Contact: info@nfosa.co.za',
          'Website: www.nfosa.co.za',
          'For disputes specifically involving the advice provided by our FSP, or the financial planning process:',
          'Ombud Name: Office of the FAIS Ombud',
          'Physical Address: Menlyn Central Office Building, 125 Fiddlewood Street, Menlyn, Pretoria, 0081',
          'Postal Address: P.O. Box 41, Menlyn Park, 0063',
          'Telephone Number: +27 12 762 5000 / +27 86 066 3284',
          'Email Contact: info@faisombud.co.za',
          'Website: www.faisombud.co.za',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, store, and safeguard your personal information',
    lastUpdated: 'August 2026',
    documentUrl: '/PRIVACY_POLICY.docx',
    documentLabel: 'Privacy Policy',
    sections: [
      {
        heading: 'Introduction',
        body: [
          "Black Swan Insurance Brokers ('we', 'us', 'our') respects your privacy and is fully committed to protecting your personal information in strict accordance with the Protection of Personal Information Act, No. 4 of 2013 ('POPIA'). This Privacy Policy describes how we collect, use, store, and safeguard your personal data when you visit our website, utilise our insurance brokerage services, or interact with us.",
        ],
      },
      {
        heading: 'Information We Collect',
        body: [
          'To provide effective financial and insurance brokerage services, we collect and process personal information which may include:',
          'Identity Data: Name, identity number or passport number, date of birth, gender, and marital status.',
          'Contact Data: Email address, physical address, postal address, and phone numbers.',
          'Financial Data: Bank account details, financial statements, and premium collection preferences.',
          'Underwriting & Risk Data: Risk details, claims histories, medical history (for life or health policies), asset valuations, and employment details.',
          'Technical & Usage Data: IP addresses, browser type, and tracking information collected via website cookies.',
        ],
      },
      {
        heading: 'Purpose of Processing Personal Information',
        body: [
          'We will only use your personal information for lawful business purposes related to your insurance profile, including:',
          'Performing a financial needs analysis and sourcing quotes from registered product suppliers.',
          'Administering your insurance policies, managing renewals, and facilitating the processing of insurance claims.',
          'Verifying your identity and conducting mandatory anti-money laundering and counter-terrorist financing checks under FICA.',
          'Responding to your enquiries, handling customer support requests, and managing complaints.',
        ],
      },
      {
        heading: 'Disclosure of Personal Information to Third Parties',
        body: [
          'We may share your personal data with third parties strictly to fulfill our services to you or comply with statutory mandates. These include:',
          'Registered Short-term and Long-term Insurers (Product Suppliers) required to underwrite risks and issue policies.',
          'Regulatory bodies, law enforcement agencies, or the Ombud offices where mandated by South African law.',
          'Authorised operators, such as IT hosting providers, cloud storage systems, or compliance consultants operating under strict confidentiality mandates.',
        ],
      },
      {
        heading: 'Information Security',
        body: [
          'We implement robust technical and organisational security measures to protect your personal information from unauthorised access, loss, misuse, or alteration. These measures include secure firewalls, data encryption protocols, restricted access control systems, and routine employee compliance training. In the event of a confirmed data breach, we will notify the Information Regulator and impacted data subjects as required by POPIA.',
        ],
      },
      {
        heading: 'Your Data Subject Rights',
        body: [
          'Under POPIA, you possess the right to:',
          'Request confirmation of whether we hold your personal information and obtain a description of that data.',
          'Request the correction, destruction, or deletion of inaccurate, irrelevant, or outdated information.',
          'Object to the processing of your personal info at any time for direct marketing purposes.',
        ],
      },
    ],
  },
  {
    slug: 'paia-manual',
    title: 'PAIA Manual',
    subtitle: "Prepared in terms of Section 51 of the Promotion of Access to Information Act, No. 2 of 2000 ('PAIA') and incorporating the requirements of the Protection of Personal Information Act, No. 4 of 2013 ('POPIA')",
    lastUpdated: 'August 2026',
    documentUrl: '/PAIA_MANUAL.docx',
    documentLabel: 'PAIA Manual',
    sections: [
      {
        heading: 'Introduction and Purpose',
        body: [
          "This manual exists to ensure that Black Swan Insurance Brokers complies with the South African Constitution's right to access to information held by private bodies, where such information is required for the exercise or protection of any rights. It outlines the types of records held by the FSP and the procedure required for data subjects to request access to these records.",
        ],
      },
      {
        heading: 'Company and Contact Details',
        body: [
          'Registered Name: The Dennis Butlion Organisation CC trading as Black Swan Insurance Brokers',
          'FSP Registration Number: 8231',
          'Physical Address: Unit F1, Westlake Square, Westlake Drive, Westlake, 7945',
          'Postal Address: PO Box 570, Constantia, 7848',
          'Head of Business / Information Officer: Dennis Butlion',
          'Information Officer Email: Dennis Butlion',
          'Contact Number: 021 701 9989',
          'Website: https://blackswaninsurance.co.za',
        ],
      },
      {
        heading: 'Guide on How to Use PAIA',
        body: [
          "The Information Regulator has compiled a guide in each official language on how to exercise your rights under PAIA. This guide is available on the Information Regulator's official website (https://inforegulator.org.za/). Any queries regarding this guide should be directed straight to the Information Regulator.",
        ],
      },
      {
        heading: 'Records Available in Terms of Other Legislation',
        body: [
          'Where applicable, [Insert Brokerage Name] holds records in accordance with the following South African legislation:',
          "Financial Advisory and Intermediary Services Act, No. 37 of 2002 ('FAIS')",
          'Financial Sector Regulation Act, No. 9 of 2017',
          'Short-term Insurance Act, No. 53 of 1998 / Long-term Insurance Act, No. 52 of 1998',
          "Financial Intelligence Centre Act, No. 38 of 2001 ('FICA')",
          'Companies Act, No. 71 of 2008',
          'Income Tax Act, No. 58 of 1962 and Value Added Tax Act, No. 89 of 1991',
          'Basic Conditions of Employment Act, No. 75 of 1997 and Labour Relations Act, No. 66 of 1995',
        ],
      },
      {
        heading: 'Schedule of Records Held by the Brokerage',
        body: [
          'The following categories of records are held by Black Swan Insurance Brokers, though access to them is subject to the formal request process detailed below:',
          'Operational & FAIS Records: FSP licensing documents, regulatory returns, and FAIS compliance officer reports.',
          'Client Records: Client application forms, specific policy schedules, mandates, financial needs analyses, record of advice files, and premium payment histories.',
          'Human Resources: Employment contracts, payroll files, training certificates, Key Individual (KI) and Representative registers, and internal HR policies.',
          'Financial & Accounting Records: Audited financial statements, management accounts, tax returns, and VAT records.',
          'Third-Party Agreements: Service level agreements (SLAs) with product suppliers (Insurers), binder agreements, and general vendor contracts.',
        ],
      },
      {
        heading: 'Procedure to Request Access to Records',
        body: [
          'To request access to a record held by Black Swan Insurance Brokers, the requester must complete Form 2 (Request for Access to Record) as prescribed by the Information Regulator. This form must be submitted to our Information Officer at the email address provided in Section 1.2.',
          'The requester must provide sufficient detail on the form to enable the Information Officer to identify the record and the identity of the requester. The requester must also clearly indicate the rights they seek to protect or exercise and provide an explanation of why the requested record is required for that purpose.',
          'Black Swan Insurance Brokers will process the request within 30 days of receipt and notify the requester of the decision, including any applicable statutory fees that must be paid before access is granted.',
        ],
      },
    ],
  },
  {
    slug: 'conflict-of-interest-policy',
    title: 'Conflict of Interest Management Policy',
    subtitle: 'How we identify, manage, and disclose conflicts of interest under the FAIS General Code of Conduct',
    lastUpdated: 'August 2026',
    documentUrl: '/CONFLICT_OF_INTEREST_MANAGEMENT_POLICY.docx',
    documentLabel: 'Conflict of Interest Management Policy',
    footerLabel: 'Conflict of Interest Policy',
    sections: [
      {
        heading: 'Policy Purpose and Scope',
        body: [
          'In terms of the General Code of Conduct for Authorised Financial Services Providers and Representatives under the FAIS Act, Black Swan Insurance Brokers is legally required to implement, maintain, and ensure an effective conflict of interest management policy. The primary objective is to guarantee that financial services are rendered to clients objectively, independently, and in a manner that explicitly prioritises the client\'s interests above our own.',
        ],
      },
      {
        heading: 'Definition of Conflict of Interest',
        body: [
          'A conflict of interest arises when an actual or potential situation exists where an FSP or a representative has an actual or financial interest that may influence the objectivity of their service to a client, thereby preventing them from rendering unbiased and fair financial advice.',
        ],
      },
      {
        heading: 'Financial Interest Limitations and Prohibitions',
        body: [
          'Black Swan Insurance Brokers and its representatives are strictly permitted to receive or offer only the following financial interests from or to third parties:',
          'Statutory commission authorised under the Short-term or Long-term Insurance Acts.',
          'Fees authorised under the Short-term or Long-term Insurance Acts, provided they are reasonably commensurate with the service rendered.',
          'Fees for rendering a financial service for which commission or fees are not provided for, provided the client has explicitly agreed to it in writing and can stop it at any time.',
          'An immaterial financial interest, defined as any financial interest with a third party that does not exceed an aggregate value of R1 000 in any single calendar year from that same provider.',
        ],
      },
      {
        heading: 'Identification, Mitigation, and Disclosure Mechanisms',
        body: [
          'We proactively manage potential conflicts through the following control mechanisms:',
          'Identification: Our internal compliance officer reviews all intermediary relationships and product provider agreements regularly to identify structural conflicts.',
          'Mitigation: Representatives are strictly trained to avoid any relationship that compromises professional objectivity. If an unavoidable conflict is identified, it must immediately be logged in our Conflict-of-Interest Register.',
          'Disclosure: We will provide complete written disclosures to the client regarding any potential conflict of interest associated with a specific recommended product, including exact commission structures or ownership relationships.',
        ],
      },
    ],
  },
  {
    slug: 'complaints-procedure',
    title: 'Treating Customers Fairly (TCF) & Complaints Procedure',
    subtitle: 'Our commitment to fair treatment and the formal process for lodging complaints',
    lastUpdated: 'August 2026',
    documentUrl: '/TREATING_CUSTOMERS_FAIRLY_&_COMPLAINTS_PROCEDURE.docx',
    documentLabel: 'Treating Customers Fairly & Complaints Procedure',
    footerLabel: 'Complaints Procedure',
    sections: [
      {
        heading: 'Treating Customers Fairly (TCF) Commitment Statement',
        body: [
          'At Black Swan Insurance Brokers, Treating Customers Fairly (TCF) is not just a regulatory obligation required by the Financial Sector Conduct Authority (FSCA); it sits at the absolute core of our business culture. We actively strive to achieve the six TCF outcomes across every stage of our advisory and brokerage interaction:',
          'Outcome 1: Culture – Our clients can be completely confident that they are dealing with an FSP where fair treatment is central to our corporate culture.',
          'Outcome 2: Target Market – Products and services marketed and sold are designed to meet the explicit needs of identified client groups and targeted accordingly.',
          'Outcome 3: Clear Info – Clients are provided with clear, jargon-free information and kept appropriately informed before, during, and after the time of contracting.',
          'Outcome 4: Suitable Advice – Where clients receive advice, the advice is suitable and takes full account of their specific financial circumstances and objectives.',
          'Outcome 5: Performance – Clients are provided with products that perform as we have led them to expect, and the associated service is of an acceptable standard.',
          'Outcome 6: Post-sale Barriers – Clients do not face unreasonable post-sale barriers to change products, switch providers, submit an insurance claim, or lodge a formal complaint.',
        ],
      },
      {
        heading: 'Formal Complaints Procedure',
        body: [
          'If you feel that we have failed to satisfy a TCF outcome or if you are dissatisfied with our insurance brokerage services, you are fully entitled to lodge a formal complaint. Please follow the structured process outlined below:',
        ],
      },
      {
        heading: 'Step 1: Contact the Internal Complaints Function',
        body: [
          'All complaints must be submitted in writing via email to our dedicated email address: complaints@blackswaninsurance.co.za. Please provide your full name, policy details, a clear description of the issue, and any supporting documentation.',
        ],
      },
      {
        heading: 'Step 2: Internal Review and Resolution Acknowledgement',
        body: [
          'We will acknowledge receipt of your written complaint within 3 working days and assign a reference number. The complaint will be routed to a senior manager or designated compliance officer who will thoroughly investigate the circumstances. We aim to provide a formal written resolution within 4 to 6 weeks of receiving your initial complaint.',
        ],
      },
      {
        heading: 'Step 3: Escalation to the Relevant Statutory Ombud',
        body: [
          'If we cannot resolve the dispute to your satisfaction, or if we fail to send you a final response within 6 weeks, you have the right to escalate the matter to the appropriate Ombud office within six months of receiving our final response.',
          'For disputes specifically relating to financial advice or intermediary services provided by this brokerage:',
          'Physical Address: Kasteel Park, Orange Building, 2nd Floor, 546 Jochemus Street, Erasmuskloof, Pretoria, 0181',
          'Telephone: 012 762 5000 / 086 006 6322',
          'Email: info@faisombud.co.za',
          'Website: www.faisombud.co.za',
          'For disputes relating to claims or product performance of long-term or short-term insurance policies, you may contact the National Financial Ombudsman Scheme (NFO):',
          'Physical Address: 110 Oxford Road, Rosebank, Johannesburg, 2196',
          'Telephone: 0860 800 900',
          'Email: info@nfombud.co.za',
          'Website: www.nfombud.co.za',
        ],
      },
    ],
  },
];

export const policyFooterLinks = policies.map((p) => ({
  label: p.footerLabel ?? p.title,
  slug: p.slug,
}));

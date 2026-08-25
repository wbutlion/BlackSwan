export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-your-business-needs-more-than-a-basic-policy',
    title: 'Why Your Business Needs More Than Just a Basic Policy',
    excerpt:
      "Many SME owners underestimate the gaps in their commercial cover until a claim reveals the truth. Here's how a full risk assessment can prevent costly surprises and ensure your business is properly protected at every stage of growth.",
    category: 'Business Insurance',
    readTime: '5 min read',
    date: 'August 2026',
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=700',
    author: 'Black Swan Insurance Brokers',
    authorRole: 'Editorial Team',
    intro:
      'Running a small or medium-sized business in South Africa means wearing many hats — operations, sales, HR, and, somewhere in between, insurance. For most owners, insurance is a grudge purchase: a box to tick so that the bank, the landlord, or the regulator is satisfied. The problem is that a basic policy, chosen on price alone, rarely matches the reality of what your business actually does. When a real loss happens, the gaps in that cover become painfully clear — and by then, it is too late to fix them.',
    sections: [
      {
        heading: 'The illusion of "covered"',
        body: [
          'A standard business owner\'s policy (often called a Business Interruption or Commercial Combined policy) is designed to be a starting point, not a finish line. It will typically cover your buildings, your stock, and your general liability to third parties. What it will not automatically cover are the things that make your business unique: specialist equipment, cyber liability, professional indemnity, loss of a key supplier, or the cost of rebuilding your client database after a data breach.',
          'The phrase "I thought we were covered" is one we hear most often after a claim is declined. In almost every case, the client was covered — but only for the perils and limits listed in the schedule, not for the exposure they actually faced.',
        ],
      },
      {
        heading: 'Where the gaps usually hide',
        body: [
          'Three areas are consistently under-insured in South African SMEs. The first is business interruption. Many policies will cover the loss of profit following a fire, but only for a fixed indemnity period (often 12 months) and only if the damage is to your own premises. If your key supplier burns down and you cannot trade for three months, a basic policy will not respond.',
          'The second is electronic and cyber risk. Almost every modern business relies on software, cloud services, and customer data. A standard policy was written for a world of physical assets; it does not contemplate the cost of a ransomware attack, the legal fees of a data breach, or the reputational damage of telling your clients their information has been compromised.',
          'The third is liability beyond the general. If you give advice, design something, or handle someone else\'s property, you need professional indemnity. If you move goods or people, you need a goods-in-transit or fleet extension. None of these are included in a basic package.',
        ],
      },
      {
        heading: 'What a proper risk assessment looks like',
        body: [
          'A full risk assessment is not a sales exercise. It is a structured conversation about how your business earns money, what would stop it earning, and what it would cost to recover. We start by mapping your revenue streams and the dependencies behind them — suppliers, staff, systems, premises. Then we quantify the maximum probable loss for each dependency and test whether your current policy would respond.',
          'The output is a gap analysis: a clear list of what is covered, what is not, and what the likely financial impact of each gap would be. From there, you can make an informed decision about which gaps to close with insurance and which to accept or mitigate in other ways. The point is not to buy more cover; it is to buy the right cover.',
        ],
      },
      {
        heading: 'The cost of getting it wrong',
        body: [
          'The Insurance Institute of South Africa has reported that a significant proportion of SMEs that suffer a major uninsured loss never trade again. The claim that was never paid is not just a balance-sheet item — it is the wages that cannot be met, the client who goes elsewhere, and the owner who has to start over.',
          'The cost of getting it right, by contrast, is modest. A tailored programme that addresses your real exposures is typically a fraction of the cost of a single uninsured loss, and it gives you something that a cheap policy never can: certainty.',
        ],
      },
      {
        heading: 'Where to start',
        body: [
          'If you have not reviewed your commercial cover in the last 12 months, or if your business has changed — new premises, new services, new staff, new clients — it is time for a fresh assessment. An independent broker is not tied to any one insurer, which means the recommendation is based on your risk profile, not a quota.',
          'Book a no-obligation risk review with our team. We will read your current schedule, identify the gaps, and give you a plain-language summary of what you actually need — and what you do not. No jargon, no pressure, just a clear picture of where you stand.',
        ],
      },
    ],
  },
  {
    slug: 'the-real-cost-of-underinsurance-and-how-to-avoid-it',
    title: 'The Real Cost of Underinsurance — and How to Avoid It',
    excerpt:
      'Underinsurance is one of the most common and avoidable financial risks in South Africa. We break down what the average clause means, how it applies to your home and vehicle, and the practical steps you can take today to make sure you\'re never left short.',
    category: 'Personal Finance',
    readTime: '4 min read',
    date: 'July 2026',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700',
    author: 'Black Swan Insurance Brokers',
    authorRole: 'Editorial Team',
    intro:
      'Underinsurance is the quiet crisis of South African household insurance. It rarely makes headlines, because no single event is dramatic enough to grab attention. But when a family loses a home or a vehicle and the payout falls short of what is needed to replace it, the impact is devastating — and, in most cases, entirely avoidable. In this article we explain why underinsurance is so widespread, what the average clause actually does, and the simple steps you can take to make sure a claim pays what you expect.',
    sections: [
      {
        heading: 'What underinsurance really means',
        body: [
          'Underinsurance is not the same as having no insurance. You have a policy, you pay your premium, and you believe you are protected. The problem is that the sum insured — the amount the insurer has agreed to pay in the event of a total loss — is less than the actual cost of replacing what you have insured. In the insurer\'s eyes, you have chosen to carry part of the risk yourself, and they will reduce your payout accordingly.',
          'This is not a technicality buried in the fine print. It is a core principle of insurance, and it applies to almost every short-term policy sold in South Africa.',
        ],
      },
      {
        heading: 'The average clause, explained simply',
        body: [
          'The average clause is the mechanism insurers use to apply underinsurance. In plain terms: if you insure something for less than it is worth, the insurer will pay only a proportion of any claim — even a partial one — that reflects the underinsurance.',
          'Here is an example. Suppose the replacement cost of your home contents is R1,000,000, but you have insured them for R500,000. You are 50% underinsured. If a burglary causes R100,000 of damage, the insurer will apply average and pay only R50,000 of that claim — because you only carried half of the risk. The remaining R50,000 is yours to absorb.',
          'The clause applies to partial losses as well as total losses. That is what makes it so dangerous: a family might never face a total loss, but a single burst geyser or a break-in can still leave them thousands of rand out of pocket.',
        ],
      },
      {
        heading: 'Why it happens',
        body: [
          'Underinsurance usually creeps in over time. You take out a policy, set the sum insured based on a rough estimate, and then never revisit it. In the meantime, inflation pushes up replacement costs. You buy new furniture, upgrade your appliances, renovate a room, or add a solar system. None of these are reflected in your schedule, but all of them increase what it would cost to put your home back to where it was.',
          'The same applies to vehicles. If your car is written off and the market value has fallen faster than your insured value, you may be over-insured — but if you have not adjusted the sum insured in years and the cost of a comparable replacement has risen, you may be under-insured. The only way to know is to check.',
        ],
      },
      {
        heading: 'How to avoid it',
        body: [
          'The fix is straightforward, but it does require a little attention. First, insure for replacement cost, not market value. Replacement cost is what it would cost to buy the equivalent item new today; market value is what you could sell it for second-hand. The two figures are often very different, and only replacement cost will let you actually recover from a loss.',
          'Second, review your sums insured annually. A quick phone call to your broker each year is usually enough. We can re-run the numbers, account for inflation and any new purchases, and adjust your cover before a loss exposes the gap.',
          'Third, keep an inventory. A simple record of what you own, with photographs and approximate values, makes it far easier to set the right sum insured and to substantiate a claim if you ever need to. It takes an afternoon to create and can save you years of financial strain.',
        ],
      },
      {
        heading: 'The bottom line',
        body: [
          'Underinsurance is not a trap set by insurers; it is a consequence of cover that has not kept pace with life. The good news is that the remedy is in your hands. A regular review, the right basis of cover, and a current inventory are all it takes to make sure that, when the worst happens, your policy does what you bought it to do.',
          'If you are unsure whether your current sums insured are still accurate, contact us for a quick, no-obligation review. We would rather help you adjust your cover now than help you explain a shortfall after a loss.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-navigate-a-claim-and-why-your-broker-matters-most',
    title: 'How to Navigate a Claim — and Why Your Broker Matters Most',
    excerpt:
      'The claims process is where the value of a good broker becomes crystal clear. From lodgement to settlement, we walk you through exactly what to expect, what documentation you\'ll need, and how having an independent advocate in your corner can make a significant difference to your outcome.',
    category: 'Claims Guidance',
    readTime: '6 min read',
    date: 'June 2026',
    image:
      'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=700',
    author: 'Black Swan Insurance Brokers',
    authorRole: 'Editorial Team',
    intro:
      'Buying insurance is easy. Making a claim is where the relationship is truly tested. A policy is a promise, and the moment you need that promise kept, the experience can feel opaque, slow, and adversarial — or it can feel straightforward and fair. The difference often comes down to one thing: whether you have an independent broker in your corner. In this guide we walk through the claims process from start to finish, explain what to expect at each stage, and show why the broker\'s role matters most when the stakes are highest.',
    sections: [
      {
        heading: 'Step 1: The first 24 hours',
        body: [
          'The moment a loss happens — a burst pipe, a break-in, a vehicle accident — the clock starts. Your first call should be to your broker, not the insurer. We will tell you what immediate steps to take to prevent further damage (most policies require you to mitigate the loss), what not to do (do not dispose of damaged items before they have been assessed), and what photographs and documents to gather while the scene is fresh.',
          'If the loss involves a crime — a theft, a hijacking, or malicious damage — you will need a case number from the South African Police Service. We will remind you of this and help you make the report if needed. These first hours are when evidence is easiest to capture and hardest to reconstruct later.',
        ],
      },
      {
        heading: 'Step 2: Lodging the claim',
        body: [
          'Once the immediate situation is stable, we lodge the claim on your behalf. This is not a formality. The way a claim is framed — the perils cited, the supporting documents attached, the sequence of events described — shapes how the insurer assesses it. A claim lodged with a complete, consistent file from day one moves faster and attracts fewer queries than one that arrives in pieces.',
          'You will need: a completed claim form (we handle this), proof of ownership (invoices, photographs, or a current inventory), the police case number if applicable, and any repair or replacement quotes. We tell you exactly what is required for your specific claim so you are not chasing documents weeks later.',
        ],
      },
      {
        heading: 'Step 3: Assessment and the assessor',
        body: [
          'For most claims above a modest threshold, the insurer will appoint an assessor. The assessor\'s job is to verify the loss, confirm the cause, and determine whether the policy responds. It is important to understand that the assessor works for the insurer, not for you. That does not mean they are hostile, but it does mean their starting question is "is this covered, and for how much?" — not "how can we make this as generous as possible?"',
          'This is where your broker\'s presence is worth its weight in gold. We attend the assessment where appropriate, we make sure your account of the loss is heard, and we flag any attempt to narrow the scope of cover beyond what the policy actually says. Many claimants do not realise they can challenge an assessor\'s finding; they can, and we do.',
        ],
      },
      {
        heading: 'Step 4: Settlement and the fine print',
        body: [
          'Once the assessor reports, the insurer will make a settlement offer. This is not a take-it-or-leave-it figure — it is a proposal, and it is often negotiable. Common points of contention include the basis of settlement (replacement vs. indemnity), the application of average if underinsurance is suspected, and the treatment of betterment (where a repair leaves you better off than before the loss).',
          'We review every offer against your policy wording before it reaches you. If the figure is fair, we tell you so. If it is not, we go back to the insurer with the specifics — the clause, the precedent, the comparable cost — and we push. Our job is to make sure the promise in your policy is the promise that is kept.',
        ],
      },
      {
        heading: 'Why the broker matters most at claim time',
        body: [
          'It is tempting to think of insurance as a commodity — the cheapest premium, the most features, bought online in ten minutes. That view survives right up until the moment you have a claim. At that point, what matters is not the premium you paid but the advocate you have.',
          'An independent broker is not employed by the insurer. We are employed by you, and our reputation depends on outcomes, not sales targets. We know the wording, we know the assessors, and we know the difference between a fair settlement and a convenient one. When the loss is large and the stress is real, that knowledge is the most valuable thing your insurance relationship has to offer.',
        ],
      },
      {
        heading: 'If you have a claim — or a question about one',
        body: [
          'If you are facing a claim now, or if you have had a claim declined or under-settled and you are not sure whether the outcome was fair, contact us. We will review the file, give you an honest view, and — where there is a case — take it up with the insurer on your behalf. No jargon, no obligation, just the advocacy you would expect from a broker who is on your side.',
        ],
      },
    ],
  },
];

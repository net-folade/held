// DRAFT CONTENT — everything below was drafted by Claude and is pending
// Folade's word-by-word review before it is shown to anyone.

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  minutes: number;
  subtitle: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "pmdd-is-real",
    title: "PMDD is real, and it has a name",
    minutes: 4,
    subtitle: "What a diagnosis does and doesn’t mean",
    sections: [
      {
        paragraphs: [
          "Premenstrual dysphoric disorder. Four words that a lot of women wait years to hear, after being told it’s stress, or hormones, or just how you are. If part of every month feels like being pulled underwater — and then the water lets go the moment your period arrives — there is a name for that, and it is not a personality flaw.",
          "PMDD was added to the DSM-5, the main diagnostic manual used in North America, in 2013. The World Health Organization recognizes it too. That matters not because a manual makes your experience real — you already knew it was real — but because a name is a key. It opens doors: to treatment that actually targets it, to doctors taking you seriously, to other women who know exactly what you mean.",
        ],
      },
      {
        heading: "What it looks like",
        paragraphs: [
          "PMDD lives in the luteal phase — the week or two between ovulation and your period. In that window, the symptoms are severe: rage that doesn’t feel like yours, despair, anxiety, a sense that everything you’ve built is wrong. Then bleeding starts, and within a few days the fog lifts, almost like weather. That on-off pattern, tied to the cycle, is the signature. It’s what separates PMDD from depression or anxiety that stays all month.",
          "Researchers estimate it affects a small but real percentage of people who menstruate — you are far from alone in this, even when the luteal week insists otherwise.",
        ],
      },
      {
        heading: "What a diagnosis does",
        paragraphs: [
          "A diagnosis gives you language for the pattern, a shorthand for doctors, and a menu of treatments that have actually been studied — from medication timed to your cycle, to therapy, to changes that soften the hard week. It also gives you something quieter: permission to stop auditing your character every month. The Tuesday-you who despairs and the Friday-you who is fine are the same person, moving through different chemistry.",
        ],
      },
      {
        heading: "What it doesn’t mean",
        paragraphs: [
          "It doesn’t mean you’re broken, dramatic, or ‘too hormonal.’ It doesn’t mean the pain in your life is imaginary — real stress and PMDD amplify each other. And it doesn’t mean this is forever, unmanaged. Many women find, with the right support, that the hard week gets smaller. Not gone, maybe. But smaller, and survivable, and no longer a secret.",
          "If you’re nodding along, the next read — on talking to your doctor — is written for you.",
        ],
      },
    ],
  },
  {
    slug: "scripts-for-your-doctor",
    title: "Scripts for telling your doctor",
    minutes: 4,
    subtitle: "Getting believed on the first try",
    sections: [
      {
        paragraphs: [
          "The hardest part of a PMDD appointment often isn’t the medicine. It’s the ten minutes where you try to compress years of monthly free-fall into a sentence, while someone with a keyboard decides what to type. You deserve to walk in prepared. Here’s how.",
        ],
      },
      {
        heading: "Before you go: track two cycles",
        paragraphs: [
          "The single most persuasive thing you can bring is a daily record of your symptoms across two cycles. Not from memory — memory smooths things out. Each day, jot a line: mood, energy, anything intense, and where you are in your cycle. Doctors are trained to look for the luteal on-off pattern, and seeing it on paper moves the conversation from ‘she feels bad sometimes’ to ‘this is cyclical.’",
          "If you like structure, ask about the Daily Record of Severity of Problems (DRSP) — it’s the standard tracking sheet used to assess PMDD.",
        ],
      },
      {
        heading: "Openers that work",
        paragraphs: [
          "“For the week or two before my period, I have severe mood symptoms — rage, despair, anxiety — and they lift within days of bleeding. I’ve tracked it for two cycles. I’d like to be assessed for PMDD.”",
          "“This is not ordinary PMS. It affects my work and my relationships every month. I want it on my record that I raised this today.”",
          "Naming the condition and asking for assessment gives the appointment a job. You’re not asking them to guess; you’re asking them to evaluate a specific, recognized diagnosis.",
        ],
      },
      {
        heading: "If you’re brushed off",
        paragraphs: [
          "“I hear that it could be stress. What I’m describing is cyclical and severe, and I’d like it noted in my chart, along with a plan for assessment.” Asking for something to be charted is polite and powerful — it creates a record you can build on.",
          "And if the door stays closed: you are allowed to see someone else. A second opinion is not disloyalty. Bring the same tracking, use the same script. The pattern is real, and the right clinician will see it.",
        ],
      },
    ],
  },
  {
    slug: "luteal-survival-kit",
    title: "The luteal survival kit",
    minutes: 4,
    subtitle: "Small preparations for the hard week",
    sections: [
      {
        paragraphs: [
          "You can’t schedule your way out of PMDD. But you can meet the hard week the way you’d meet any storm you know is coming: with the house stocked, the candles found, and a note taped to the door reminding you that storms end. This is that kit.",
        ],
      },
      {
        heading: "Know your window",
        paragraphs: [
          "If you’ve been tracking, you know roughly when the drop comes. Put it in your calendar like weather — not as a countdown to dread, but so future-you isn’t ambushed. A quiet ‘storm week’ label is enough.",
        ],
      },
      {
        heading: "Lower every bar you can",
        paragraphs: [
          "Cook and freeze a few meals during your good week. Decline what can be declined; move what can be moved. The luteal week is not the time for the difficult conversation, the big decision, or the optional obligation. This isn’t weakness — it’s logistics.",
          "Decide in advance what ‘bare minimum’ looks like: fed, watered, medicated if you are, and in bed at a humane hour. On the worst days, hitting the bare minimum is a full victory.",
        ],
      },
      {
        heading: "Write the note on a good day",
        paragraphs: [
          "When you feel like yourself, write yourself a short letter: ‘This is the drop. It has come before and it has always ended. You don’t have to believe anything you think this week. Don’t quit, don’t send it, don’t decide.’ Keep it where luteal-you will find it. She won’t fully believe it — but she’ll read it, and it helps.",
        ],
      },
      {
        heading: "Tell one person",
        paragraphs: [
          "Choose one person who gets a plain heads-up: ‘Rough week starting; I may go quiet or get sharp. It’s the PMDD, not us.’ One steady witness shrinks the shame more than any app ever will.",
          "And if the week turns darker than usual — if you stop feeling safe with yourself — the numbers at the top of the resources page are for exactly that moment. Using them is part of the kit, not a failure of it.",
        ],
      },
    ],
  },
  {
    slug: "for-partners-and-friends",
    title: "For partners and friends",
    minutes: 5,
    subtitle: "How to show up without fixing",
    sections: [
      {
        paragraphs: [
          "If someone sent you this, it means she trusts you enough to let you see the hardest week of her month. That’s not small. Here is what’s happening, and what actually helps.",
        ],
      },
      {
        heading: "First: believe her",
        paragraphs: [
          "PMDD is a recognized medical condition, not a mood or an excuse. For a week or two before her period, her brain’s response to normal hormonal shifts produces severe symptoms — rage, despair, anxiety, a conviction that everything is ruined. Then her period starts and, within days, she surfaces. She isn’t exaggerating the bad week, and she isn’t faking the good ones. Both are real. The cycle is the condition.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: [
          "Steadiness. The most healing thing you can be is unsurprised. ‘This is the hard week. I’m here. We’ve done this before.’ Say it plainly, then act normal.",
          "Practical weight-lifting. Take over what you can without being asked twice — food, chores, kid logistics. During the drop, small tasks feel like cliffs.",
          "A gentle anchor, not a referee. If she says something sharp, you can hold both truths: the hurt is real, and the storm is speaking. ‘Let’s talk about this on the other side’ is a fair sentence — as long as the other side actually comes with the conversation, not with pretending it never happened.",
        ],
      },
      {
        heading: "What doesn’t",
        paragraphs: [
          "‘Calm down.’ ‘Is it that time of the month?’ ‘You were fine yesterday.’ Every one of these hands her more shame to carry, and shame is the heaviest symptom she has.",
          "Also unhelpful: blaming everything on the cycle. She’s still a whole person during the luteal week — with real opinions and real grievances. PMDD turns the volume up; it doesn’t invent the song. Dismissing everything she says as hormones is just the mirror image of not believing her at all.",
        ],
      },
      {
        heading: "Look after yourself too",
        paragraphs: [
          "Loving someone with PMDD is genuinely hard some weeks. You’re allowed to have limits, to take a walk, to talk to someone yourself. Burning out quietly helps no one. The goal isn’t for you to absorb the storm — it’s for both of you to know it passes, and to still be standing together when it does.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

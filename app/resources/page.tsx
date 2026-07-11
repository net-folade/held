import AppHeader from "@/components/AppHeader";
import BackLink from "@/components/BackLink";

const crisisLines = [
  {
    name: "Distress Centre Ottawa",
    number: "613-238-3311",
    tel: "6132383311",
    desc: "24/7 phone support for anyone in the Ottawa region. No situation is too small.",
  },
  {
    name: "Suicide Crisis Helpline",
    number: "9-8-8",
    tel: "988",
    desc: "Call or text, any hour, anywhere in Canada. English and French.",
  },
  {
    name: "Ontario Mental Health Line",
    number: "1-866-531-2600",
    tel: "18665312600",
    desc: "ConnexOntario — free, confidential referrals to local mental health services.",
  },
  {
    name: "Health811 Ontario",
    number: "8-1-1",
    tel: "811",
    desc: "Talk to a registered nurse 24/7 and get help finding local care. English and French.",
  },
];

const articles = [
  {
    title: "PMDD is real, and it has a name",
    meta: "6 min read · What a diagnosis does and doesn’t mean",
  },
  {
    title: "Scripts for telling your doctor",
    meta: "4 min read · Getting believed on the first try",
  },
  {
    title: "The luteal survival kit",
    meta: "5 min read · Small preparations for the hard week",
  },
  {
    title: "For partners and friends",
    meta: "7 min read · How to show up without fixing",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="flex-1 animate-fadeup px-6 pb-[60px] pt-[52px] sm:px-11">
        <div className="mx-auto max-w-[840px]">
          <BackLink className="mb-6" />
          <h2 className="m-0 mb-2.5 font-serif text-[32px] font-light leading-[1.1] text-espresso sm:text-[40px]">
            Resources
          </h2>
          <p className="m-0 mb-9 text-[13.5px] text-bark">
            Real help, close to home. The lines at the top are for right now.
          </p>

          <div className="mb-11 grid gap-4 sm:grid-cols-2">
            {crisisLines.map((line) => (
              <div
                key={line.name}
                className="border border-sand border-t-[3px] border-t-ember bg-paper p-[22px]"
              >
                <div className="mb-1 font-serif text-base text-espresso">
                  {line.name}
                </div>
                <a
                  href={`tel:${line.tel}`}
                  className="mb-1.5 block font-serif text-[22px] text-ember no-underline hover:underline"
                >
                  {line.number}
                </a>
                <div className="text-xs leading-[1.55] text-bark-soft">
                  {line.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
            For a calmer moment
          </div>
          {articles.map((art) => (
            <div
              key={art.title}
              className="flex items-baseline justify-between gap-6 border-b border-sand py-5"
            >
              <div>
                <div className="mb-1 font-serif text-[17px] text-espresso">
                  {art.title}
                </div>
                <div className="text-xs text-fawn">{art.meta}</div>
              </div>
              <div className="flex-none font-serif text-ember">→</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

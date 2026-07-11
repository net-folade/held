import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import BackLink from "@/components/BackLink";
import { articles, getArticle } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return { title: "Held" };
  return {
    title: `${article.title} · Held`,
    description: article.subtitle,
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="flex-1 animate-fadeup px-6 pb-[60px] pt-[52px] sm:px-11">
        <article className="mx-auto max-w-[680px]">
          <BackLink className="mb-6" />
          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-fawn">
            {article.minutes} min read
          </div>
          <h2 className="m-0 mb-2.5 font-serif text-[32px] font-light leading-[1.1] text-espresso sm:text-[40px]">
            {article.title}
          </h2>
          <p className="m-0 mb-9 text-[13.5px] text-bark">{article.subtitle}</p>

          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h3 className="m-0 mb-3 mt-9 font-serif text-[20px] font-normal text-espresso">
                  {section.heading}
                </h3>
              )}
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="m-0 mb-4 text-[15px] leading-[1.75] text-bark"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <Link
            href="/resources"
            className="mt-8 inline-block text-[12.5px] text-fawn no-underline transition-colors hover:text-ember"
          >
            ← All resources
          </Link>
        </article>
      </main>
    </div>
  );
}

export default function CrisisFooter() {
  return (
    <footer className="flex justify-center border-t border-sand px-6 py-[18px] sm:px-11">
      <p className="text-center text-xs leading-[1.7] text-fawn">
        If tonight is a hard night —{" "}
        <a
          href="tel:6132383311"
          className="whitespace-nowrap font-medium text-ember no-underline hover:underline"
        >
          Distress Centre Ottawa 613-238-3311
        </a>{" "}
        &nbsp;·&nbsp;{" "}
        <a
          href="tel:988"
          className="whitespace-nowrap font-medium text-ember no-underline hover:underline"
        >
          call or text 9-8-8
        </a>
      </p>
    </footer>
  );
}

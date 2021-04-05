import TestDivWithSass from "../components/TestDivWithSass";
import TestDivWithoutSass from "../components/TestDivWithoutSass";

export default function Home() {
  return (
    <div className="h-screen w-screnn flex justify-center items-center">
      {/* Will not work when using Sass CSS Module */}
      <TestDivWithSass />
      {/* Without sass group will work. */}
      <TestDivWithoutSass />
    </div>
  );
}

import MainHeader from "./MainHeader";
import QuickBar from "./QuickBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <MainHeader />
      <QuickBar />
    </header>
  );
}

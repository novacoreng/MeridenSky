import Link from "next/link";
import "./section.css";

export default function NotFound() {
  return (
    <main className="errorPage">
      <div>
        <p className="eyebrow">MERIDIAN SKY</p>
        <h1>Not<br /><em>up here.</em></h1>
        <p>The page you requested could not be found. Return to Meridian Sky and continue exploring.</p>
        <Link className="button primary" href="/">Return home</Link>
      </div>
    </main>
  );
}

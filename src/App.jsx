
import "./App.css"
import { TwitterFollowCard } from "./twitterFollowCard";

export function App() {  // Capitalized 'App'
  return (
    <>
    <section className="tw-section-grand">
      <h2 className="tw-h2">Tal vez te guste</h2>
    <TwitterFollowCard username={"BAxis1952isdead"}>
      <strong>NameGone</strong>
    </TwitterFollowCard>
    <TwitterFollowCard username={"Lean1w3"}>
      <strong>Lean</strong>
    </TwitterFollowCard>
    <TwitterFollowCard username={"Tomiivaldo_"}>
      <strong>caldo</strong>
    </TwitterFollowCard>
    <TwitterFollowCard username={"Jaz288971"}>
      <strong>Gonzalez</strong>
    </TwitterFollowCard>
    </section>
    </>
  );
}

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WhySection from '@/components/WhySection';

const CARDS = [
  ['Insurance', 'Customers are reimbursed for covered agent errors.', '/product'],
  ['Rate', 'Adversarial testing sets your Trust Score and premium.', '/product#rate'],
  ['Monitor', 'We alert you the moment your agent behaves unusually.', '/product#monitor'],
];

export default function Home() {
  return (
    <>
      <div className="first" id="top">
        <div className="hero">
          <div className="glass rise">
            <h1 className="rise d1">Have peace of mind while<br className="wide" /> your agents move money.</h1>
            <div className="rule rise d2" aria-hidden="true" />
            <p className="sub rise d3">Insurance that protects you and your customers<br className="wide" /> every time your AI agent pays.</p>
            <a className="hook" href="#problem">So what happens when an agent gets it wrong?</a>
          </div>
        </div>
      </div>

      <Reveal className="problem-line" id="problem">
        <p>Today, no one covers agent mistakes. <span>The loss falls on your customers.</span></p>
        <p className="enter">Until RMI Agentic.</p>
      </Reveal>

      <section className="sec overview" id="overview">
        <Reveal as="p" className="lab lab-big"><i aria-hidden="true" />What we do</Reveal>
        <Reveal as="h2">Insurance, backed by testing and live monitoring.</Reveal>
        <div className="ov-cards ov-row">
          {CARDS.map((c, i) => (
            <Reveal key={c[0]} delay={i * 0.1}>
              <Link className="ov-card" href={c[2]}><span className="ov-lab">{c[0]}</span><span className="ov-line">{c[1]}</span><span className="ov-more">Learn more</span></Link>
            </Reveal>
          ))}
        </div>
      </section>

      <WhySection />
    </>
  );
}

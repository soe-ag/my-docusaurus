import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const PRINCIPLES = [
  {
    title: "Eliminate Async Waterfalls",
    description:
      "Start async work early, await late, and parallelize independent operations.",
  },
  {
    title: "Optimize Bundle Size",
    description:
      "Prefer direct imports, load heavy code paths only when users need them.",
  },
  {
    title: "Reduce Re-renders",
    description:
      "Derive state during render and keep dependencies minimal and stable.",
  },
  {
    title: "Faster Rendering",
    description:
      "Use predictable conditionals, hoist static JSX, and reduce expensive paint work.",
  },
  {
    title: "Client Data Discipline",
    description:
      "Deduplicate requests and listeners so the browser does less work per interaction.",
  },
  {
    title: "Performance by Design",
    description:
      "Build with measurable outcomes: fewer bytes, fewer requests, faster feedback.",
  },
] as const;

const QUICK_WINS = [
  "Use Promise.all() for independent fetches.",
  "Avoid barrel imports for critical routes.",
  "Derive booleans from existing state instead of syncing with effects.",
  "Use lazy state initialization for expensive defaults.",
] as const;

function HomeHero(): ReactNode {
  return (
    <section className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContent)}>
        <p className={styles.eyebrow}>Vercel React Best Practices</p>
        <Heading as="h1" className={styles.heroTitle}>
          Build React pages that feel instant.
        </Heading>
        <p className={styles.heroSubtitle}>
          A practical, performance-first playbook for reducing waterfalls,
          shrinking bundles, and keeping rendering smooth.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/vercel-react-best-practices/AGENTS"
          >
            Explore Best Practices
          </Link>
          <Link className="button button--outline button--lg" to="/docs/intro">
            Start Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  return (
    <Layout
      title={`Vercel React Best Practices | ${title}`}
      description="Performance-focused React guidance inspired by Vercel engineering best practices."
    >
      <HomeHero />
      <main className={styles.mainContent}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Core Performance Pillars</Heading>
              <p>Ship faster experiences by default, not as an afterthought.</p>
            </div>
            <div className={styles.cardGrid}>
              {PRINCIPLES.map((principle) => (
                <article className={styles.card} key={principle.title}>
                  <Heading as="h3">{principle.title}</Heading>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.workflowLayout}>
              <div>
                <Heading as="h2">A Simple Team Workflow</Heading>
                <p>
                  Move from intuition to confidence with lightweight, repeatable
                  performance reviews in every PR.
                </p>
                <ul className={styles.steps}>
                  <li>1. Spot waterfall and bundle risks before merging.</li>
                  <li>2. Apply one focused rule at a time.</li>
                  <li>
                    3. Validate impact with Web Vitals and route-level timing.
                  </li>
                </ul>
              </div>

              <aside className={styles.quickWins}>
                <Heading as="h3">Quick Wins</Heading>
                <ul>
                  {QUICK_WINS.map((quickWin) => (
                    <li key={quickWin}>{quickWin}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

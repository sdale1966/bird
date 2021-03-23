/// Compex Systemhaus GmbH, Heidelberg, Germany
/// Loetz GmbH & Co KG

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'About',
    imageUrl: 'img/BIRT-Arguments-01.svg',
    description: (
      <>
        What is BIRT? Get an overview what BIRT is all about: architecture, customization, extensibility, and much more... 
      </>
    ),
  },
  {
    title: 'Get started',
    imageUrl: 'img/BIRT-Get-Started-01.svg',
    description: (
      <>
        Download and get started. Create your first report and find even more examples...
      </>
    ),
  },
  {
    title: 'Documentation',
    imageUrl: 'img/BIRT-Documentation-01.svg',
    description: (
      <>
        You want to dive deep inside BIRT. Read the Documentation where you will find all information you need.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 class="text--center">{title}</h3>
      <p class="text--center">{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout permalink={'/'}
      title={`BIRT ${siteConfig.title}`}
      description="BIRT Home Page, Eclipse Project <head />">
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">

        <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('/img/BIRT-logo.png')}
          />
          
          <p className="hero__subtitle">{siteConfig.tagline}
          </p>
          With BIRT you can create data visualizations, dashboards and reports <br/>that can be embedded into web applications and rich clients. Make information out of your data! <p></p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

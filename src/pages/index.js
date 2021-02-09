import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';
import StarSvg from './components/cards_img01.js';
import CodeSvg from './components/cards_img02.js';
import MineSvg from './components/cards_img03.js';
import ExchangeSvg from './components/cards_img04.js';
import ContributeSvg from './components/cards_img05.js';

const CoverImgDiv = () => {
  const {isDarkTheme} = useThemeContext();
  if (isDarkTheme) {
    return (
      <>
        <div className="cover-image">
          <img className="cover-image-illustration" src={useBaseUrl('img/illustration1.png')}/>
        </div>
      </>
    );
  } else {
    return (
      <div className="cover-image">
        <img className="cover-image-illustration" src={useBaseUrl('img/illustration1.png')}/>
      </div>
    );
  }
};

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const cardsSection = React.useRef(null);
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {isDarkTheme} = useThemeContext();
  if (isDarkTheme) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const scrollToCards = () => {
    // cardsSection.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    window.scrollTo({ behavior: 'smooth', top: cardsSection.current.offsetTop-200 })
  };

  return (
      <Layout>
        <div className="test">
          <div className="cover-container">
            <div className="cover-title">
              <h1 className="hero__title">{siteConfig.customFields.title_one}<br/>{siteConfig.customFields.title_two}</h1>
              <p className="hero__subtitle">{siteConfig.customFields.tagline_one}<br/>{siteConfig.customFields.tagline_two}</p>
              <button onClick={scrollToCards}>Scroll Down</button>
            </div>
            <CoverImgDiv/>
          </div>

          <div id="card-container" ref={cardsSection}>

            <div className="card-item">
              <a href={useBaseUrl('docs/basics/basics-intro-blockchain')}>
                <div>
                  <StarSvg/>
                  <h2>Basics</h2>
                  <p>Learn about blockchain and Zilliqa.</p>
                </div>
              </a>
            </div>

            <div className="card-item">
              <a href={useBaseUrl('docs/dev/dev-started-introduction')}>
                <div>
                  <CodeSvg/>
                  <h2>Developers</h2>
                  <p>Build full-stack blockchain apps on Zilliqa.</p>
                </div>
              </a>
            </div>

            <div className="card-item">
              <a href={useBaseUrl('docs/miners/mining-getting-started')}>
                <div>
                  <MineSvg />
                  <h2>Miners</h2>
                  <p>Participate as a miner and start earning $ZIL.</p>
                </div>
              </a>
            </div>

            <div className="card-item">
              <a href={useBaseUrl('docs/exchanges/exchange-getting-started')}>
                <div>
                  <ExchangeSvg/>
                  <h2>Exchanges</h2>
                  <p>Information for exchanges and seed node operators.</p>
                </div>
              </a>
            </div>

            <div className="card-item">
              <a href={useBaseUrl('docs/contributors/contribute-buildzil')}>
                <div>
                  <ContributeSvg/>
                  <h2>Contributors</h2>
                  <p>Learn how you can contribute to Zilliqa's ecosystem.</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      
        
      </Layout>
  );
}

export default Home;

import PageNotFoundImage from './PageNotFound.png';
import './PageNotFound.scss';

const PageNotFound = () => (
  <article className="page-not-found">
    <header className="page-not-found__header">
      <h1>404: Page Not Found</h1>
    </header>
    <section className="page-not-found__content">
      <h2>Sorry, it looks like we've spilled our drink.</h2>
      <img src={PageNotFoundImage} alt="Spilled drink" loading="lazy" />
      <p>The page you're looking for is unavailable. Please use our site navigation menu to quench your thirst.</p>
    </section>
  </article>
);

export default PageNotFound;

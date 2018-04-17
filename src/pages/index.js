
import React from 'react';
import Link from 'gatsby-link';
import './index.css';

import NavBar from '../components/navbar/navbar.js';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';



export default ({ data }) => (
    <section className="home">
        <NavBar />
        <Header />


        <h1 className="home__header">Projects</h1>
        <ul className="list-unstyled page-container home__project-list">
            {data.allProjectsJson.edges.slice(0, 2).map(({ node: project }, index) => (
                <li className="card" key={index}>
                    <h2 className="card__title">{project.name}</h2>
                    <p className="card__body">
                        <img className="full-width home__project-thumbnail" src={project.thumbnail} alt={`${project.name} logo`} />
                    </p>
                    <a className="home__project-link" href={`/projects/#${project.name.toLowerCase().replace(" ", "-")}`}>Learn More >></a>
                </li>
            ))}
        </ul>
        <a className="page-container home__link" href={`/projects/#`}>See All >></a>


        <section>
            <div>
                <h1 className="home__header">FAQ</h1>
                <ul className="list-unstyled page-container">
                    {data.allFaqJson.edges.slice(0, 5).map(({ node: faq }, index) => (
                        <li className="card" key={index}>
                            <h2 className="card__title">{faq.question}</h2>
                            <p className="card__body" dangerouslySetInnerHTML={{ "__html": faq.answer }}></p>
                        </li>
                    ))}
                </ul>
                <a className="page-container home__link" href={`/faq/#`}>See All >></a>
            </div>



            <div>
                <h1 className="home__header">Thoughs</h1>
                <ul className="list-unstyled page-container">
                    {data.allJournalJson.edges.slice(0, 2).map(({ node: journal }, index) => (
                        <li className="card" key={index}>
                            <h2 className="card__title">{index === 0 && <img className="icon" src="/imgs/Naruto.png" alt="" width="32px" />}{journal.title}</h2>
                            <p className="card__body" dangerouslySetInnerHTML={{ "__html": journal.body }}></p>
                        </li>
                    ))}
                </ul>
                <a className="page-container home__link" href={`/journal/#`}>See All >></a>
            </div>



        </section>



        <Footer />
    </section>
);


export const query = graphql`
query homeQuery {
    allProjectsJson {
      edges {
        node {
          name
          type
          thumbnail
          imgs
          dateStart
          dateEnd
          skills
          software
          description
          details
        }
      }
    }
    allWorkexpJson {
        edges {
          node {
            company
            title
          }
        }
      }
    allJournalJson {
        edges {
          node {
            title
            body
          }
        }
      }
    allFaqJson {
        edges {
          node {
            question
            answer
          }
        }
      }
  }
`;
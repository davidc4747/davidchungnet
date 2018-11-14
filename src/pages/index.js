import React from 'react'
import Link from 'gatsby-link'
import './index.css'

import NavBar from '../components/navbar/navbar.js'
import Header from '../components/header/header.js'
import Footer from '../components/footer/footer.js'

export default ({ data }) => (
  <section className="home">
    <NavBar />
    <Header />

    <h1 className="home__header">Projects</h1>
    <ul className="list-unstyled page-container home__project-list">
      {data.allProjectsJson.edges
        .slice(0, 4)
        .map(({ node: project }, index) => (
          <li className="card" key={index}>
            <h2 className="card__title">{project.name}</h2>
            <p className="card__body">
              <img
                className="full-width home__project-thumbnail"
                src={project.thumbnail}
                alt={`${project.name} logo`}
              />
            </p>
            <a
              className="home__project-link"
              href={`/projects/#${project.name
                .toLowerCase()
                .replace(' ', '-')}`}
            >
              Learn More >>
            </a>
          </li>
        ))}
    </ul>
    <a className="page-container home__link" href={`/projects/#`}>
      See All >>
    </a>

    <section>
      <div>
        <h1 className="home__header">FAQ</h1>
        <ul className="list-unstyled page-container">
          {data.allFaqJson.edges.slice(0, 4).map(({ node: faq }, index) => (
            <li className="card" key={index}>
              <h2 className="card__title">{faq.question}</h2>
              <p
                className="card__body"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </li>
          ))}
        </ul>
        <a className="page-container home__link" href={`/faq/#`}>
          See All >>
        </a>
      </div>
    </section>

    <Footer />
  </section>
)

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
    allFaqJson {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`

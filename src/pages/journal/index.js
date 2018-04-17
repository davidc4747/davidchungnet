import React from 'react';
import './journal.css';

import Navbar from '../../components/navbar/navbar.js';



export default ({ data }) => (
    <div>
        <Navbar />
        <h1 className="page-header">Thoughts</h1>
        <ul className="journal-list">
            {data.allJournalJson.edges.map(({ node: journal }, index) => (
                <li key={journal.title} className="journal-item">
                    <h2 className="journal-item__title">{index === 0 && <img className="icon" src="/imgs/Naruto.png" alt="" width="32px" />}{journal.title}</h2>
                    <p className="journal-item__body" dangerouslySetInnerHTML={{ "__html": journal.body }}></p>
                </li>
            ))}
        </ul>
    </div>
);


export const query = graphql`
query journalQuery {
    allJournalJson {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`;
import React from 'react';
import './faq.css';

import Navbar from '../../components/navbar/navbar.js';



export default ({ data }) => (
    <div>
        <Navbar />
        <h1 className="page-header">Frequently Asked Questions</h1>
        <ul className="page-container list-unstyled faq-list">
            {data.allFaqJson.edges.map(({ node: faq }, index) => (
                <li key={index} className="faq-item">
                    <h2 className="faq-item__question">{faq.question}</h2>
                    <p className="faq-item__answer" dangerouslySetInnerHTML={{ "__html": faq.answer }}></p>
                </li>
            ))}
        </ul>

        
        <footer className="page-footer"></footer>
    </div>
);


export const query = graphql`
query faqQuery {
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
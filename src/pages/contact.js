import React from "react";
import Helmet from "react-helmet";
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Header from '../components/Header'
import Section from '../components/Section'

import './style.scss'

export default class Contact extends React.Component {
  render() {

    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div className="index">
        <Helmet title={`Contact - ${siteTitle}`} />
        <div className="main">
          <Header />

          <section>
          
            <h3 className="bold">Contact</h3>

            <h4>I will promply respond to your message within a day or so!</h4>

            <p>As a quick update, I am currently looking for employment in areas related to website development (frontend). I'm mostly interested in locations such as Seattle, Redmond (Washington state), Los Angeles, and San Francisco Bay Area.</p>
            
          </section>

          <Section>
            <div id="contact-form">
              <form name="contact" action="/success" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6" required></textarea>

                <input type="submit" value="Send Message" className="special" />
                <input type="reset" value="Clear" />
              </form>
            </div>
          </Section>

        </div>

        <div className="aside">
          <div className="top">
            <About />
          </div>
          <div className="bottom">
            <Links />
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query ContactPage {
      site {
          siteMetadata {
              title
          }
      }
  }
`;
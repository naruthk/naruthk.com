import React from 'react'
import Helmet from 'react-helmet'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'
import Header from '../components/Header'

// import AnimatedPortrait from '../components/AnimatedPortrait'
// import { Parallax, ParallaxLayer } from 'react-spring';

import Banner from '../components/Banner'

import './style.scss'

export default class IndexPage extends React.Component {

  constructor() {
    super()
  }

  render() {

    const { title, description, keywords } = this.props.data.site.siteMetadata;

    return (
      <div className="index">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keyword" content={keywords} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </Helmet>
        <div className="main">

          <Header />

          {/* <AnimatedPortrait /> */}

          <h1>I <span className="pop-up" data-info="Sketch, Adobe Photoshop, Adobe XD, Figma, Invision">design</span> and build <span className="pop-up" data-info="JavaScript, React, Node.js, Express.js, Amazon Web Services, PHP, MongoDB, GraphQL, Wordpress, Chrome Extension">web</span> and <span className="pop-up" data-info="React Native, iOS, Android; Swift, Kotlin, Java; Google Firebase, Google APIs, AmazonW eb Services">mobile</span> apps with emphasis on producing user-friendly and useful products.</h1>

          <br/>

          <ExperienceSection />

        </div>

        <Banner />

        <div className="main">

          <ProjectsSection />
          
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
    )
  }
}

export const pageQuery = graphql`
  query HomePageQuery {
    site {
        siteMetadata {
            title
            description
        }
    }
  }
`;
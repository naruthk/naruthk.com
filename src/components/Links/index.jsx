import React from 'react';
import './style.scss';
// import '../../assets/fonts/fontello-771c82e0/css/fontello.css';
import '../../assets/fonts/fontello-98bf82a7/css/fontello.css';
import '../../../node_modules/animate.css/animate.min.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      linkedin: author.linkedin,
      rss: author.rss,
      codepen: author.codepen,
      email: author.email
    };

    return (
      <div className="links animated fadeInDown finite">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
              <i className="icon-twitter-bird" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank" >
              <i className="icon-github-circled" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`http://www.linkedin.com/in/${links.linkedin}`} target="_blank" >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`http://www.codepen.io/${links.codepen}`} target="_blank" >
              <i className="icon-codepen" />
            </a>
          </li>
          {/* <li className="links__list-item">
            <a href={`https://www.vk.com/${links.vk}`} target="_blank" >
              <i className="icon-vkontakte" />
            </a>
          </li> */}
        </ul>
        <ul className="links__list">
          {/* <li className="links__list-item">
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
            </a>
          </li> */}
        </ul>
        {/* <ul className="links__list">
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Links;

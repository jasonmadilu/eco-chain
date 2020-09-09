import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import './styles/footer.css';

export default class Footer extends React.Component {

  render() {
    const newDate = new Date();
    const annee = newDate.getFullYear();
    return(
      <div className="footer-component">
        <div className="footer-container">
          <div className="footer-section">
            <h6>About Us</h6>
            <p>Contact</p>
            <p>Localisation</p>
            <p>Partenaires</p>
          </div>
          <div className="footer-section">
            <h6>Services</h6>
            <p>Précommande</p>
            <p>FAQ</p>
            <p>Commentaires</p>
          </div>
        </div>
        <div className="footer-socialnetwork">
          <h4>Nous suivre</h4>
          <a href="https://www.facebook.com"><FontAwesomeIcon className="icon-fb" icon={ faFacebookSquare} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon className="icon-tw" icon={ faTwitterSquare } /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon className="icon-ig" icon={ faInstagramSquare } /></a>
        </div>
        <div className="footer-copyright">
            <p>Ⓒ Eco Chain {annee} - Tous droits réservés</p>
          </div>
      </div>
    );
  }
}
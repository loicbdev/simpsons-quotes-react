import React from 'react';
import './QuoteCard.css';
import PropTypes from 'prop-types';

function QuoteCard ({quote}){
  return(
    <div className="quoteCard">
       <img className="quoteImage"
        src={quote.image}
        alt={quote.character}
      />
      <p className="cardCharacterName">{quote.character}</p>
      <blockquote>"{quote.quote}"</blockquote>
     
    </div>
  );
}


QuoteCard.propTypes = {
  characterFirstName: PropTypes.string.isRequired,
  characterLastName: PropTypes.string.isRequired,
};

export default QuoteCard;

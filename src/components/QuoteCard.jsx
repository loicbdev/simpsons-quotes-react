import React from 'react';
import './QuoteCard.css';

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

export default QuoteCard;

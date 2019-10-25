import React from 'react';

const DisplayQuote = ({ quote }) => {

    return (
        <div className="DisplayQuote">


            <p>Quote:{quote.location.city}</p>

        </div>
    );
};

export default DisplayQuote;

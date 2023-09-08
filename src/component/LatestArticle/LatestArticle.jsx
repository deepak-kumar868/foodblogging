// import React from 'react'
// import './LatestArticle.css'
// import Card from '../Card/Card'
// import image1 from '../../image/image1.png'
// import image2 from '../../image/image2.png'
// import image3 from '../../image/image3.png'
// import image4 from '../../image/image4.png'
// import image5 from '../../image/image5.png'
// import image6 from '../../image/image6.png'

// const LatestArticle = () => {
//   return (
//     <>
//     <div className="latestcontainer">
//         <div className="latestheading">Latest Articles</div>
//         <div className="latestcardcontainer">
//         <div className="card">
//         <Card className="latestcard" title="Grilled Tomatoes at Home" image={image1}/>
//         </div>
//         <div className="card">
//         <Card className="latestcard" title="Snacks for Travel" image={image2}/>
//         </div>
//         <div className="card">
//         <Card className="latestcard" title="Post-workout Recipes" image={image3}/>
//         </div>
//         <div className="card">
//         <Card className="latestcard" title="How To Grill Corn" image={image4}/>
//         </div>
//         <div className="card">
//         <Card className="latestcard" title="Crunchwrap Supreme" image={image5}/>
//         </div>
//         <div className="card">
//         <Card className="latestcard" title="Broccoli Cheese Soup" image={image6}/>
//         </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default LatestArticle

import React, { useState } from 'react';
import './LatestArticle.css';
import Card from '../Card/Card';
import image1 from '../../image/image1.png';
import image2 from '../../image/image2.png';
import image3 from '../../image/image3.png';
import image4 from '../../image/image4.png';
import image5 from '../../image/image5.png';
import image6 from '../../image/image6.png';

const LatestArticle = () => {
  // Array to hold all the cards' data
  const cardData = [
    { title: 'Grilled Tomatoes at Home', image: image1 },
    { title: 'Snacks for Travel', image: image2 },
    { title: 'Post-workout Recipes', image: image3 },
    { title: 'How To Grill Corn', image: image4 },
    { title: 'Crunchwrap Supreme', image: image5 },
    { title: 'Broccoli Cheese Soup', image: image6 },
  ];

  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    if (currentPage < Math.ceil(cardData.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="latestcontainer">
      <div className="latestheading">Latest Articles</div>
      <div className="latestcardcontainer">
        {currentCards.map((card, index) => (
          <div className="card" key={index}>
            <Card className="latestcard" title={card.title} image={card.image} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className='prevbutton' onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span className='currentpage'>
          {currentPage}/{Math.ceil(cardData.length / cardsPerPage)}
        </span>
        <button className='nextbutton' onClick={nextPage} disabled={currentPage === Math.ceil(cardData.length / cardsPerPage)}>
        &gt;
        </button>
      </div>
    </div>
  );
};

export default LatestArticle;

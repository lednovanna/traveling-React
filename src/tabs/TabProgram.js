import { useState } from 'react';
import './Program.css';

const TabProgram = () => {
    const [category, setCategory] = useState('all');

    const cards = [
        {
            id: 1,
            category: 'beach',
            title: 'Holiday near the sea',
            description: 'Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'sea'
        },
        {
            id: 2,
            category: 'mountains',
            title: 'Holiday in the mountains',
            description: 'Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'mountains'
        },
        {
            id: 3,
            category: 'lake',
            title: 'Holiday on the lake',
            description: 'Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'lake'
        },

        {
            id: 4,
            category: 'beach',
            title: 'Holiday on the island',
            description: 'Lore lorem epspon uldopfaluo',
            imgSrc:'https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'island'
        },

        {
            id: 5,
            category: 'beach',
            title: 'Welcome to Maldives',
            description: 'Lore lorem epspon uldopfaluo Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'Maldives'
        },
        
        {
            id: 6,
            category: 'lake',
            title: 'Holiday on the lake',
            description: 'Lore lorem epspon uldopfaluo Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'lake'
        },

        {
            id: 7,
            category: 'Europe',
            title: 'Welcome to Europe',
            description: 'Lore lorem epspon uldopfaluo Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'Europe'
        },

        {
            id: 8,
            category: 'forest',
            title: 'Holiday in the forest',
            description: 'Lore lorem epspon uldopfaluo Lore lorem epspon uldopfaluo',
            imgSrc: 'https://images.pexels.com/photos/7042926/pexels-photo-7042926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            imgAlt: 'forest'
        },


        
    ];

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    const filteredCards = category === 'all' ? cards : cards.filter(card => card.category === category);

    return (
        <div className="tab-program">
            <div className="category-buttons">
                <button onClick={() => handleCategoryChange('all')}>All</button>
                <button onClick={() => handleCategoryChange('beach')}>Beach</button>
                <button onClick={() => handleCategoryChange('mountains')}>Mountains</button>
                <button onClick={() => handleCategoryChange('lake')}>Lake</button>
            </div>
              <div className="card-grid">
                {filteredCards.map(card => (
                    <div className="card" key={card.id}>
                        <div className="card-container">
                            <div className="card-top">
                                <img src={card.imgSrc} alt={card.imgAlt} />
                            </div>
                            <div className="card-title">
                                <h4>{card.title}</h4>
                            </div>
                            <div className="card-description">
                                {card.description}
                            </div>
                            <button className="card-btn">Choose</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabProgram;
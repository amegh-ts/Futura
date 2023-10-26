import React from 'react';

const SearchResults = ({ searchQuery, searchResults,setActiveNav, setProductDetails }) => {
    console.log('searchQuery:', searchQuery);
    console.log('searchResults:', searchResults);


    const handleCardClick = (result) => {
        setProductDetails(result);
        setActiveNav(2);
        console.log("ahwfjgawfkhjabjfuakefbh",result);
    }

    return (
        <div>
            <h2>Search Results for: <span style={{fontWeight:'400'}}>{searchQuery}</span></h2>
            {/* <p>Search Query: {searchQuery}</p> */}
            <div >
                <div className='b-card-container'>
                    {searchResults.map((result) => (
                        <div key={result.id} className="card-items" onClick={() => handleCardClick(result)}>
                            <img src={result.thumbnail} alt={result.name} className='card-image' />
                            <div className="card-item-details">
                                <span className='card-item-title'>{result.title}</span>
                                <span className='card-item-description'>{result.description}</span>
                                <span>{result.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* <div>
                {searchResults.map((result) => (
                    <div key={result.id}>
                        <h2>{result.title}</h2>
                        <p>{result.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default SearchResults;

import React from 'react'

const catalogue = 
[{
    image: '/images.jpeg',
    title: 'Title 1',
    description: 'Description 1',
    price: 100,
    category: 'Category 1',
    rating: 4
  },
    {
    image: '/images.jpeg',
    title: 'Title 2',
    description: 'Description 2',
    price: 200,
    category: 'Category 2',
    rating: 3
},
{
    image: '/images.jpeg', 
    title: 'Title 3',   
    description: 'Description 3',
    price: 300,
    category: 'Category 3',
    rating: 5
}]

var sortCatalogue = (e) => {
  if (e.target.value === 'category') {
    catalogue.sort((a, b) => a.category.localeCompare(b.category));
  } else
    catalogue.sort((a, b) => a.rating - b.rating); 
}

function Catalogue() {
  return (
    <div>
        <h2>Catalogue</h2>
        <div className="row">
            <div className="sorting">
                <select onChange={sortCatalogue}>
                    <option value="price">Price</option>
                    <option value="category">Category</option>
                </select>
            </div>
        </div>
        <div className="row">
            {catalogue.map((item, index) => (
            <div className="row-md-4" key={index}>
                <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Price: {item.price}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Catalogue
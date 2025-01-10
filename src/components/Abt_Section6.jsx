import React from 'react';

function Abt_Section6() {
  const clients = [
    {
      id: 1,
      name: 'Karioka Studio',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-05.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 2,
      name: 'Andre',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-01.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 3,
      name: 'Mattey Webber',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-02.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 4,
      name: 'Clapat Themes',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-03.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 5,
      name: 'California',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-04.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 6,
      name: 'Rare View',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-08.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 7,
      name: 'Tetris',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-06.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 8,
      name: 'Harington',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-07.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 9,
      name: 'Harington',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-07.png',
      link: 'https://www.clapat.com/',
    },
    {
      id: 10,
      name: 'Tetris',
      image: 'http://clapat-themes.com/wordpress/montoya/wp-content/uploads/2024/04/client-06.png',
      link: 'https://www.clapat.com/',
    },
  ];

  return (
    <div className="section-container">
      {/* Section Title */}
      <div className="title-container">
        <h1 className="section-title">COLLABORATORS</h1>
        <p className="section-subtitle">
          WE DEVELOP GORGEOUS AND MEMORABLE PROJECTS FOR OUR CLIENTS.
        </p>
      </div>

      {/* Client Gallery Section */}
      <div className="clients-gallery">
        <div className="clients-grid">
          {/* First 4 clients */}
          {clients.slice(0, 4).map((client) => (
            <div key={client.id} className="client-item">
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img src={client.image} alt={client.name} className="client-image" />
              </a>
              <div className="client-name">{client.name}</div>
            </div>
          ))}

          {/* Next 4 clients */}
          {clients.slice(4).map((client) => (
            <div key={client.id} className="client-item">
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img src={client.image} alt={client.name} className="client-image" />
              </a>
              <div className="client-name">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Abt_Section6;

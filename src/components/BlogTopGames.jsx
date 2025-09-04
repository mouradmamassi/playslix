import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
const currentYear = new Date().getFullYear();

export default function BlogTopGames() {
  // Define SEO-focused metadata variables
  const pageTitle = `Top 10 Free Online Games on Playslix - Best Games ${currentYear}`;
  const pageDescription = `Discover the top 10 most-played and trending free online games on Playslix for ${currentYear}! From exciting action to relaxing puzzles, find your next favorite game.`;
  const blogTitle = `Top 10 Must-Play Games on Playslix for ${currentYear}`;

  const games = [
    {
      title: 'Hero Transform Race',
      description:
        'Experience the ultimate shape-shifting race where your character morphs into different heroes to overcome wild obstacles. Fast, fun, and addictive! Play Hero Transform Race free online.',
      img: '/images/hero-transform-race.webp', // Reverted to original relative path
      alt: 'Hero Transform Race game screenshot',
    },
    {
      title: 'Animal Block Pop Puzzle',
      description:
        'A colorful and fun match-3 puzzle game where cute animal blocks pop as you match them. Great for brain training and casual play! Try Animal Block Pop Puzzle now.',
      img: '/images/animal-block-pop.webp', // Reverted to original relative path
      alt: 'Animal Block Pop Puzzle game screenshot',
    },
    {
      title: 'NSR Street Car Racing',
      description:
        'Burn rubber in this high-speed, adrenaline-fueled street racing game. Customize your ride and dominate the leaderboard. Play NSR Street Car Racing online.',
      img: '/images/nsr-street-car-racing.webp', // Reverted to original relative path
      alt: 'NSR Street Car Racing game screenshot',
    },
    {
      title: 'Big Block Blast',
      description:
        'Blast giant blocks with satisfying combos and power-ups. A great stress-buster and challenge game in one. Play Big Block Blast free.',
      img: '/images/big-block-blast.webp', // Reverted to original relative path
      alt: 'Big Block Blast game screenshot',
    },
    {
      title: 'Hyper Nurse: Hospital Games',
      description:
        'Step into the shoes of a fast-paced nurse saving lives in a chaotic hospital. Perfect blend of simulation and time management. Play Hyper Nurse: Hospital Games.',
      img: '/images/hyper-nurse.webp', // Reverted to original relative path
      alt: 'Hyper Nurse Hospital Games screenshot',
    },
    {
      title: 'Capybara Go!',
      description:
        'Run, jump, and slide with the internet’s favorite animal—the capybara! A fun endless runner packed with quirky fun. Play Capybara Go! online.',
      img: '/images/capybara-go.webp', // Reverted to original relative path
      alt: 'Capybara Go! game screenshot',
    },
    {
      title: 'Color Cargo Puzzle Rush',
      description:
        'Use logic and timing to sort color-coded cargo in this fast-paced puzzle challenge. Think fast and beat the clock! Play Color Cargo Puzzle Rush.',
      img: '/images/color-cargo-puzzle.webp', // Reverted to original relative path
      alt: 'Color Cargo Puzzle Rush game screenshot',
    },
    {
      title: 'Royal Garden Match',
      description:
        'Decorate a royal garden while solving elegant match-3 puzzles. Beautiful visuals and relaxing gameplay. Play Royal Garden Match free.',
      img: '/images/royal-garden-match.webp', // Reverted to original relative path
      alt: 'Royal Garden Match game screenshot',
    },
    {
      title: 'Soccer Tournament',
      description:
        'Lead your team to victory in this dynamic soccer game. Quick matches, global tournaments, and instant fun. Play Soccer Tournament free.',
      img: '/images/soccer-tournament.webp', // Reverted to original relative path
      alt: 'Soccer Tournament game screenshot',
    },
    {
      title: 'Aventador Vice Crime City',
      description: 'Explore an open-world city with your supercar, complete missions, and survive intense gang battles in this action-packed 3D crime game. Play Aventador Vice Crime City now.',
      img: '/images/aventador-vice-crime-city.webp', // Reverted to original relative path
      alt: 'Aventador Vice Crime City game screenshot',
    },
  ];

  useEffect(() => {
    // Dynamically update the document title for SEO
    document.title = pageTitle;

    // Dynamically set or update the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Add JSON-LD Schema Markup for BlogPosting
    const addBlogSchema = () => {
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogTitle,
        "description": pageDescription,
        "url": window.location.href, // Canonical URL for the blog post
        "image": `https://playslix.com/images/playslix.webp`, // Use a specific image for the blog post if available
        "datePublished": `${currentYear}-01-01T00:00:00+00:00`, // Example, update with actual publish date
        "dateModified": new Date().toISOString(), // Update on every page load as a new year is displayed
        "author": {
          "@type": "Organization", // or Person if applicable
          "name": "Playslix.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Playslix.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://playslix.com/images/playslix.webp", // Replace with your actual logo
            "width": 600,
            "height": 60
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        // Optionally embed Game schema for each game if relevant for the blog's purpose
        "mentions": games.map(game => ({
          "@type": "Game",
          "name": game.title,
          "url": `https://playslix.com/games/${slugify(game.title)}`
        }))
      });
      document.head.appendChild(schemaScript);
      return schemaScript;
    };

    const schemaElement = addBlogSchema();

    // Cleanup function to revert changes when component unmounts
    return () => {
      document.title = "Playslix - Free Online Games"; // Revert to a generic title
      if (metaDescription) {
        metaDescription.remove();
      }
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 font-sans text-gray-800 bg-white shadow-lg rounded-xl my-8">
      {/* Head element content is managed by useEffect for SEO */}
      {/*
        <head>
          <title>Top 10 Must-Play Games on Playslix (({currentYear}) Edition)</title>
          <meta
            name="description"
            content="Discover the top 10 most-played free online games on Playslix! From puzzles to racing, these trending titles are perfect for casual gamers of all ages."
          />
        </head>
      */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-800 leading-tight">
        {blogTitle} 🎮
      </h1>
      <p className="text-center text-xl text-gray-800 max-w-2xl mx-auto mb-10 px-4 leading-snug font-medium">
        Looking for the <strong>best free online games</strong>? These 10 <strong>trending titles</strong> on Playslix are blowing up in {currentYear} — and they’re all <strong>free to play</strong> now! Dive in and find your next obsession.
      </p>

      {games.map((game, index) => {
        const slug = slugify(game.title);
        // Ensure the URL is absolute for external linking consistency and SEO
        const url = `https://playslix.com/game/${slug}`;
        return (
          <div key={game.title} className="flex flex-col md:flex-row gap-6 items-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Link to={url} target="_blank" rel="noopener noreferrer" aria-label={`Play ${game.title} game`}>
                <img
                  src={game.img}
                  alt={game.alt}
                  width={400}
                  height={250}
                  className="rounded-xl shadow-md hover:scale-105 transition-transform duration-200 w-full h-auto object-cover"
                  loading="lazy" // Add this attribute for native lazy loading
                />
              </Link>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-2 text-indigo-700">
                <Link to={url} target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label={`Learn more about ${game.title}`}>
                  {index + 1}. {game.title}
                </Link>
              </h2>
              <p className="text-gray-700 text-base mb-4">{game.description}</p>
              <Link
                to={url}
                target="_blank"
                rel="noopener noreferrer" // Important for security when using target="_blank"
                className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 inline-block font-semibold"
                aria-label={`Play ${game.title} game now`}
              >
                👉 Play {game.title} Now!
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

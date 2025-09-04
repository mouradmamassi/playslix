import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
const currentYear = new Date().getFullYear();

export default function Home() {
  // SEO-focused metadata for the homepage
  const pageTitle = "Playslix.com - Play Free Online Casual Games, No Downloads Needed";
  const pageDescription = "Playslix is your go-to destination for discovering and playing the best free online casual games. Enjoy top-rated puzzles, action, racing & more, instantly in your browser!";

  const games = [
    {
      title: 'Squid Game Green Light Red Light Hints',
      description:
        'Invite to Squid Game. Invite to a fair game of Red lights, eco-friendly lights. Whoever wins this game will win a great deal of prize money. Stop at the red light. Continue when the thumbs-up is on. Follow your personality\'s head motions! Do not rush Red Light, Green Light Sugar Honeycombs Tug-of-war Marbles Glass Stepping Stones The Squid Game Experience the delights of the craze that\'s!',
      img: '/images/squid-game-green.webp',
      alt: 'Squid Game Green Light Red Light Hints game screenshot',
    },
    {
      title: 'Tom & Jerry Run',
      description:
        'Tom and Jerry Run is fun endless runner game such as subway surfers! Run with Jerry throught subway city and jump over obstacles to collect gold coins as in talking tom gold run!',
      img: '/images/tom-jerryr-run.webp',
      alt: 'Tom & Jerry Run game screenshot',
    },
    {
      title: 'Super Mario Run',
      description:
        'Join in a race in the world of mushrooms and magic stars, select and play with any of Mario\'s friends, Luigi, Toadette or Toad, help them get safely to the castles on each level to be one step closer to rescuing the beautiful princess from Bowser\'s claws !',
      img: '/images/super-mario-run.webp',
      alt: 'Super Mario Run game screenshot',
    },
    {
      title: 'Big Block Blast',
      description:
        'Blast giant blocks with satisfying combos and power-ups. A great stress-buster and challenge game in one.',
      img: '/images/big-block-blast.webp',
      alt: 'Big Block Blast game screenshot',
    },
    {
      title: 'Hyper Nurse: Hospital Games',
      description:
        'Step into the shoes of a fast-paced nurse saving lives in a chaotic hospital. Perfect blend of simulation and time management.',
      img: '/images/hyper-nurse.webp',
      alt: 'Hyper Nurse: Hospital Games screenshot',
    },
    {
      title: 'Capybara Go!',
      description:
        'Run, jump, and slide with the internet’s favorite animal—the capybara! A fun endless runner packed with quirky fun.',
      img: '/images/capybara-go.webp',
      alt: 'Capybara Go! game screenshot',
    },
    {
      title: 'Color Cargo Puzzle Rush',
      description:
        'Use logic and timing to sort color-coded cargo in this fast-paced puzzle challenge. Think fast and beat the clock!',
      img: '/images/color-cargo-puzzle.webp',
      alt: 'Color Cargo Puzzle Rush game screenshot',
    },
    {
      title: 'Royal Garden Match',
      description:
        'Decorate a royal garden while solving elegant match-3 puzzles. Beautiful visuals and relaxing gameplay.',
      img: '/images/royal-garden-match.webp',
      alt: 'Royal Garden Match game screenshot',
    },
    {
      title: 'Soccer Tournament',
      description:
        'Lead your team to victory in this dynamic soccer game. Quick matches, global tournaments, and instant fun.',
      img: '/images/soccer-tournament.webp',
      alt: 'Soccer Tournament game screenshot',
    },
    {
      title: 'Aventador Vice Crime City',
      description: 'Explore an open-world city with your supercar, complete missions, and survive intense gang battles in this action-packed 3D crime game.',
      img: '/images/aventador-vice-crime-city.webp',
      alt: 'Aventador Vice Crime City game screenshot',
    },
  ];

  useEffect(() => {
    // Dynamically update the document title for strong SEO signals
    document.title = pageTitle;

    // Dynamically set or update the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Add JSON-LD Schema Markup for WebSite
    const addWebSiteSchema = () => {
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Playslix - Free Online Casual Games",
        "url": "https://playslix.com/", // Replace with your actual domain
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://playslix.com/search?q={search_term_string}" // Replace with your actual search URL structure
          },
          "query-input": "required name=search_term_string"
        }
      });
      document.head.appendChild(schemaScript);
      return schemaScript;
    };

    const schemaElement = addWebSiteSchema();

    // Cleanup function to revert changes when component unmounts
    return () => {
      document.title = "React App"; // Revert to a default title or more generic one
      if (metaDescription) {
        metaDescription.remove();
      }
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans text-gray-800">
      {/* Main heading of the homepage */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4 text-center leading-tight">
        Welcome to <span className="text-purple-600">Playslix</span>! 🎮
      </h1>
      {/* Detailed description with keywords for the platform */}
      <p className="text-xl text-center mx-auto mb-6 px-4 leading-snug max-w-3xl font-medium">
        Playslix is your go-to destination for discovering and playing the <strong>best casual games</strong> — fast, fun, and absolutely free. Enjoy top-rated games you can play instantly with <strong>no downloads</strong> and <strong>no sign-ups</strong>.
      </p>

      
      {/* Game list section */}
      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 rounded-xl shadow-lg bg-white">
        {
          games.map((game) => {
            const slug = slugify(game.title);
            const url = `/game/${slug}`; // Internal link for React Router
            return (
              <div key={game.title} className="flex flex-col items-center text-center">
                <Link to={url} aria-label={`Play ${game.title} game`}>
                  <img
                    src={game.img}
                    alt={game.alt} // Ensure descriptive alt text for each image
                    width={400} // Keep specified width
                    height={250} // Keep specified height
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-200 w-full h-auto object-cover"
                    loading="lazy" // Add this attribute for native lazy loading
                  />
                </Link>
                <h2 className="text-md font-semibold mt-2 text-gray-700">{game.title}</h2>
              </div>
            );
          })
        }
      </section>
    </main>
  );
}
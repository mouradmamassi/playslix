import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SquidGameGreenLightRedLightHints() {
  // SEO-focused metadata for "Squid Game Green Light Red Light Hints"
  const pageTitle = "Squid Game Green Light Red Light Hints Online - Play Free & Master the Game on Playslix.com";
  const pageDescription = "Play Squid Game Green Light Red Light with helpful hints! Master the iconic survival game, learn strategies, and avoid elimination in this free online experience on Playslix.com.";
  const gameName = "Squid Game Green Light Red Light Hints";
  const gameDescription = "Experience the tension of Squid Game Green Light Red Light, now with integrated hints to guide you to victory! This free online game on Playslix.com challenges your reflexes and strategic thinking. Learn when to run and when to freeze to survive each round. Perfect for fans of the show and casual gamers looking for an engaging, high-stakes challenge with a helpful twist.";
  // IMPORTANT: Replace this with the actual embed URL for your Squid Game Green Light Red Light Hints game
  const iframeSrc = "https://html5.gamemonetize.co/etp56l9axninm4hfoue23ndqkvbpkho2/";

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

    // Add JSON-LD Schema Markup for rich snippets in search results
    const addGameSchema = () => {
      const schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Game",
        "name": gameName,
        "description": gameDescription,
        "applicationCategory": "Game",
        "genre": ["Survival", "Puzzle", "Strategy", "Squid Game", "Hints"],
        "url": window.location.href, // Canonical URL for the game page
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": window.location.href
        },
        "publisher": {
          "@type": "Organization",
          "name": "Playslix.com" // Explicitly linking to your website
        },
        "aggregateRating": { // Placeholder: Update with actual ratings if available
          "@type": "AggregateRating",
          "ratingValue": "4.7", // Adjusted for a popular game like Squid Game
          "ratingCount": "750"  // Adjusted for a popular game
        },
        "image": "https://placehold.co/800x450/FF0000/FFFFFF?text=Squid+Game+Green+Light+Red+Light+Hints", // Placeholder: Replace with relevant Squid Game screenshot/image
        "playMode": ["SinglePlayer"]
      });
      document.head.appendChild(schemaScript);
      return schemaScript;
    };

    const schemaElement = addGameSchema();

    // Cleanup function to revert changes when component unmounts
    return () => {
      document.title = "Welcome to the Game Arcade!"; // Revert to a default title for clarity
      if (metaDescription) {
        metaDescription.remove();
      }
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [pageTitle, pageDescription, gameName, gameDescription]); // Added dependencies to ensure effect re-runs if these change dynamically (though they are constants here)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-800">
      <div className="relative w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-2xl flex flex-col items-center space-y-6">
        {/* Back button with enhanced accessibility attributes */}
        <div className="absolute top-4 left-4">
          <Link
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            to="/"
            aria-label="Go back to game list"
            title="Back to Game Arcade"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </Link>
        </div>

        <main className="flex flex-col items-center justify-center w-full mt-12">
          {/* Main heading with prominent keywords for search engines */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4 text-center leading-tight">
            Play <span className="text-red-600">Squid Game Green Light Red Light Hints</span> Online Free
          </h1>
          {/* Detailed game description with relevant keywords and mention of Playslix.com */}
          <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mb-8 px-2">
            {gameDescription}
          </p>

          {/* Game iframe container */}
          <div className="w-full max-w-full min-h-[400px] aspect-video sm:aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              // Descriptive title for the iframe, improving accessibility and context
              title={gameName + " Game with Hints on Playslix.com"}
              src={iframeSrc}
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; gamepads"
              allowFullScreen
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
}
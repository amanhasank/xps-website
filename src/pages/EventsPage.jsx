import React from 'react';

export default function EventsPage() {
  // Placeholder data for events - ideally, this would be fetched from an API/CMS
  const events = [
    {
      id: 1,
      name: 'International Fastener Expo',
      date: 'October 2023',
      location: 'Las Vegas, USA',
      description: 'Participated in the leading fastener industry trade show.',
      media: ['/event-media/expo2023-1.jpg', '/event-media/expo2023-2.jpg'], // Placeholder media
      isUpcoming: false,
    },
    {
      id: 2,
      name: 'India International Trade Fair',
      date: 'November 2023',
      location: 'New Delhi, India',
      description: 'Showcased our latest fastener technologies and products.',
      media: ['/event-media/iitf2023-1.jpg'], // Placeholder media
      isUpcoming: false,
    },
    {
      id: 3,
      name: 'Industry Leaders Summit',
      date: 'March 2024',
      location: 'Mumbai, India',
      description: 'Networking with key players in the manufacturing sector.',
      media: [],
      isUpcoming: false,
    },
     {
      id: 4,
      name: 'Upcoming Global Fastener Symposium',
      date: 'September 2024',
      location: 'Hanover, Germany',
      description: 'Join us to explore future trends in fastener technology.',
      media: [],
      isUpcoming: true,
    },
  ];

  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Exhibitions, Events & Media</h1>

      {/* Upcoming Events */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-blue-800">Upcoming Events</h2>
        {
          upcomingEvents.length === 0 ? (
            <p className="text-gray-700">Please check back later for upcoming events.</p>
          ) : (
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              ))}
            </div>
          )
        }
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-blue-800">Past Events</h2>
         {
          pastEvents.length === 0 ? (
            <p className="text-gray-700">No past events to display at the moment.</p>
          ) : (
            <div className="space-y-6">
              {pastEvents.map(event => (
                <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date} | <strong>Location:</strong> {event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  {event.media.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-blue-600">Media Highlights:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {event.media.map((mediaUrl, index) => (
                          <div key={index} className="relative overflow-hidden rounded-lg shadow-sm">
                             {/* Placeholder for media (images) */}
                            <img src={mediaUrl} alt={`${event.name} media ${index + 1}`} className="w-full h-40 object-cover" />
                            {/* Could add a modal or link here to view media in detail */}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
           )
         }
      </section>

      {/* Note about dynamic content */}
       <div className="mt-12 text-center text-sm text-gray-600">
         <p>Note: Event and media data are currently hardcoded. For easier management, consider fetching this data from an external source like a CMS or API.</p>
       </div>
    </main>
  );
} 
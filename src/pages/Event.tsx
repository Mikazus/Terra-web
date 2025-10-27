import EventCard from '../components/ui/EventCard'

const events = [
  {
    title: "Beach Clean-up at Ancol",
    description: "Join us for a morning of environmental action as we clean up Ancol Beach and help protect marine life.",
    date: "15 November 2024",
    time: "07:00 - 12:00 WIB",
    location: "Ancol Beach, North Jakarta",
    participants: "50/100 participants",
    imageUrl: "/images/event-cleanup.jpg" // Ganti dengan path gambarmu
  },
  // ... Tambahkan 2 event lainnya
];

const Event = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4">
            Event & Activities
          </h1>
          <p className="text-lg text-gray-600">
            Join various fun activities for a better environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Event
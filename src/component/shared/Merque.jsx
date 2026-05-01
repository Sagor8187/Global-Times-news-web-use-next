import Marquee from "react-fast-marquee";

export default function Merque() {

    const news = [
  {
    id: 1,
    title: "AI Technology Growing Rapidly",
    description: "Artificial Intelligence is transforming industries worldwide.",
    category: "Technology",
    date: "2026-05-01",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Global Economy Shows Signs of Recovery",
    description: "Markets are stabilizing after recent economic challenges.",
    category: "Business",
    date: "2026-05-01",
    author: "Sarah Khan"
  },
  {
    id: 3,
    title: "New Advances in Space Exploration",
    description: "Scientists discover new possibilities for deep space missions.",
    category: "Science",
    date: "2026-04-30",
    author: "Alex Smith"
  },
  {
    id: 4,
    title: "Climate Change Awareness Increasing",
    description: "More countries are taking action to reduce carbon emissions.",
    category: "Environment",
    date: "2026-04-30",
    author: "Maria Lopez"
  },
  {
    id: 5,
    title: "Sports Championship Finals Announced",
    description: "Top teams are ready to compete in the final match.",
    category: "Sports",
    date: "2026-04-29",
    author: "David Lee"
  }
];
  return (
    <div className="flex items-center gap-5 p-5 mx-10  bg-gray-200">
        <button className="bg-pink-600 text-white p-2">Latest</button>
        <Marquee pauseOnHover={true}>
 {news.map(n=><span className="font-bold" key={n.id}> Title - {n.title} Description - {n.description}</span>)}
</Marquee>
    </div>
  )
}

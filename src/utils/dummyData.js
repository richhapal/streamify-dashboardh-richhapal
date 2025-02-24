export const mostStreamedSongsLast30Days = [
  { artist: "BTS", song: "Dynamite", totalStreams: "398765432" },
  { artist: "Lil Wayne", song: "Lollipop", totalStreams: "248765432" },
  { artist: "Post Malone", song: "Circles", totalStreams: "459876543" },
  { artist: "Harry Styles", song: "As It Was", totalStreams: "996543210" },
  { artist: "Taylor Swift", song: "Anti-Hero", totalStreams: "385678901" },
  { artist: "Ed Sheeran", song: "Shape of You", totalStreams: "987654321" },
  { artist: "Drake", song: "God's Plan", totalStreams: "410987654" },
  { artist: "Dua Lipa", song: "Levitating", totalStreams: "620987654" },
  { artist: "Imagine Dragons", song: "Believer", totalStreams: "370432198" },
  { artist: "Ariana Grande", song: "7 Rings", totalStreams: "315432678" },
  { artist: "SZA", song: "Kill Bill", totalStreams: "225678901" },
  { artist: "Eminem", song: "Lose Yourself", totalStreams: "235432198" },
  { artist: "Coldplay", song: "Yellow", totalStreams: "356543210" },
  { artist: "Rihanna", song: "Diamonds", totalStreams: "272654321" },
  { artist: "Shawn Mendes", song: "Senorita", totalStreams: "330765432" },
  {
    artist: "The Kid LAROI & Justin Bieber",
    song: "Stay",
    totalStreams: "745678901",
  },
  { artist: "Billie Eilish", song: "Bad Guy", totalStreams: "432567890" },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
    totalStreams: "245678912",
  },
  { artist: "Justin Bieber", song: "Peaches", totalStreams: "590876543" },
  { artist: "Travis Scott", song: "Sicko Mode", totalStreams: "478654321" },
  {
    artist: "The Kid LAROI & Justin Bieber",
    song: "Stay",
    totalStreams: "745678901",
  },
  { artist: "Sam Smith", song: "Unholy", totalStreams: "215765432" },
  { artist: "Doja Cat", song: "Say So", totalStreams: "342876543" },
  { artist: "Camila Cabello", song: "Havana", totalStreams: "205876543" },
  { artist: "Miley Cyrus", song: "Flowers", totalStreams: "765432198" },
  {
    artist: "Lil Nas X & Jack Harlow",
    song: "Industry Baby",
    totalStreams: "698765432",
  },
  { artist: "Maroon 5", song: "Memories", totalStreams: "285876543" },
  { artist: "Kanye West", song: "Stronger", totalStreams: "260987654" },
  { artist: "Ed Sheeran", song: "Bad Habits", totalStreams: "512345678" },
  {
    artist: "Olivia Rodrigo",
    song: "Drivers License",
    totalStreams: "548765432",
  },
];

export const topSortedMostStreamedSongsLast30Days =
  mostStreamedSongsLast30Days.sort((a, b) => b.totalStreams - a.totalStreams);

export const userGrowthData = [
  { month: "Oct", year: "2024", "Active Users": 22345, "Total Users": 44890 },
  { month: "Nov", year: "2024", "Active Users": 24567, "Total Users": 45567 },
  { month: "Dec", year: "2024", "Active Users": 26789, "Total Users": 46780 },
  { month: "Jan", year: "2025", "Active Users": 26789, "Total Users": 46900 },
  { month: "Feb", year: "2025", "Active Users": 19999, "Total Users": 47145 },
  { month: "Mar", year: "2025", "Active Users": 12950, "Total Users": 47689 },
  { month: "Apr", year: "2025", "Active Users": 11500, "Total Users": 49034 },
  { month: "May", year: "2025", "Active Users": 14123, "Total Users": 50012 },
  { month: "Jun", year: "2025", "Active Users": 10432, "Total Users": 51756 },
  { month: "Jul", year: "2025", "Active Users": 10087, "Total Users": 52420 },
  { month: "Aug", year: "2025", "Active Users": 14960, "Total Users": 53005 },
  { month: "Sep", year: "2025", "Active Users": 10775, "Total Users": 54560 },
];

export const revenueData = [
  { source: "Advertising", amount: 46003430.75 },
  { source: "Subscriptions", amount: 672351890.15 },
  { source: "Rentals", amount: 143322980.4 },
  {
    source: "Partnerships and Sponsorships",
    amount: 145294300.2,
  },
  { source: "Merchandise Sales", amount: 77822800.95 },
  { source: "Ticket Sales", amount: 351242000.45 },
];

const getTotalRevenue = () =>
  revenueData.reduce((acc, item) => acc + item.amount, 0);

export const keyMatricsData = [
  {
    title: "All users",
    description: "The total number of registered users",
    value: 222220,
  },
  {
    title: "Active Users",
    description:
      "The number of users who have streamed at least one song in the last 30 days",
    value: 2220,
  },
  {
    title: "Total Streams",
    description: "The total number of song streams",
    value: 1537820,
  },
  {
    title: "Total Revenue",
    description:
      "The total revenue generated from all sources, as shown in the pie chart below.",
    value: getTotalRevenue(),
  },
  {
    title: "Top Artist",
    description: "The artist with the most streams in the past 30 days",
    value: 1000020333,
  },
];

export const recentStreams = [
  {
    songName: "Dynamite",
    artist: "BTS",
    dateStreamed: "2023-10-01",
    streamCount: 12345,
    userId: "bts_official",
  },
  {
    songName: "Lollipop",
    artist: "Lil Wayne",
    dateStreamed: "2023-10-02",
    streamCount: 6789,
    userId: "liltunechi",
  },
  {
    songName: "Circles",
    artist: "Post Malone",
    dateStreamed: "2023-10-03",
    streamCount: 2345,
    userId: "postmalone",
  },
  {
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: "2023-10-04",
    streamCount: 9876,
    userId: "harrystyles",
  },
  {
    songName: "Anti-Hero",
    artist: "Taylor Swift",
    dateStreamed: "2023-10-05",
    streamCount: 5432,
    userId: "taylorswift",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2023-10-06",
    streamCount: 8765,
    userId: "teddysphotos",
  },
  {
    songName: "God's Plan",
    artist: "Drake",
    dateStreamed: "2023-10-07",
    streamCount: 4321,
    userId: "champagnepapi",
  },
  {
    songName: "Levitating",
    artist: "Dua Lipa",
    dateStreamed: "2023-10-08",
    streamCount: 7654,
    userId: "dualipa",
  },
  {
    songName: "Believer",
    artist: "Imagine Dragons",
    dateStreamed: "2023-10-09",
    streamCount: 3210,
    userId: "imaginedragons",
  },
  {
    songName: "7 Rings",
    artist: "Ariana Grande",
    dateStreamed: "2023-10-10",
    streamCount: 6543,
    userId: "arianagrande",
  },
];

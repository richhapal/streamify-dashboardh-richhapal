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

export const revenueDataMonthly = {
  Jan: {
    Advertising: 43430.75,
    Subscriptions: 61890.15,
    Rentals: 142980.4,
    "Partnerships and Sponsorships": 1494300.2,
    "Merchandise Sales": 772800.95,
    "Ticket Sales": 3242000.45,
  },
  Feb: {
    Advertising: 40430.75,
    Subscriptions: 673890.15,
    Rentals: 1422980.4,
    "Partnerships and Sponsorships": 14300.2,
    "Merchandise Sales": 78000.95,
    "Ticket Sales": 512000.45,
  },
  Mar: {
    Advertising: 45430.75,
    Subscriptions: 683890.15,
    Rentals: 1522980.4,
    "Partnerships and Sponsorships": 15300.2,
    "Merchandise Sales": 79000.95,
    "Ticket Sales": 522000.45,
  },
  Apr: {
    Advertising: 46430.75,
    Subscriptions: 693890.15,
    Rentals: 1622980.4,
    "Partnerships and Sponsorships": 16300.2,
    "Merchandise Sales": 80000.95,
    "Ticket Sales": 532000.45,
  },
  May: {
    Advertising: 47430.75,
    Subscriptions: 703890.15,
    Rentals: 1722980.4,
    "Partnerships and Sponsorships": 17300.2,
    "Merchandise Sales": 81000.95,
    "Ticket Sales": 542000.45,
  },
  Jun: {
    Advertising: 48430.75,
    Subscriptions: 713890.15,
    Rentals: 1822980.4,
    "Partnerships and Sponsorships": 18300.2,
    "Merchandise Sales": 82000.95,
    "Ticket Sales": 552000.45,
  },
  Jul: {
    Advertising: 49430.75,
    Subscriptions: 723890.15,
    Rentals: 1922980.4,
    "Partnerships and Sponsorships": 19300.2,
    "Merchandise Sales": 83000.95,
    "Ticket Sales": 562000.45,
  },
  Aug: {
    Advertising: 50430.75,
    Subscriptions: 733890.15,
    Rentals: 2022980.4,
    "Partnerships and Sponsorships": 20300.2,
    "Merchandise Sales": 84000.95,
    "Ticket Sales": 572000.45,
  },
  Sep: {
    Advertising: 51430.75,
    Subscriptions: 743890.15,
    Rentals: 2122980.4,
    "Partnerships and Sponsorships": 21300.2,
    "Merchandise Sales": 85000.95,
    "Ticket Sales": 582000.45,
  },
  Oct: {
    Advertising: 52430.75,
    Subscriptions: 753890.15,
    Rentals: 2222980.4,
    "Partnerships and Sponsorships": 22300.2,
    "Merchandise Sales": 86000.95,
    "Ticket Sales": 592000.45,
  },
  Nov: {
    Advertising: 53430.75,
    Subscriptions: 763890.15,
    Rentals: 2322980.4,
    "Partnerships and Sponsorships": 23300.2,
    "Merchandise Sales": 87000.95,
    "Ticket Sales": 602000.45,
  },
  Dec: {
    Advertising: 54430.75,
    Subscriptions: 773890.15,
    Rentals: 2422980.4,
    "Partnerships and Sponsorships": 24300.2,
    "Merchandise Sales": 88000.95,
    "Ticket Sales": 612000.45,
  },
};

const generateRevenueData = (monthlyData) => {
  const revenueData = [];
  for (const month in monthlyData) {
    for (const source in monthlyData[month]) {
      const existingSource = revenueData.find((item) => item.source === source);
      if (existingSource) {
        existingSource.amount += monthlyData[month][source];
      } else {
        revenueData.push({
          source,
          amount: monthlyData[month][source],
        });
      }
    }
  }
  return revenueData;
};

export const getRevenueMonths = Object.keys(revenueDataMonthly);

export const revenueData = generateRevenueData(revenueDataMonthly);

export const getMonthlyRevenueData = (month) => {
  const monthlyData = revenueDataMonthly[month];
  const result = [];
  for (const source in monthlyData) {
    result.push({ source, amount: monthlyData[source] });
  }
  return result;
};

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

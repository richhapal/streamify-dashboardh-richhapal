## Running the Application

To run the application, follow these steps:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173/` to see the application running.

## Data Visualization

We use [Recharts](https://recharts.org/) for data visualization in this project. Recharts is a composable charting library built on React components.

To add a chart, you can import the necessary components from Recharts and use them in your React components. For example:

```jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  // more data points
];

const MyLineChart = () => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
);

export default MyLineChart;
```

## Additional Features

- **State Management**: We use [Context](https://react.dev/reference/react/useContext) for state management to handle complex state logic.

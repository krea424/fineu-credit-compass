
import * as React from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell
} from 'recharts';

type ChartType = 'bar' | 'line' | 'pie' | 'horizontalBar';

interface ChartProps {
  type: ChartType;
  data: any[];
  dataKey?: string;
  xAxisKey?: string;
  lines?: {dataKey: string, color: string}[];
  bars?: {dataKey: string, color: string}[];
  pieDataKey?: string;
  pieColors?: string[];
  barColors?: string[];
  height?: number;
}

const ChartComponent: React.FC<ChartProps> = ({
  type,
  data,
  dataKey = "value",
  xAxisKey = "name",
  lines,
  bars,
  pieDataKey = "value",
  pieColors = ['#0076CE', '#003366', '#D4AF37', '#88CCEE', '#CC6677'],
  barColors = ['#0076CE', '#003366', '#D4AF37', '#88CCEE', '#CC6677'],
  height = 300
}) => {
  if (type === 'bar') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #f0f0f0',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }} 
          />
          <Legend />
          {bars ? (
            bars.map((bar, index) => (
              <Bar 
                key={index} 
                dataKey={bar.dataKey} 
                fill={bar.color} 
                radius={[4, 4, 0, 0]} 
              />
            ))
          ) : (
            <Bar dataKey={dataKey} fill="#0076CE" radius={[4, 4, 0, 0]} />
          )}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'horizontalBar') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis 
            dataKey={xAxisKey} 
            type="category" 
            tick={{ fontSize: 12 }} 
            width={80}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #f0f0f0',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }} 
          />
          <Legend />
          <Bar 
            dataKey={dataKey} 
            fill="#0076CE" 
            radius={[0, 4, 4, 0]}
            label={{ position: 'right', formatter: (value: number) => `${value}%` }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'line') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey={xAxisKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #f0f0f0',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }} 
          />
          <Legend />
          {lines ? (
            lines.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.color}
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))
          ) : (
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="#0076CE"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey={pieDataKey}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={pieColors[index % pieColors.length]} 
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #f0f0f0',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }} 
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return null;
};

export default ChartComponent;

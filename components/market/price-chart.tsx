"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { marketData } from "@/lib/market-data";

export function PriceChart() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Price History</h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time"
              padding={{ left: 0, right: 0 }}
            />
            <YAxis 
              padding={{ top: 20, bottom: 20 }}
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="hsl(var(--primary))" 
              name="Price ($/kWh)"
            />
            <Line 
              type="monotone" 
              dataKey="volume" 
              stroke="hsl(var(--chart-1))" 
              name="Volume (kWh)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
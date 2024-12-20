"use client";

import { Card } from "@/components/ui/card";
import { Activity, TrendingUp, History } from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-green-500" />
          <h3 className="font-semibold">Current Price</h3>
        </div>
        <p className="text-3xl font-bold mt-2">$46.40/kWh</p>
        <p className="text-sm text-muted-foreground">+2.3% from yesterday</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-500" />
          <h3 className="font-semibold">24h Volume</h3>
        </div>
        <p className="text-3xl font-bold mt-2">10.5 MWh</p>
        <p className="text-sm text-muted-foreground">Total trades: 156</p>
      </Card>

      <Card className="p-4">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-purple-500" />
          <h3 className="font-semibold">Market Status</h3>
        </div>
        <p className="text-3xl font-bold mt-2">Active</p>
        <p className="text-sm text-muted-foreground">Next settlement: 2h 15m</p>
      </Card>
    </div>
  );
}
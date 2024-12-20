"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
import { StatsCards } from "@/components/market/stats-cards";
import { PriceChart } from "@/components/market/price-chart";
import { OrderTable } from "@/components/orders/order-table";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-yellow-500" />
            <h1 className="text-3xl font-bold">Energy Trading Platform</h1>
          </div>
        </div>

        <StatsCards />

        <Tabs defaultValue="market" className="w-full">
          <TabsList>
            <TabsTrigger value="market">Market Overview</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>

          <TabsContent value="market">
            <PriceChart />
          </TabsContent>

          <TabsContent value="orders">
            <OrderTable />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
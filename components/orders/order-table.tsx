"use client";

import { Card } from "@/components/ui/card";
import { orders } from "@/lib/market-data";

export function OrderTable() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-muted">
              <tr>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-6 py-4">
                    <span className={order.type === "Buy" ? "text-green-500" : "text-red-500"}>
                      {order.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.amount}</td>
                  <td className="px-6 py-4">{order.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === "Completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
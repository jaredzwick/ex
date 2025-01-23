import {
  CreditCard,
  Download,
  DollarSign,
  TrendingUp,
  Database,
  Container,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function BillingPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Billing & Usage</h1>
          <p className="text-muted-foreground">
            Manage your billing information and view usage
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download Invoice
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Current Balance</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold mt-2">$1,234.56</p>
          <p className="text-sm text-muted-foreground">
            Next billing date: March 1, 2024
          </p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Month-to-Date Usage</h3>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold mt-2">$892.10</p>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </div>
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Payment Method</h3>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium mt-2">•••• 4242</p>
          <p className="text-sm text-muted-foreground">Expires 12/25</p>
        </div>
      </div>

      <div className="border rounded-lg">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Usage Breakdown</h2>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-sm text-muted-foreground">
                <th className="text-left font-medium pb-4">Service</th>
                <th className="text-right font-medium pb-4">Usage</th>
                <th className="text-right font-medium pb-4">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <Database className="h-5 w-5 text-blue-500" />
                    <span>Databases</span>
                  </div>
                </td>
                <td className="text-right py-4">1.2TB</td>
                <td className="text-right py-4">$450.00</td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <Container className="h-5 w-5 text-green-500" />
                    <span>Containers</span>
                  </div>
                </td>
                <td className="text-right py-4">720 hours</td>
                <td className="text-right py-4">$280.80</td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    {/* <Function className="h-5 w-5 text-purple-500" /> */}
                    <span>Edge Functions</span>
                  </div>
                </td>
                <td className="text-right py-4">2.5M requests</td>
                <td className="text-right py-4">$125.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { Plus, Search, Settings, Key } from "lucide-react";
import { Button } from "../../components/ui/button";

export function KeyValueStorePage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Key-Value Store</h1>
          <p className="text-muted-foreground">
            Manage your distributed key-value stores
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Store
        </Button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search stores..."
            className="w-full pl-9 pr-4 py-2 rounded-md border border-input"
          />
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Key className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">cache-store-{i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Redis • 2GB Memory • Multi-AZ
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">Healthy</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium">Operations/sec</p>
                <p className="text-2xl font-bold">24.5k</p>
                <p className="text-sm text-muted-foreground">
                  +15% from last hour
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Memory Usage</p>
                <p className="text-2xl font-bold">1.2GB</p>
                <p className="text-sm text-muted-foreground">of 2GB</p>
              </div>
              <div>
                <p className="text-sm font-medium">Cache Hit Rate</p>
                <p className="text-2xl font-bold">94.2%</p>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div>
                <p className="text-sm font-medium">Connected Clients</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Peak: 234</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

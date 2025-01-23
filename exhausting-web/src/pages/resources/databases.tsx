import {
  Database,
  Plus,
  Search,
  Settings,
  RefreshCw,
  MoreVertical,
  Shield,
  HardDrive,
  Network,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function DatabasesPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Databases</h1>
          <p className="text-muted-foreground">
            Manage your database instances
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Database
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Instances</p>
            <Database className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
          <p className="text-sm text-muted-foreground">Across all regions</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Storage</p>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">1.2 TB</p>
          <p className="text-sm text-muted-foreground">Used capacity</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Active Connections</p>
            <Network className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">2.4k</p>
          <p className="text-sm text-muted-foreground">Current sessions</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Backup Size</p>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">856 GB</p>
          <p className="text-sm text-muted-foreground">Total backups</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search databases..."
            className="w-full pl-9 pr-4 py-2 rounded-md border border-input"
          />
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border rounded-lg">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">users-db-{i}</h3>
                    <p className="text-sm text-muted-foreground">
                      PostgreSQL • 2 vCPUs • 4GB RAM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Healthy
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium">CPU Usage</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Memory</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: "72%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">72%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Storage</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-orange-500"
                      style={{ width: "85%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">85%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">IOPS</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">60%</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium">Connections</p>
                <p className="text-2xl font-bold">142</p>
                <p className="text-sm text-muted-foreground">Active sessions</p>
              </div>
              <div>
                <p className="text-sm font-medium">Throughput</p>
                <p className="text-2xl font-bold">2.4 MB/s</p>
                <p className="text-sm text-muted-foreground">Current rate</p>
              </div>
              <div>
                <p className="text-sm font-medium">Latency</p>
                <p className="text-2xl font-bold">12 ms</p>
                <p className="text-sm text-muted-foreground">Average</p>
              </div>
              <div>
                <p className="text-sm font-medium">Backups</p>
                <p className="text-2xl font-bold">24 GB</p>
                <p className="text-sm text-muted-foreground">Last 7 days</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

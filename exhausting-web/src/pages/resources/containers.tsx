import {
  Container,
  Plus,
  Search,
  Settings,
  RefreshCw,
  MoreVertical,
  Cpu,
  MemoryStick as Memory,
  Clock,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function ContainersPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Containers</h1>
          <p className="text-muted-foreground">
            Manage your container deployments
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Deploy Container
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Running Containers</p>
            <Container className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">45</p>
          <p className="text-sm text-muted-foreground">Across all clusters</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">CPU Usage</p>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">65%</p>
          <p className="text-sm text-muted-foreground">Average utilization</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Memory Usage</p>
            <Memory className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">4.2 GB</p>
          <p className="text-sm text-muted-foreground">Total allocated</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Uptime</p>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">99.9%</p>
          <p className="text-sm text-muted-foreground">Last 30 days</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search containers..."
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
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Container className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">web-app-{i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Node.js • 1 vCPU • 2GB RAM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Running
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
                      style={{ width: "35%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">35%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Memory</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: "65%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Network I/O</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: "42%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">42%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Disk I/O</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-orange-500"
                      style={{ width: "28%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">28%</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium">Uptime</p>
                <p className="text-2xl font-bold">15d 4h</p>
                <p className="text-sm text-muted-foreground">
                  Since last restart
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Network In</p>
                <p className="text-2xl font-bold">1.2 MB/s</p>
                <p className="text-sm text-muted-foreground">Current rate</p>
              </div>
              <div>
                <p className="text-sm font-medium">Network Out</p>
                <p className="text-2xl font-bold">820 KB/s</p>
                <p className="text-sm text-muted-foreground">Current rate</p>
              </div>
              <div>
                <p className="text-sm font-medium">Restarts</p>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Last 7 days</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

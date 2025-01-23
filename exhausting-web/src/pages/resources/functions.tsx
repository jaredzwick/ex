import {
  FunctionSquare as Function,
  Plus,
  Search,
  Settings,
  RefreshCw,
  MoreVertical,
  Clock,
  Zap,
  Activity,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function FunctionsPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Edge Functions</h1>
          <p className="text-muted-foreground">
            Manage your serverless functions
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Function
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Functions</p>
            <Function className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">89</p>
          <p className="text-sm text-muted-foreground">Deployed functions</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Invocations</p>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">1.2M</p>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Avg. Latency</p>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">75 ms</p>
          <p className="text-sm text-muted-foreground">Last hour</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Error Rate</p>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">0.12%</p>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search functions..."
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
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Function className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">image-process-{i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Node.js • 128MB • 30s timeout
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Active
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
                <p className="text-sm font-medium">Invocations</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Error Rate</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{ width: "2%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">2%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Memory Usage</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Duration</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: "30%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">30%</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium">Total Invocations</p>
                <p className="text-2xl font-bold">245k</p>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div>
                <p className="text-sm font-medium">Avg. Duration</p>
                <p className="text-2xl font-bold">127 ms</p>
                <p className="text-sm text-muted-foreground">Last hour</p>
              </div>
              <div>
                <p className="text-sm font-medium">Memory Peak</p>
                <p className="text-2xl font-bold">98 MB</p>
                <p className="text-sm text-muted-foreground">Last 24 hours</p>
              </div>
              <div>
                <p className="text-sm font-medium">Cold Starts</p>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-muted-foreground">Last hour</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

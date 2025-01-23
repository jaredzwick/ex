import { Link } from "react-router-dom";
import {
  Database,
  Key,
  Container,
  FunctionSquare as Function,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Link to="/dashboard/new-project">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Total Resources
            </h3>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">146</div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <p className="text-xs text-green-500">+12% from last month</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Active Services
            </h3>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">98.2%</div>
            <div className="flex items-center space-x-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <p className="text-xs text-green-500">+0.5% uptime</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Monthly Cost</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">$4,892.20</div>
            <div className="flex items-center space-x-2">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
              <p className="text-xs text-red-500">+8% from last month</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Alerts</h3>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active warnings</p>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Service Health</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Database className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Databases</p>
                      <p className="text-sm text-muted-foreground">
                        12 instances
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Healthy</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Key className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium">Key-Value Stores</p>
                      <p className="text-sm text-muted-foreground">
                        8 instances
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Healthy</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Container className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Containers</p>
                      <p className="text-sm text-muted-foreground">
                        45 running
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <span className="text-sm">Warning</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Function className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-medium">Edge Functions</p>
                      <p className="text-sm text-muted-foreground">
                        89 deployed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Healthy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                  <Database className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Database 'users-prod' scaled
                  </p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center">
                  <Key className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    KV Store 'cache-1' created
                  </p>
                  <p className="text-xs text-muted-foreground">
                    15 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                  <Container className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Container 'web-app' deployed
                  </p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
                  <Function className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Function 'image-resize' updated
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Usage */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Resource Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">CPU Usage</p>
                  <p className="text-sm text-muted-foreground">75%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Memory Usage</p>
                  <p className="text-sm text-muted-foreground">60%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-500"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Storage Usage</p>
                  <p className="text-sm text-muted-foreground">45%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Network Usage</p>
                  <p className="text-sm text-muted-foreground">82%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-orange-500"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Active Regions</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm">US East (N. Virginia)</span>
                </div>
                <span className="text-sm font-medium">45 resources</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm">US West (Oregon)</span>
                </div>
                <span className="text-sm font-medium">32 resources</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm">EU (Ireland)</span>
                </div>
                <span className="text-sm font-medium">28 resources</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <span className="text-sm">Asia Pacific (Tokyo)</span>
                </div>
                <span className="text-sm font-medium">21 resources</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

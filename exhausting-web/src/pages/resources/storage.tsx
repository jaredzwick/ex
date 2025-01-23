import {
  HardDrive,
  Plus,
  Search,
  Settings,
  RefreshCw,
  MoreVertical,
  Upload,
  Database as Storage,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function StoragePage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Object Storage</h1>
          <p className="text-muted-foreground">Manage your storage buckets</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Bucket
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Storage</p>
            <Storage className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">2.4 TB</p>
          <p className="text-sm text-muted-foreground">Used space</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Objects</p>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">1.2M</p>
          <p className="text-sm text-muted-foreground">Total objects</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Transfer Rate</p>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">4.5 MB/s</p>
          <p className="text-sm text-muted-foreground">Current rate</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Buckets</p>
            <Storage className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold mt-2">15</p>
          <p className="text-sm text-muted-foreground">Active buckets</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search buckets..."
            className="w-full pl-9 pr-4 py-2 rounded-md border border-input"
          />
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <>
            <div key={i} className="border rounded-lg">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Storage className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">assets-bucket-{i}</h3>
                      <p className="text-sm text-muted-foreground">
                        Public • Standard Storage • Multi-Region
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-muted-foreground">
                        Available
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
                  <p className="text-sm font-medium">Storage Used</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <div className="flex-1 h-2 rounded-full bg-gray-100">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Objects</p>
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
                <p className="text-sm font-medium">Bandwidth</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-purple-500"
                      style={{ width: "32%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">32%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Operations</p>
                <div className="mt-2 flex items-center space-x-2">
                  <div className="flex-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-orange-500"
                      style={{ width: "78%" }}
                    />
                  </div>
                  <span className="text-sm font-medium">78%</span>
                </div>
              </div>
            </div>
            <div className="px-6 pb-6 grid grid-cols-4 gap-6">
              <div>
                <p className="text-sm font-medium">Total Size</p>
                <p className="text-2xl font-bold">856 GB</p>
                <p className="text-sm text-muted-foreground">Used space</p>
              </div>
              <div>
                <p className="text-sm font-medium">Object Count</p>
                <p className="text-2xl font-bold">245k</p>
                <p className="text-sm text-muted-foreground">Total files</p>
              </div>
              <div>
                <p className="text-sm font-medium">Transfer</p>
                <p className="text-2xl font-bold">2.4 MB/s</p>
                <p className="text-sm text-muted-foreground">Current rate</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Access</p>
                <p className="text-2xl font-bold">2m ago</p>
                <p className="text-sm text-muted-foreground">Last operation</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

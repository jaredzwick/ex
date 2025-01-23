import { Key, Terminal, Globe, Code } from "lucide-react";
import { Button } from "../../components/ui/button";

export function KeyValueDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Key className="h-6 w-6 text-purple-500" />
        <h1 className="text-3xl font-bold">Key-Value Store Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            Ex Key-Value Store provides a distributed, high-performance
            key-value storage solution. Perfect for caching, session storage,
            and real-time data access.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage your key-value stores from the command line.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                HTTP interface for all key-value operations.
              </p>
              <Button variant="outline" size="sm">
                API Reference
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Code className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">SDK</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native client libraries for easy integration.
              </p>
              <Button variant="outline" size="sm">
                View SDKs
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">CLI Usage</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Create a new key-value store
Ex kv create my-store --tier standard

# Set a value
Ex kv set my-store my-key "my-value"

# Get a value
Ex kv get my-store my-key

# List all keys
Ex kv keys my-store

# Delete a key
Ex kv delete my-store my-key`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Create a store
POST /api/v1/kvstores
{
  "name": "my-store",
  "tier": "standard"
}

# Set a value
PUT /api/v1/kvstores/{store_id}/keys/{key}
{
  "value": "my-value"
}

# Get a value
GET /api/v1/kvstores/{store_id}/keys/{key}

# List keys
GET /api/v1/kvstores/{store_id}/keys`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">SDK Example (Node.js)</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`import { Ex } from '@Ex/sdk';

const client = new Ex({
  apiKey: process.env.Ex_API_KEY
});

// Create a store
const store = await client.kvstore.create({
  name: 'my-store',
  tier: 'standard'
});

// Set a value
await client.kvstore.set(store.id, 'my-key', 'my-value');

// Get a value
const value = await client.kvstore.get(store.id, 'my-key');

// List all keys
const keys = await client.kvstore.listKeys(store.id);`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Batch Operations
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Perform multiple operations in a single request for better
                  performance.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex kv batch my-store --file operations.json

# REST API
POST /api/v1/kvstores/{store_id}/batch
{
  "operations": [
    { "type": "set", "key": "key1", "value": "value1" },
    { "type": "set", "key": "key2", "value": "value2" }
  ]
}

# SDK
await client.kvstore.batch(store.id, [
  { type: 'set', key: 'key1', value: 'value1' },
  { type: 'set', key: 'key2', value: 'value2' }
]);`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                TTL (Time To Live)
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Set expiration times for your keys.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex kv set my-store my-key "my-value" --ttl 3600

# REST API
PUT /api/v1/kvstores/{store_id}/keys/{key}
{
  "value": "my-value",
  "ttl": 3600
}

# SDK
await client.kvstore.set(store.id, 'my-key', 'my-value', {
  ttl: 3600
});`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Monitoring
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Monitor usage and performance metrics.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex kv metrics my-store --period 1h

# REST API
GET /api/v1/kvstores/{store_id}/metrics?period=1h

# SDK
const metrics = await client.kvstore.getMetrics(store.id, {
  period: '1h'
});`}</code>
                  </pre>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

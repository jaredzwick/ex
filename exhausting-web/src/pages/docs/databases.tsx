import { Database, Terminal, Globe, Code } from "lucide-react";
import { Button } from "../../components/ui/button";

export function DatabasesDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Database className="h-6 w-6 text-blue-500" />
        <h1 className="text-3xl font-bold">Database Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            Ex Databases provides fully managed PostgreSQL, MySQL, and Redis
            instances. Choose your preferred way to interact with the service:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use our command-line interface for quick operations.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Direct HTTP access to all database operations.
              </p>
              <Button variant="outline" size="sm">
                API Reference
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Code className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">SDK</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native libraries for your programming language.
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
              <code>{`# Install the CLI
npm install -g Ex-cli

# Initialize a new database
Ex db create my-database --type postgresql --tier standard

# List all databases
Ex db list

# Get connection details
Ex db connection-info my-database`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Create a database
POST /api/v1/databases
{
  "name": "my-database",
  "type": "postgresql",
  "tier": "standard",
  "region": "us-east-1"
}

# List databases
GET /api/v1/databases

# Get database details
GET /api/v1/databases/{database_id}`}</code>
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

// Create a database
const db = await client.databases.create({
  name: 'my-database',
  type: 'postgresql',
  tier: 'standard',
  region: 'us-east-1'
});

// List all databases
const databases = await client.databases.list();

// Get connection info
const connectionInfo = await client.databases.getConnectionInfo('my-database');`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Scaling a Database
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  You can scale your database vertically (compute/memory) or
                  horizontally (read replicas).
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex db scale my-database --tier premium

# REST API
PATCH /api/v1/databases/{database_id}
{
  "tier": "premium"
}

# SDK
await client.databases.scale('my-database', {
  tier: 'premium'
});`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Creating Backups
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Create manual backups or configure automated backup schedules.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex db backup create my-database --name manual-backup-1

# REST API
POST /api/v1/databases/{database_id}/backups
{
  "name": "manual-backup-1"
}

# SDK
await client.databases.createBackup('my-database', {
  name: 'manual-backup-1'
});`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Monitoring & Metrics
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Access performance metrics and set up monitoring alerts.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# CLI
Ex db metrics my-database --period 24h

# REST API
GET /api/v1/databases/{database_id}/metrics?period=24h

# SDK
const metrics = await client.databases.getMetrics('my-database', {
  period: '24h'
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

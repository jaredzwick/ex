import { Container, Terminal, Globe, Code } from "lucide-react";
import { Button } from "../../components/ui/button";

export function ContainersDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Container className="h-6 w-6 text-green-500" />
        <h1 className="text-3xl font-bold">Container Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            CloudStack Containers provides a fully managed container
            orchestration platform. Choose your preferred way to interact with
            the service:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Deploy and manage containers from the command line.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full API access for container operations.
              </p>
              <Button variant="outline" size="sm">
                API Reference
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Code className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">SDK</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Native libraries for your preferred language.
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
              <code>{`# Deploy a container
$ cloudstack containers deploy \\
    --image nginx:latest \\
    --name web-app \\
    --replicas 3 \\
    --cpu 2 \\
    --memory 4Gi

# List containers
$ cloudstack containers list

# Scale containers
$ cloudstack containers scale web-app --replicas 5

# View container logs
$ cloudstack containers logs web-app`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Deploy a container
POST /api/v1/containers
{
  "image": "nginx:latest",
  "name": "web-app",
  "replicas": 3,
  "resources": {
    "cpu": 2,
    "memory": "4Gi"
  }
}

# List containers
GET /api/v1/containers

# Scale containers
PATCH /api/v1/containers/{name}/scale
{
  "replicas": 5
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">SDK Example (Node.js)</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`import { CloudStack } from '@cloudstack/sdk';

const client = new CloudStack({
  apiKey: process.env.CLOUDSTACK_API_KEY
});

// Deploy a container
const container = await client.containers.deploy({
  image: 'nginx:latest',
  name: 'web-app',
  replicas: 3,
  resources: {
    cpu: 2,
    memory: '4Gi'
  }
});

// List containers
const containers = await client.containers.list();

// Scale containers
await client.containers.scale('web-app', {
  replicas: 5
});`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Container Networking
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure networking, load balancing, and service discovery.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Expose a container
$ cloudstack containers expose web-app --port 80

# Configure load balancer
$ cloudstack containers lb create web-app \\
    --type application \\
    --port 80 \\
    --target-port 8080`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Health Checks
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure container health checks and auto-healing.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Add health check
$ cloudstack containers health web-app \\
    --path /health \\
    --port 8080 \\
    --interval 30s

# View health status
$ cloudstack containers health-status web-app`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Auto-scaling
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure automatic scaling based on metrics.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Configure auto-scaling
$ cloudstack containers autoscale web-app \\
    --min 2 \\
    --max 10 \\
    --cpu-percent 75

# View scaling history
$ cloudstack containers autoscale-history web-app`}</code>
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

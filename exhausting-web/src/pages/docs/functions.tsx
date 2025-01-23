import {
  FunctionSquare as Function,
  Terminal,
  Globe,
  Code,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export function FunctionsDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <Function className="h-6 w-6 text-orange-500" />
        <h1 className="text-3xl font-bold">Edge Functions Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            CloudStack Edge Functions lets you run serverless functions globally
            at the edge. Choose your preferred way to interact with the service:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Deploy and manage functions from the command line.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full API access for function operations.
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
              <code>{`# Create a new function
$ cloudstack fn create image-resize \\
    --runtime node18 \\
    --memory 512 \\
    --timeout 30

# Deploy function code
$ cloudstack fn deploy image-resize \\
    --source ./function

# List functions
$ cloudstack fn list

# Invoke function
$ cloudstack fn invoke image-resize \\
    --data '{"width": 800, "height": 600}'`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Create a function
POST /api/v1/functions
{
  "name": "image-resize",
  "runtime": "node18",
  "memory": 512,
  "timeout": 30
}

# Deploy function code
PUT /api/v1/functions/{name}/code
Content-Type: application/zip
[function code as zip]

# List functions
GET /api/v1/functions

# Invoke function
POST /api/v1/functions/{name}/invoke
{
  "width": 800,
  "height": 600
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

// Create a function
const fn = await client.functions.create({
  name: 'image-resize',
  runtime: 'node18',
  memory: 512,
  timeout: 30
});

// Deploy function code
await client.functions.deploy('image-resize', {
  source: './function'
});

// List functions
const functions = await client.functions.list();

// Invoke function
const result = await client.functions.invoke('image-resize', {
  width: 800,
  height: 600
});`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Environment Variables
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Manage environment variables for your functions.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Set environment variables
$ cloudstack fn env set image-resize \\
    API_KEY=xxx \\
    DEBUG=true

# List environment variables
$ cloudstack fn env list image-resize`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Custom Domains
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure custom domains for your functions.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Add custom domain
$ cloudstack fn domain add image-resize \\
    --domain api.example.com

# Configure SSL certificate
$ cloudstack fn domain ssl image-resize \\
    --cert cert.pem \\
    --key key.pem`}</code>
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
                  Monitor function performance and errors.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# View metrics
$ cloudstack fn metrics image-resize \\
    --period 24h

# View logs
$ cloudstack fn logs image-resize \\
    --tail`}</code>
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

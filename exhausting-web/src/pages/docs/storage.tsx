import { HardDrive, Terminal, Globe, Code } from "lucide-react";
import { Button } from "../../components/ui/button";

export function StorageDocPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center space-x-2 mb-8">
        <HardDrive className="h-6 w-6 text-indigo-500" />
        <h1 className="text-3xl font-bold">Object Storage Documentation</h1>
      </div>

      <div className="prose max-w-none">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-muted-foreground mb-6">
            CloudStack Object Storage provides scalable and secure object
            storage. Choose your preferred way to interact with the service:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border rounded-lg p-6">
              <Terminal className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">CLI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage storage from the command line.
              </p>
              <Button variant="outline" size="sm">
                Install CLI
              </Button>
            </div>

            <div className="border rounded-lg p-6">
              <Globe className="h-6 w-6 mb-4" />
              <h3 className="text-lg font-medium mb-2">REST API</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full API access for storage operations.
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
              <code>{`# Create a bucket
$ cloudstack storage create my-bucket \\
    --region global \\
    --class standard

# Upload a file
$ cloudstack storage upload my-bucket \\
    --source ./image.jpg \\
    --destination images/image.jpg

# List objects
$ cloudstack storage ls my-bucket

# Download an object
$ cloudstack storage download my-bucket \\
    --source images/image.jpg \\
    --destination ./image.jpg`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">REST API</h2>
          <div className="bg-muted rounded-lg p-4 mb-4">
            <pre className="text-sm">
              <code>{`# Create a bucket
POST /api/v1/storage/buckets
{
  "name": "my-bucket",
  "region": "global",
  "class": "standard"
}

# Upload an object
PUT /api/v1/storage/buckets/{bucket}/objects/{key}
Content-Type: application/octet-stream
[file content]

# List objects
GET /api/v1/storage/buckets/{bucket}/objects

# Download an object
GET /api/v1/storage/buckets/{bucket}/objects/{key}`}</code>
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

// Create a bucket
const bucket = await client.storage.createBucket({
  name: 'my-bucket',
  region: 'global',
  class: 'standard'
});

// Upload an object
await client.storage.upload('my-bucket', {
  source: './image.jpg',
  destination: 'images/image.jpg'
});

// List objects
const objects = await client.storage.listObjects('my-bucket');

// Download an object
await client.storage.download('my-bucket', {
  source: 'images/image.jpg',
  destination: './image.jpg'
});`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Operations</h2>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Access Control
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure bucket and object permissions.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Set bucket policy
$ cloudstack storage policy set my-bucket \\
    --policy public-read

# Generate presigned URL
$ cloudstack storage url my-bucket \\
    --key images/image.jpg \\
    --expires 3600`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Lifecycle Rules
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Configure object lifecycle management.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Add lifecycle rule
$ cloudstack storage lifecycle add my-bucket \\
    --prefix images/ \\
    --days 30 \\
    --action delete

# List lifecycle rules
$ cloudstack storage lifecycle list my-bucket`}</code>
                  </pre>
                </div>
              </div>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Versioning
              </summary>
              <div className="mt-4">
                <p className="text-muted-foreground mb-4">
                  Enable and manage object versioning.
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <pre className="text-sm">
                    <code>{`# Enable versioning
$ cloudstack storage versioning enable my-bucket

# List versions
$ cloudstack storage versions list my-bucket \\
    --key images/image.jpg`}</code>
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

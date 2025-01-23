import { useState } from "react";
import { Button } from "../components/ui/button";
import { User } from "lucide-react";

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                {isEditing && <Button variant="outline">Change Avatar</Button>}
              </div>
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Company Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  defaultValue="TechCorp Inc."
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Job Title</label>
                <input
                  type="text"
                  defaultValue="Senior Developer"
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Address</label>
                <textarea
                  defaultValue="123 Tech Street&#10;San Francisco, CA 94105&#10;United States"
                  disabled={!isEditing}
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-medium mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Time Zone</label>
                <select
                  disabled={!isEditing}
                  defaultValue="America/Los_Angeles"
                  className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                >
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="UTC">UTC</option>
                  <option value="Europe/London">London (GMT)</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notifications"
                  defaultChecked
                  disabled={!isEditing}
                  className="rounded border-input"
                />
                <label htmlFor="notifications" className="text-sm font-medium">
                  Receive email notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client"

import { FC, useState } from 'react';
import Button from '../ui/Button';

const Settings: FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <p className="text-foreground-light mb-6">
        Manage your account preferences and settings.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-background rounded">
          <div>
            <h3 className="font-medium">Email Notifications</h3>
            <p className="text-sm text-foreground-light">
              Receive updates about orders and promotions
            </p>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              id="notifications"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
            <label
              htmlFor="notifications"
              className="block bg-background w-14 h-8 rounded-full peer-checked:bg-primary cursor-pointer"></label>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6`}></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border border-background rounded">
          <div>
            <h3 className="font-medium">Two-Factor Authentication</h3>
            <p className="text-sm text-foreground-light">
              Add an extra layer of security to your account
            </p>
          </div>
          <Button variant="outline" size="sm">
            Enable
          </Button>
        </div>

        <div className="flex items-center justify-between p-4 border border-background rounded">
          <div>
            <h3 className="font-medium">Password</h3>
            <p className="text-sm text-foreground-light">
              Update your password
            </p>
          </div>
          <Button variant="outline" size="sm">
            Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

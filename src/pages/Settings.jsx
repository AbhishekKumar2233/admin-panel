import { useState } from "react";
import Card from "../components/ui/Card";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <Card>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Account Settings
        </h2>
        <p className="text-sm text-gray-500">
          Manage your profile and system preferences
        </p>
      </div>

      {/* Profile Card */}
      <div className="p-5 rounded-2xl bg-white shadow-sm mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>

        <button className="text-sm text-indigo-600 hover:underline">
          Edit Profile
        </button>
      </div>

      {/* General Settings */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">
          General
        </h3>

        <div className="space-y-3">
          <input
            className="w-full p-3 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Full Name"
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Email Address"
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">
          Preferences
        </h3>

        <div className="space-y-3">
          {/* Dark Mode */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">Dark Mode</p>
              <p className="text-xs text-gray-500">
                Enable dark theme across dashboard
              </p>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                  darkMode ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">
                Email Notifications
              </p>
              <p className="text-xs text-gray-500">
                Receive order & system updates
              </p>
            </div>

            <button
              onClick={() => setEmailNotif(!emailNotif)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                emailNotif ? "bg-emerald-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                  emailNotif ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* Two Factor Auth */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
            <div>
              <p className="font-medium text-gray-900">
                Two-Factor Authentication
              </p>
              <p className="text-xs text-gray-500">
                Add extra security to your account
              </p>
            </div>

            <button
              onClick={() => setTwoFA(!twoFA)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                twoFA ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                  twoFA ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
          Save Changes
        </button>
      </div>
    </Card>
  );
}
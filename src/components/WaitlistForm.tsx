"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2">
        Join the Waitlist
      </h2>
      <p className="text-gray-600 text-center mb-4">
        Be the first to get access when we launch.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {status === "loading" ? "Please wait..." : "Join Waitlist"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 text-center mt-3">You're in! 🎉</p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-center mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}

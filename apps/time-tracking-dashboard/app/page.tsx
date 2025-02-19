"use client";

import Image from "next/image";
import { useState } from "react";
import data from "../data.json";

type TimeFrame = "daily" | "weekly" | "monthly";

export default function Home() {
  const [timeframe, setTimeframe] = useState<TimeFrame>("weekly");

  const getTimeframeText = (frame: TimeFrame) =>
    frame === "daily"
      ? "Yesterday"
      : frame === "weekly"
        ? "Last Week"
        : "Last Month";

  return (
    <div className="dashboard">
      <h1>Challenge en cours de réalisation 🚧</h1>
      <main className="dashboard-grid">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-info">
            <Image
              src="/images/image-jeremy.png"
              alt="Jeremy picture"
              width={78}
              height={78}
              className="profile-image"
            />
            <div className="profile-text">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="time-select">
            {["daily", "weekly", "monthly"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period as TimeFrame)}
                className={`time-button ${timeframe === period ? "active" : ""}`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Activity Cards */}
        {data.map((activity) => (
          <div
            key={activity.title}
            className={`activity-card ${activity.title.toLowerCase()}`}
          >
            <div className="card-icon">
              <Image
                src={`/images/${activity.icon}`}
                alt={`${activity.title} icon`}
                width={64}
                height={64}
              />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h2>{activity.title}</h2>
                <button className="ellipsis">•••</button>
              </div>
              <div className="card-stats">
                <p className="hours">
                  {activity.timeframes[timeframe].current}hrs
                </p>
                <p className="previous">
                  {getTimeframeText(timeframe)} -{" "}
                  {activity.timeframes[timeframe].previous}hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

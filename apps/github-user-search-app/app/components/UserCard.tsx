"use client";

import Image from "next/image";

interface UserCardProps {
  avatar_url: string;
  name: string;
  login: string;
  bio: string | null;
  created_at: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
}

export default function UserCard({
  avatar_url,
  name,
  login,
  bio,
  created_at,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  company,
}: UserCardProps) {
  const formattedDate = new Date(created_at).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="user-card">
      {/* Header avec image et infos */}
      <div className="user-header">
        <div className="user-avatar">
          <Image
            src={avatar_url}
            alt={`${name || login}'s profile picture`}
            width={100}
            height={100}
            className="avatar"
          />
          <div className="user-info">
            <h1>{name || login}</h1>
            <p className="username">@{login}</p>
          </div>
        </div>

        <div className="user-join">
          <p className="joined">Joined {formattedDate}</p>
        </div>
      </div>

      {/* section avec bio-stats-réseaux */}
      <div className="user-content">
        {/* Bio */}
        <p className={`bio ${!bio ? "empty" : ""}`}>
          {bio || "This profile has no bio"}
        </p>

        {/* Statistiques */}
        <div className="stats">
          <div className="details-stats">
            <h4>Repos</h4>
            <p>{public_repos}</p>
          </div>
          <div className="details-stats">
            <h4>Followers</h4>
            <p>{followers}</p>
          </div>
          <div className="details-stats">
            <h4>Following</h4>
            <p>{following}</p>
          </div>
        </div>

        {/* Détails utilisateur */}
        <div className="user-details">
          <div className={`detail-item ${!location ? "not-available" : ""}`}>
            <Image
              src="/icon-location.svg"
              alt="Location icon"
              width={16}
              height={16}
              className="icon"
            />
            <p>{location || "Not Available"}</p>
          </div>

          <div
            className={`detail-item ${!twitter_username ? "not-available" : ""}`}
          >
            <Image
              src="/icon-twitter.svg"
              alt="Twitter icon"
              width={16}
              height={16}
              className="icon"
            />
            {twitter_username ? (
              <a
                href={`https://twitter.com/${twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="user-link"
              >
                @{twitter_username}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>

          <div className={`detail-item ${!blog ? "not-available" : ""}`}>
            <Image
              src="/icon-website.svg"
              alt="Website icon"
              width={16}
              height={16}
              className="icon"
            />
            {blog ? (
              <a
                href={blog.startsWith("http") ? blog : `https://${blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="user-link"
              >
                {blog}
              </a>
            ) : (
              <p>{blog || "Not Available"}</p>
            )}
          </div>

          <div className={`detail-item ${!company ? "not-available" : ""}`}>
            <Image
              src="/icon-company.svg"
              alt="Company icon"
              width={16}
              height={16}
              className="icon"
            />
            {company ? (
              <p>{company.replace("@", "")}</p>
            ) : (
              <p>{company || "Not Available"}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

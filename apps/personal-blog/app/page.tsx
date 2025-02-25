"use client";

import React from "react";

const articles = [
  {
    title:
      "Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated",
    date: "February 18, 2025",
    description:
      "Thoughts on maintaining energy and focus through outdoor activities and exercise.",
  },
  {
    title: "Reading for Inspiration: 5 Books That Shaped My Coding Journey",
    date: "February 15, 2025",
    description:
      "A few of my favorite books, both fiction and non-fiction, that keep me motivated.",
  },
  {
    title: "Overcoming Imposter Syndrome as a New Developer",
    date: "February 10, 2025",
    description:
      "Some tips and personal reflections on dealing with self-doubt when learning to code.",
  },
  {
    title: "Exploring the World of Responsive Design",
    date: "February 4, 2025",
    description:
      "The importance of making websites look great on different devices.",
  },
  {
    title: "Building a Project with Frontend Mentor: Lessons Learned",
    date: "February 1, 2025",
    description:
      "Insights from my first project with Frontend Mentor, including challenges and triumphs.",
  },
  {
    title: "My Favorite Dev Tools for Productivity",
    date: "January 29, 2025",
    description:
      "A quick look at the tools I rely on, from code editors to browser extensions.",
  },
  {
    title: "Understanding JavaScript Basics",
    date: "January 28, 2025",
    description:
      "My adventure into JavaScript's fundamentals—variables, functions, loops, and more.",
  },
  {
    title: "Learning HTML & CSS: My First Week",
    date: "January 16, 2025",
    description:
      "A recap of my first steps in web development, from basic tags to styling techniques.",
  },
  {
    title: "Why I Chose Front-End Web Development",
    date: "January 12, 2025",
    description:
      "I share the reasons behind my shift to front-end development and why this path excites me.",
  },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">My Articles</h1>
      <p className="text-gray-500 text-center mb-8">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>

      <ul className="space-y-6">
        {articles.map((article, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
              {article.title}
            </h2>
            <p className="text-sm text-gray-500">{article.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {article.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

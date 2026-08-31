"use client";

import { usePathname } from "next/navigation";

type AudioItem = {
  title: string;
  src: string;
};

type AudioConfig = {
  summary: string;
  title: string;
  note: string;
  items: AudioItem[];
};

const audioByRoute: Record<string, AudioConfig> = {
  "/": {
    summary: "Why This Exists",
    title: "A welcome from Darren",
    note: "A brief introduction to why The Way exists and what it is meant to pass forward.",
    items: [{ title: "Why This Exists", src: "/audio/the-way-homepage-why-this-exists.mp3" }],
  },
  "/the-way": {
    summary: "The Way in Darren’s voice",
    title: "A Stronger Starting Point",
    note: "The flagship spoken introduction to The Way — inheritance without a predetermined destination.",
    items: [{ title: "A Stronger Starting Point", src: "/audio/the-way-stronger-starting-point.mp3" }],
  },
  "/your-way": {
    summary: "Now It Becomes Yours",
    title: "Now It Becomes Yours",
    note: "A short handoff from Darren: take what helps, question what does not, and make the learning your own.",
    items: [{ title: "Now It Becomes Yours", src: "/audio/your-way-now-it-becomes-yours.mp3" }],
  },
  "/the-way/constitution": {
    summary: "Why have a Constitution?",
    title: "Why Have a Constitution?",
    note: "A brief orientation from Darren. The written Constitution remains the authoritative text.",
    items: [{ title: "Why Have a Constitution?", src: "/audio/the-way-constitution-introduction.mp3" }],
  },
  "/contribute": {
    summary: "Add Your Dot",
    title: "Pass It Forward — Add Your Dot",
    note: "A personal invitation to preserve something useful from your own lived experience.",
    items: [{ title: "Add Your Dot", src: "/audio/pass-it-forward-add-your-dot.mp3" }],
  },
  "/about": {
    summary: "What I’m Trying to Leave Behind",
    title: "What I’m Trying to Leave Behind",
    note: "Darren reflects on legacy, stewardship, and what he hopes becomes possible for those who come after.",
    items: [{ title: "What I’m Trying to Leave Behind", src: "/audio/about-what-im-trying-to-leave-behind.mp3" }],
  },
  "/letters/why-these-letters": {
    summary: "Hear this Letter",
    title: "Why These Letters",
    note: "The introduction to Letters from Darren, read by Darren.",
    items: [{ title: "Why These Letters", src: "/audio/letters-why-these-letters.mp3" }],
  },
  "/books/for-those-who-come-after-us": {
    summary: "Listen inside Book 1",
    title: "Author-read previews",
    note: "The same three selections offered for reading are also available in Darren’s audiobook narration.",
    items: [
      { title: "Prologue — When You Need Me", src: "/audio/book1-prologue-when-you-need-me.mp3" },
      { title: "Chapter 9 — Connect the Dots", src: "/audio/book1-ch09-connect-the-dots.mp3" },
      { title: "Chapter 29 — What I Hope You Keep", src: "/audio/book1-ch29-what-i-hope-you-keep.mp3" },
    ],
  },
  "/books/for-those-who-come-after-us/prologue": {
    summary: "Hear Darren read it",
    title: "Prologue — When You Need Me",
    note: "Author-read audiobook narration of this preview.",
    items: [{ title: "When You Need Me", src: "/audio/book1-prologue-when-you-need-me.mp3" }],
  },
  "/books/for-those-who-come-after-us/connect-the-dots": {
    summary: "Hear Darren read it",
    title: "Chapter 9 — Connect the Dots",
    note: "Author-read audiobook narration of this complete chapter preview.",
    items: [{ title: "Connect the Dots", src: "/audio/book1-ch09-connect-the-dots.mp3" }],
  },
  "/books/for-those-who-come-after-us/chapter-29-excerpt": {
    summary: "Hear Darren read it",
    title: "Chapter 29 — What I Hope You Keep",
    note: "Author-read audiobook narration of this selected excerpt.",
    items: [{ title: "What I Hope You Keep", src: "/audio/book1-ch29-what-i-hope-you-keep.mp3" }],
  },
};

export function ListeningLayer() {
  const pathname = usePathname();
  const route = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const config = audioByRoute[route];

  if (!config) return null;

  return (
    <aside className="listen-dock" aria-label="Optional audio from Darren">
      <details key={route}>
        <summary>
          <span className="listen-mark" aria-hidden="true">▶</span>
          <span className="listen-summary-copy">
            <span>Listen</span>
            <strong>{config.summary}</strong>
          </span>
        </summary>
        <div className="listen-panel">
          <div className="listen-panel-head">
            <span>Darren’s voice</span>
            <h2>{config.title}</h2>
            <p>{config.note}</p>
          </div>
          <div className="listen-items">
            {config.items.map((item) => (
              <div className="listen-item" key={item.src}>
                {config.items.length > 1 && <strong>{item.title}</strong>}
                <audio controls preload="metadata" aria-label={`Listen to ${item.title}`}>
                  <source src={item.src} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              </div>
            ))}
          </div>
          <small className="listen-note">Nothing plays automatically. Listening is always optional.</small>
        </div>
      </details>
    </aside>
  );
}

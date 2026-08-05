"use client";

import { useState } from "react";
import { profile } from "../data/profile";
import { DownloadIcon, ExternalIcon } from "../components/ui/icons";

/**
 * Inline PDF preview. Browsers without a PDF plugin (and most mobile
 * browsers) fall back to the download/open actions instead of a blank frame.
 */
export default function PdfEmbed() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-raised overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgb(var(--border-subtle))] p-4">
        <p className="text-sm font-semibold">
          Original PDF
          <span className="muted ml-2 font-normal">
            updated {profile.cv.updated}
          </span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="chip px-3 py-1.5 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-300"
          >
            {expanded ? "Shrink" : "Expand"}
          </button>
          <a
            href={profile.cv.file}
            target="_blank"
            rel="noreferrer"
            className="chip gap-1.5 px-3 py-1.5 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-300"
          >
            <ExternalIcon className="h-3.5 w-3.5" />
            New tab
          </a>
          <a
            href={profile.cv.file}
            download={profile.cv.downloadName}
            className="chip gap-1.5 px-3 py-1.5 transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-300"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </div>

      <object
        data={`${profile.cv.file}#view=FitH`}
        type="application/pdf"
        aria-label={`${profile.name} CV, PDF preview`}
        className={`hidden w-full bg-white transition-[height] duration-500 sm:block ${
          expanded ? "h-[190vh]" : "h-[85vh]"
        }`}
      >
        <div className="p-10 text-center">
          <p className="muted text-sm">
            Your browser can&apos;t display PDFs inline.
          </p>
          <a
            href={profile.cv.file}
            download={profile.cv.downloadName}
            className="btn-primary mt-5"
          >
            <DownloadIcon className="h-4 w-4" />
            Download the CV
          </a>
        </div>
      </object>

      {/* Mobile: an inline PDF frame is unusable, so offer the actions instead. */}
      <div className="p-8 text-center sm:hidden">
        <p className="muted text-sm">
          PDFs read better outside the browser on a phone.
        </p>
        <a
          href={profile.cv.file}
          download={profile.cv.downloadName}
          className="btn-primary mt-5 w-full"
        >
          <DownloadIcon className="h-4 w-4" />
          Download the CV
        </a>
        <a
          href={profile.cv.file}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost mt-3 w-full"
        >
          <ExternalIcon className="h-4 w-4" />
          Open in a new tab
        </a>
      </div>
    </div>
  );
}

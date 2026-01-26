"use client"

import { useState, useEffect } from "react"
import { announcements } from "@/config/announcement"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnnouncementBanner() {
  const [activeAnnouncement, setActiveAnnouncement] = useState<typeof announcements[0] | null>(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const active = announcements.find((a) => a.active)
    if (active) {
      setActiveAnnouncement(active)
      // Check if previously dismissed
      const wasDismissed = localStorage.getItem(`announcement-${active.id}-dismissed`)
      if (wasDismissed) {
        setDismissed(true)
      }
    }
  }, [])

  const handleDismiss = () => {
    if (activeAnnouncement?.id) {
      localStorage.setItem(`announcement-${activeAnnouncement.id}-dismissed`, "true")
      setDismissed(true)
    }
  }

  if (!activeAnnouncement || dismissed || !activeAnnouncement.dismissible) {
    return null
  }

  const iconMap = {
    success: CheckCircle,
    warning: AlertCircle,
    info: Info,
  }

  const Icon = iconMap[activeAnnouncement.type || "info"]

  return (
    <div
      className={cn(
        "relative w-full border-b px-4 py-4 announcement-glow",
        activeAnnouncement.type === "success" && "bg-green-50 border-green-200 text-green-900",
        activeAnnouncement.type === "warning" && "bg-yellow-50 border-yellow-200 text-yellow-900",
        activeAnnouncement.type === "info" && "bg-stone-50 border-teal-200 text-slate-800"
      )}
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center gap-3 text-center">
          <Icon className="h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-lg">{activeAnnouncement.title}</p>
            <p className="text-base font-medium">{activeAnnouncement.message}</p>
          </div>
        </div>
        {activeAnnouncement.dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Dismiss announcement"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}

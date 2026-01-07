export interface Announcement {
  id: string
  title: string
  message: string
  active: boolean
  type?: "info" | "warning" | "success"
  dismissible?: boolean
}

export const announcements: Announcement[] = [
  {
    id: "flu-vaccines-2024",
    title: "Flu Vaccines Available",
    message: "We have received our annual shipment of flu vaccines. Call the office to schedule your flu vaccine appointment!",
    active: true,
    type: "success",
    dismissible: true
  }
]

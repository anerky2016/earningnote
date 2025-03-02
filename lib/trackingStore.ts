import { writable } from "svelte/store"

interface TrackingData {
  pageViews: number
  clicks: number
  sessions: number
}

const createTrackingStore = () => {
  const { subscribe, update, set } = writable<TrackingData>({
    pageViews: 0,
    clicks: 0,
    sessions: 0,
  })

  return {
    subscribe,
    incrementPageView: (path: string) => update((data) => ({ ...data, pageViews: data.pageViews + 1 })),
    incrementClicks: () => update((data) => ({ ...data, clicks: data.clicks + 1 })),
    incrementSessions: () => update((data) => ({ ...data, sessions: data.sessions + 1 })),
    getData: () => subscribe,
  }
}

export const trackingStore = createTrackingStore()


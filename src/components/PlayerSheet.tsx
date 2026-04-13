import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { Track } from '../data/mockData'
import './PlayerSheet.css'

interface PlayerSheetProps {
  track: Track | null
  onClose: () => void
}

export default function PlayerSheet({ track, onClose }: PlayerSheetProps) {
  const [displayedTrack, setDisplayedTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const loadedRef = useRef(false)

  // Keep track in DOM during close animation
  useEffect(() => {
    if (track) {
      setDisplayedTrack(track)
      setLoading(true)
      setBlocked(false)
      loadedRef.current = false

      // If iframe doesn't fire onLoad within 5s — assume it's blocked
      const timer = setTimeout(() => {
        if (!loadedRef.current) setBlocked(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [track?.id])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (track) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [track, onClose])

  const handleLoad = () => {
    loadedRef.current = true
    setLoading(false)
    setBlocked(false)
  }

  const isOpen = Boolean(track)

  return createPortal(
    <>
      <div
        className={`player-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      <div className={`player-sheet ${isOpen ? 'open' : ''}`}>
        <div className="player-handle" />

        <div className="player-header">
          {displayedTrack && (
            <div className="player-track-info">
              <img
                src={displayedTrack.cover}
                alt={`${displayedTrack.title} — ${displayedTrack.artist}`}
                className="player-cover"
              />
              <div className="player-track-text">
                <div className="player-title">{displayedTrack.title}</div>
                <div className="player-artist">{displayedTrack.artist}</div>
              </div>
            </div>
          )}
          <button
            className="player-close"
            onClick={onClose}
            aria-label="Закрыть плеер"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="player-iframe-wrap">
          {displayedTrack && (
            <>
              {/* Loading skeleton */}
              {loading && !blocked && (
                <div className="player-skeleton">
                  <div className="player-skeleton-pulse" />
                </div>
              )}

              {/* Blocked fallback */}
              {blocked && (
                <div className="player-blocked">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#555" strokeWidth="1.5" />
                    <path d="M8 12h8M12 8v8" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <p className="player-blocked-text">
                    Плеер заблокирован блокировщиком рекламы
                  </p>
                  <a
                    href={displayedTrack.iframeSrc.replace('/iframe/', '/').replace('https://music.yandex.ru/iframe', 'https://music.yandex.ru')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="player-blocked-link"
                  >
                    Открыть в Яндекс Музыке →
                  </a>
                </div>
              )}

              {/* Actual iframe — always rendered so load event fires */}
              <iframe
                key={displayedTrack.id}
                frameBorder="0"
                allow="clipboard-write"
                src={displayedTrack.iframeSrc}
                width="614"
                height="244"
                title={`${displayedTrack.title} — ${displayedTrack.artist}`}
                className={`player-iframe ${loading || blocked ? 'player-iframe--hidden' : ''}`}
                onLoad={handleLoad}
              />
            </>
          )}
        </div>
      </div>
    </>,
    document.body
  )
}

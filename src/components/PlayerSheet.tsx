import { useEffect } from 'react'
import type { Track } from '../data/mockData'
import './PlayerSheet.css'

interface PlayerSheetProps {
  track: Track | null
  onClose: () => void
}

export default function PlayerSheet({ track, onClose }: PlayerSheetProps) {
  useEffect(() => {
    if (track) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [track])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <>
      <div
        className={`player-backdrop ${track ? 'visible' : ''}`}
        onClick={onClose}
      />
      <div className={`player-sheet ${track ? 'open' : ''}`}>
        <div className="player-handle" />

        <div className="player-header">
          <div className="player-track-info">
            <img
              src={track?.cover}
              alt={track?.title}
              className="player-cover"
            />
            <div>
              <div className="player-title">{track?.title}</div>
              <div className="player-artist">{track?.artist}</div>
            </div>
          </div>
          <button className="player-close" onClick={onClose} aria-label="Закрыть плеер">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="player-iframe-wrap">
          {track && (
            <iframe
              key={track.id}
              frameBorder="0"
              allow="clipboard-write"
              src={track.iframeSrc}
              title={`${track.title} — ${track.artist}`}
              width="614"
              height="244"
              style={{ border: 'none', width: '100%', height: '244px', display: 'block', borderRadius: '12px' }}
            />
          )}
        </div>
      </div>
    </>
  )
}

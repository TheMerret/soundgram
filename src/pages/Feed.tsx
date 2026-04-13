import { useState, useCallback } from 'react'
import Post from '../components/Post'
import PlayerSheet from '../components/PlayerSheet'
import { mockPosts } from '../data/mockData'
import type { Track } from '../data/mockData'
import './Feed.css'

const SoundgramLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill="#8B5CF6" />
    <path
      d="M9 18V10l10 4-10 4z"
      fill="white"
    />
  </svg>
)

export default function Feed() {
  const [activeTrack, setActiveTrack] = useState<Track | null>(null)

  const handlePlay = useCallback((track: Track) => {
    setActiveTrack(prev => (prev?.id === track.id ? null : track))
  }, [])

  const handleClose = useCallback(() => {
    setActiveTrack(null)
  }, [])

  return (
    <div className="feed-page">
      <header className="feed-header">
        <div className="feed-logo">
          <SoundgramLogo />
          <span className="feed-logo-text">soundgram</span>
        </div>
      </header>

      <main className="feed-list">
        {mockPosts.map(post => (
          <Post
            key={post.id}
            post={post}
            isPlaying={activeTrack?.id === post.track.id}
            onPlay={handlePlay}
          />
        ))}
        <div className="feed-bottom-spacer" />
      </main>

      <PlayerSheet track={activeTrack} onClose={handleClose} />
    </div>
  )
}

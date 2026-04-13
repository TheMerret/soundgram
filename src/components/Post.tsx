import type { Post as PostType, Track } from '../data/mockData'
import './Post.css'

interface PostProps {
  post: PostType
  isPlaying: boolean
  onPlay: (track: Track) => void
}

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </svg>
)

const StopIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
  </svg>
)

const MusicNoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
)

export default function Post({ post, isPlaying, onPlay }: PostProps) {
  const { user, track, createdAt } = post

  return (
    <article className="post">
      <div className="post-user">
        <img src={user.avatar} alt={user.name} className="post-avatar" />
        <div className="post-user-info">
          <span className="post-name">{user.name}</span>
          <span className="post-meta">
            <span className="post-username">{user.username}</span>
            <span className="post-dot">·</span>
            <span className="post-time">{createdAt}</span>
          </span>
        </div>
      </div>

      <div className="post-track">
        <div className="post-track-cover-wrap">
          <img
            src={track.cover}
            alt={`${track.title} — ${track.artist}`}
            className="post-track-cover"
          />
          <div className="post-track-cover-overlay">
            <MusicNoteIcon />
          </div>
        </div>

        <div className="post-track-info">
          <div className="post-track-title">{track.title}</div>
          <div className="post-track-artist">{track.artist}</div>
        </div>

        <button
          className={`post-play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={() => onPlay(track)}
          aria-label={isPlaying ? 'Закрыть плеер' : `Слушать ${track.title}`}
        >
          {isPlaying ? <StopIcon /> : <PlayIcon />}
        </button>
      </div>
    </article>
  )
}

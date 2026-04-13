import { useState, useEffect } from 'react'
import type { FollowUser } from '../data/mockData'
import './FollowersModal.css'

interface FollowersModalProps {
  users: FollowUser[]
  title: string
  onClose: () => void
}

export default function FollowersModal({ users, title, onClose }: FollowersModalProps) {
  const [list, setList] = useState(users)

  useEffect(() => {
    setList(users)
  }, [users])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const toggleFollow = (id: string) => {
    setList(prev => prev.map(u => u.id === id ? { ...u, isFollowing: !u.isFollowing } : u))
  }

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-sheet">
        <div className="modal-handle" />
        <div className="modal-header">
          <span className="modal-title">{title}</span>
          <button className="modal-close" onClick={onClose} aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="modal-list">
          {list.map(user => (
            <li key={user.id} className="modal-user">
              <img src={user.avatar} alt={user.name} className="modal-avatar" />
              <div className="modal-user-info">
                <span className="modal-user-name">{user.name}</span>
                <span className="modal-user-username">{user.username}</span>
              </div>
              <button
                className={`modal-follow-btn ${user.isFollowing ? 'following' : ''}`}
                onClick={() => toggleFollow(user.id)}
              >
                {user.isFollowing ? 'Вы подписаны' : 'Подписаться'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

import { useState } from 'react'
import FollowersModal from '../components/FollowersModal'
import { currentUser, followingList } from '../data/mockData'
import './Profile.css'

type ModalType = 'followers' | 'following' | null

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MusicIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
)

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [followersCount, setFollowersCount] = useState(currentUser.followersCount)
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const handleFollow = () => {
    setIsFollowing(prev => {
      setFollowersCount(c => prev ? c - 1 : c + 1)
      return !prev
    })
  }

  const openModal = (type: ModalType) => setActiveModal(type)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h1 className="profile-page-title">Мой профиль</h1>
        <button className="profile-edit-btn" aria-label="Редактировать профиль">
          <EditIcon />
        </button>
      </header>

      <main className="profile-content">
        {/* Avatar + name block */}
        <div className="profile-hero">
          <div className="profile-avatar-wrap">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="profile-avatar"
            />
            <div className="profile-avatar-ring" />
          </div>
          <div className="profile-names">
            <h2 className="profile-name">{currentUser.name}</h2>
            <span className="profile-username">{currentUser.username}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-value">{followersCount}</span>
            <span className="profile-stat-label">подписчики</span>
          </div>
          <div className="profile-stat-divider" />
          <button
            className="profile-stat profile-stat-btn"
            onClick={() => openModal('following')}
          >
            <span className="profile-stat-value">{currentUser.followingCount}</span>
            <span className="profile-stat-label">подписки</span>
          </button>
          <div className="profile-stat-divider" />
          <div className="profile-stat">
            <span className="profile-stat-value">{currentUser.tracksCount}</span>
            <span className="profile-stat-label">
              <MusicIcon /> треки
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="profile-actions">
          <button
            className={`profile-follow-btn ${isFollowing ? 'following' : ''}`}
            onClick={handleFollow}
          >
            {isFollowing ? 'Вы подписаны' : 'Подписаться'}
          </button>
          <button className="profile-message-btn" aria-label="Написать сообщение">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Media library placeholder */}
        <div className="profile-section">
          <h3 className="profile-section-title">Медиатека</h3>
          <div className="profile-media-empty">
            <div className="profile-media-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.5">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <p className="profile-media-hint">Сохранённые треки появятся здесь</p>
          </div>
        </div>
      </main>

      <div className="profile-bottom-spacer" />

      {activeModal && (
        <FollowersModal
          users={followingList}
          title={activeModal === 'following' ? 'Подписки' : 'Подписчики'}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

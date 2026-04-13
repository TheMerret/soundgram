import { NavLink } from 'react-router-dom'
import './TabBar.css'

const HomeIcon = ({ filled }: { filled: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {filled ? (
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
    ) : (
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5zm2-17.17L19.17 10H18v8h-3v-6H9v6H6v-8H4.83L12 2.83z" fill="currentColor" />
    )}
  </svg>
)

const SearchIcon = ({ filled }: { filled: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {filled ? (
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
    ) : (
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" />
    )}
  </svg>
)

const ProfileIcon = ({ filled }: { filled: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    {filled ? (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
    ) : (
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4zm-6 3c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6z" fill="currentColor" />
    )}
  </svg>
)

export default function TabBar() {
  return (
    <nav className="tab-bar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'tab-item active' : 'tab-item'}>
        {({ isActive }) => (
          <>
            <HomeIcon filled={isActive} />
            <span>Лента</span>
          </>
        )}
      </NavLink>
      <NavLink to="/search" className={({ isActive }) => isActive ? 'tab-item active' : 'tab-item'}>
        {({ isActive }) => (
          <>
            <SearchIcon filled={isActive} />
            <span>Поиск</span>
          </>
        )}
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'tab-item active' : 'tab-item'}>
        {({ isActive }) => (
          <>
            <ProfileIcon filled={isActive} />
            <span>Профиль</span>
          </>
        )}
      </NavLink>
    </nav>
  )
}

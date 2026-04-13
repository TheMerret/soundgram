import { useState } from 'react'
import './Search.css'

const categories = [
  { id: 'c1', label: 'Рок', color: '#E74C3C' },
  { id: 'c2', label: 'Поп', color: '#9B59B6' },
  { id: 'c3', label: 'Хип-хоп', color: '#2980B9' },
  { id: 'c4', label: 'Электроника', color: '#27AE60' },
  { id: 'c5', label: 'Джаз', color: '#E67E22' },
  { id: 'c6', label: 'Инди', color: '#C0392B' },
  { id: 'c7', label: 'Классика', color: '#16A085' },
  { id: 'c8', label: 'Металл', color: '#2C3E50' },
]

export default function Search() {
  const [query, setQuery] = useState('')

  return (
    <div className="search-page">
      <header className="search-header">
        <h1 className="search-heading">Поиск</h1>
        <div className="search-input-wrap">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder="Треки, артисты, пользователи..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoComplete="off"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')} aria-label="Очистить">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </header>

      <main className="search-content">
        {query ? (
          <div className="search-empty">
            <div className="search-empty-icon">🔍</div>
            <p className="search-empty-title">Ищем «{query}»</p>
            <p className="search-empty-hint">Функция поиска в разработке</p>
          </div>
        ) : (
          <>
            <h2 className="search-section-title">Жанры</h2>
            <div className="search-categories">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className="search-category"
                  style={{ '--cat-color': cat.color } as React.CSSProperties}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </>
        )}
      </main>

      <div className="search-bottom-spacer" />
    </div>
  )
}

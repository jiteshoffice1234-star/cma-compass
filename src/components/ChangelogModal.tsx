const CHANGELOG: Record<string, string> = {
  '2.0.0': `
- Initial open-source release
- CMA Foundation and Intermediate syllabus
- Curated YouTube lectures per chapter
- Chapter quizzes with XP and badges
- Flashcards with spaced repetition
- Progress tracking with streaks
- OTA auto-updates
- 7 themes: neo, glass, clay, neu, skeuo, vapor, cyber
    `,
}

export function ChangelogModal({ version, onClose }: { version: string; onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)', padding: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card)', border: '3px solid #000',
          borderRadius: 12, padding: 24, maxWidth: 400, width: '100%',
          boxShadow: '4px 4px 0 #000',
        }}
      >
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>
          What's New in {version}
        </h2>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.5, fontFamily: 'inherit' }}>
          {CHANGELOG[version] || 'See GitHub releases for details.'}
        </pre>
        <button
          onClick={onClose}
          style={{
            marginTop: 20, width: '100%', padding: '12px 16px',
            border: '3px solid #000', borderRadius: 8, fontWeight: 800,
            background: 'var(--primary)', cursor: 'pointer',
            boxShadow: '3px 3px 0 #000',
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

import { Component, ReactNode } from 'react'
import { color, border, shadow, radius } from '../theme'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('React Error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, background: color.surface }}>
          <div style={{ textAlign: 'center', background: color.card, border: border.thick, borderRadius: radius.md, boxShadow: shadow.md, padding: 24, maxWidth: 400 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Something went wrong</div>
            <div style={{ fontSize: 14, color: color.muted, marginBottom: 16 }}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </div>
            <button onClick={() => window.location.reload()}
              style={{ background: color.secondary, color: '#fff', border: border.thick, borderRadius: radius.md, padding: '10px 16px', fontWeight: 800, cursor: 'pointer' }}>
              Reload App
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

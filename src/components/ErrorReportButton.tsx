import { AlertCircle } from 'lucide-react'
import { Button } from './ui'
import { color } from '../theme'

export function ErrorReportButton({
  error,
  context = '',
}: {
  error: Error | string
  context?: string
}) {
  const handleReport = () => {
    const errorMessage = typeof error === 'string' ? error : error.message
    const stack = typeof error === 'string' ? '' : error.stack

    const issueBody = encodeURIComponent(
      `## Error Report\n\n**Error:** ${errorMessage}\n\n**Context:** ${context}\n\n**Stack Trace:**\n\`\`\`\n${stack || 'N/A'}\n\`\`\`\n\n**Steps to Reproduce:**\n[Describe what you were doing]\n\n**App Version:** Check Settings → About\n\n---\n*Auto-generated report. Please add details above.*`
    )

    window.open(
      `https://github.com/jiteshoffice1234-star/cma-compass/issues/new?title=Error:%20${encodeURIComponent(errorMessage)}&body=${issueBody}&label=bug`,
      '_blank'
    )
  }

  return (
    <Button
      onClick={handleReport}
      variant="ghost"
      style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 16 }}
    >
      <AlertCircle size={18} color={color.danger} />
      Report This Issue
    </Button>
  )
}

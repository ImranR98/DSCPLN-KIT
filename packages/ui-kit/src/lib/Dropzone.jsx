import { useRef, useState } from 'react'
import { Upload } from 'lucide-react'

// Accessible dropzone: click, keyboard and drag/drop share one path.
export default function Dropzone({
  onFiles,
  label = 'Drop files here or choose files',
  hint = null,
  accept = undefined,
  multiple = true,
  disabled = false,
  className = '',
  children = null,
}) {
  const inputRef = useRef(null)
  const [over, setOver] = useState(false)

  const send = (files) => {
    if (disabled || !files?.length) return
    onFiles?.(Array.from(files))
  }

  const pick = () => {
    if (!disabled) inputRef.current?.click()
  }

  return (
    <div
      className={['dropzone', over ? 'is-over' : null, disabled ? 'is-disabled' : null, className].filter(Boolean).join(' ')}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      onClick={pick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          pick()
        }
      }}
      onDragEnter={(event) => { event.preventDefault(); if (!disabled) setOver(true) }}
      onDragOver={(event) => { event.preventDefault(); if (!disabled) setOver(true) }}
      onDragLeave={(event) => {
        event.preventDefault()
        if (!event.currentTarget.contains(event.relatedTarget)) setOver(false)
      }}
      onDrop={(event) => {
        event.preventDefault()
        setOver(false)
        send(event.dataTransfer.files)
      }}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        onChange={(event) => {
          send(event.target.files)
          event.target.value = ''
        }}
      />
      {children ?? (
        <>
          <Upload size={20} strokeWidth={1.8} aria-hidden="true" />
          <strong className="dropzone__label">{label}</strong>
          {hint ? <span className="dropzone__hint">{hint}</span> : null}
          <span className="btn btn--outline btn--sm">Choose files</span>
        </>
      )}
    </div>
  )
}

'use client'

import { CODE_PROFILE } from '@/lib/data'

const colors: Record<string, string> = {
  keyword: 'text-purple-400',
  classname: 'text-yellow-300',
  string: 'text-green-400',
  comment: 'text-gray-500',
  property: 'text-blue-300',
  type: 'text-cyan-300',
  number: 'text-orange-400',
}

// Very simple syntax highlighter
function highlight(code: string) {
  const lines = code.split('\n')
  return lines.map((line, i) => {
    // Replace tokens for display
    const html = line
      .replace(/\b(class|extends|new|const|let|while|this|void|as)\b/g, `<span class="${colors.keyword}">$1</span>`)
      .replace(/\b(Ekansh|Developer)\b/g, `<span class="${colors.classname}">$1</span>`)
      .replace(/"([^"]*)"/g, `<span class="${colors.string}">"$1"</span>`)
      .replace(/(\/\/.*)/g, `<span class="${colors.comment}">$1</span>`)
      .replace(/\b(name|age|location|status|stack|hobbies|frontend|backend|db)\b/g, `<span class="${colors.property}">$1</span>`)
      .replace(/\b(string|const|void|true|false)\b/g, `<span class="${colors.type}">$1</span>`)
      .replace(/\b(\d+)\b/g, `<span class="${colors.number}">$1</span>`)

    return (
      <div key={i} className="table-row">
        <span className="table-cell pr-6 text-right text-gray-600 select-none text-xs w-8">{i + 1}</span>
        <span className="table-cell" dangerouslySetInnerHTML={{ __html: html || '&nbsp;' }} />
      </div>
    )
  })
}

export default function CodeProfile() {
  return (
    <div className="glass rounded-2xl overflow-hidden w-full max-w-lg border border-white/10 shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-fira tracking-wide">{CODE_PROFILE.filename}</span>
      </div>
      {/* Code */}
      <div className="p-5 overflow-x-auto">
        <pre className="text-sm leading-7 font-mono code-block table w-full">
          {highlight(CODE_PROFILE.code)}
        </pre>
      </div>
    </div>
  )
}

import { useRef, useState } from 'react'
import {
  salvaMoneyInputs,
  salvaMoneyRecord,
  type InputModality,
} from '../data/projects'
import { eyebrowClass } from './Eyebrow'
import { CheckCheck, Receipt, Waveform } from './Icons'

/** The inbound message, drawn the way each modality actually arrives. */
function InboundBubble({ input }: { input: InputModality }) {
  return (
    <div className="swap-in w-fit max-w-full rounded-2xl rounded-tl-sm border border-rule bg-paper px-4 py-3">
      {input.kind === 'text' ? (
        <p className="text-[0.9375rem] leading-snug text-ink">{input.body}</p>
      ) : null}

      {input.kind === 'voice' ? (
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-paper"
          >
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M3 1.5 10 6l-7 4.5z" />
            </svg>
          </span>
          <Waveform className="h-5 w-[76px] shrink-0 text-ink-muted" />
          <span className="font-mono text-[0.75rem] text-ink-muted">{input.duration}</span>
        </div>
      ) : null}

      {input.kind === 'image' ? (
        <div className="flex items-center gap-3">
          <Receipt className="h-11 w-9 shrink-0 text-ink-muted" />
          <p className="text-[0.9375rem] leading-snug text-ink">{input.body}</p>
        </div>
      ) : null}

      {input.kind === 'voice' ? (
        <p className="mt-2.5 border-t border-rule pt-2.5 font-mono text-[0.75rem] leading-snug text-ink-muted">
          “{input.body}”
        </p>
      ) : null}
    </div>
  )
}

/**
 * Three heterogeneous inputs, one normalised record.
 *
 * Switching the input never changes the shape of the output — that is the
 * whole demonstration, so the record sits outside the tab panel and the
 * caption says it in words for anyone who cannot see the swap.
 */
export function TransformDemo() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = (index: number) => {
    setActive(index)
    tabRefs.current[index]?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const last = salvaMoneyInputs.length - 1
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(active === last ? 0 : active + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(active === 0 ? last : active - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(last)
    }
  }

  return (
    <div className="rounded-2xl border border-rule bg-paper-sunk/60 p-5 sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-6">
        {/* Input */}
        <div>
          <h4 className={eyebrowClass}>Entrada</h4>

          <div
            role="tablist"
            aria-label="Formato da mensagem enviada ao SalvaMoney"
            className="mt-3 flex flex-wrap gap-1.5"
          >
            {salvaMoneyInputs.map((input, index) => {
              const selected = index === active
              return (
                <button
                  key={input.id}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`entrada-tab-${input.id}`}
                  aria-selected={selected}
                  aria-controls="entrada-painel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={onKeyDown}
                  className={`inline-flex min-h-11 items-center rounded-[10px] border px-3.5 font-mono text-[0.8125rem] transition-colors duration-150 ${
                    selected
                      ? 'border-ink bg-ink text-paper'
                      : 'border-rule bg-paper text-ink-muted hover:border-ink/40 hover:text-ink'
                  }`}
                >
                  {input.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id="entrada-painel"
            aria-labelledby={`entrada-tab-${salvaMoneyInputs[active].id}`}
            tabIndex={0}
            className="mt-3 flex min-h-[116px] items-center rounded-[10px]"
          >
            <InboundBubble key={salvaMoneyInputs[active].id} input={salvaMoneyInputs[active]} />
          </div>
        </div>

        {/* Transform — an LLM does the normalising; name the AI step so it reads at a glance. */}
        <div aria-hidden="true" className="flex flex-col items-center justify-center gap-2 lg:px-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-paper text-ink-muted">
            <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-90 lg:rotate-0" fill="none" aria-hidden="true" focusable="false">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
            IA · LLM
          </span>
        </div>

        {/* Output — identical for every input, by design. */}
        <div>
          <h4 className={eyebrowClass}>Registro gerado</h4>

          <div className="mt-3 rounded-2xl border border-rule bg-paper px-4 py-3.5">
            <dl className="space-y-2">
              {salvaMoneyRecord.map((field) => (
                <div key={field.key} className="flex items-baseline gap-3">
                  <dt translate="no" className="w-[4.75rem] shrink-0 font-mono text-[0.75rem] text-ink-muted">
                    {field.key}
                  </dt>
                  <dd translate="no" className="font-mono text-[0.8125rem] font-medium text-ink">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 flex items-center gap-2 border-t border-rule pt-3 font-mono text-[0.75rem] text-ink-muted">
              <CheckCheck className="h-3 w-4 shrink-0 text-signal" />
              gravado no Realtime DB
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-rule pt-4 text-[0.9375rem] leading-snug text-ink-muted">
        Um LLM (Groq) normaliza as três entradas — texto, áudio e imagem — no
        mesmo registro estruturado.
      </p>
    </div>
  )
}

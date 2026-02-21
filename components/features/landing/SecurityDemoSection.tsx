'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample data
const SAMPLE_DECOY_TEXT =
  'high thrillers oxynitrate capitalise sail Loos jugulates Samul spliffs repackage Clayville catmint pineapple spermatid decrypt coal wrong pro Mareah Viola hydrogenide monetising antifaction Giustina predepreciation afferent discriminatingness horoptery Pet soliloquizingly tucked warrambool eyelight abstractionist pawner ultrastructural anti governessdom unstimulable overconservatism paludrin synallaxine pinipicrin portaged gorgerins nickeys obsessor';

const SAMPLE_SEED_PHRASE =
  'garden flowers trees grass sunlight soil butterflies leaves pathway fountain breeze blossoms';

type SimulationState = 'idle' | 'decoy-only' | 'mapping-only' | 'decrypting' | 'success' | 'error';

/**
 * Connector Line SVG
 */
function ConnectorLine({
  type,
}: {
  type: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) {
  const strokeClass = 'stroke-muted-foreground/30';

  if (type === 'top-left') {
    return (
      <svg
        className="absolute top-full -right-8 h-16 w-16 translate-x-4 -translate-y-4 lg:h-24 lg:w-16"
        fill="none"
        viewBox="0 0 64 96"
      >
        <path
          d="M0 0 V60 Q0 80 20 80 H64"
          stroke="currentColor"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    );
  }
  if (type === 'top-right') {
    return (
      <svg
        className="absolute top-full -left-8 h-16 w-16 -translate-x-4 -translate-y-4 lg:h-24 lg:w-16"
        fill="none"
        viewBox="0 0 64 96"
      >
        <path
          d="M64 0 V60 Q64 80 44 80 H0"
          stroke="currentColor"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    );
  }
  if (type === 'bottom-left') {
    return (
      <svg
        className="absolute -right-8 bottom-full h-16 w-16 translate-x-4 translate-y-4 lg:h-24 lg:w-16"
        fill="none"
        viewBox="0 0 64 96"
      >
        <path
          d="M0 96 V36 Q0 16 20 16 H64"
          stroke="currentColor"
          className={strokeClass}
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
    );
  }
  // bottom-right
  return (
    <svg
      className="absolute bottom-full -left-8 h-16 w-16 -translate-x-4 translate-y-4 lg:h-24 lg:w-16"
      fill="none"
      viewBox="0 0 64 96"
    >
      <path
        d="M64 96 V36 Q64 16 44 16 H0"
        stroke="currentColor"
        className={strokeClass}
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
  );
}

/**
 * SecurityDemoSection - Interactive demonstration of security through separation
 */
import { useLanguageStore } from '@/lib/store/language';
import { PageGradient } from '@/components/ui';

export function SecurityDemoSection() {
  const [hasDecoyText, setHasDecoyText] = useState(false);
  const [hasMappingFile, setHasMappingFile] = useState(false);
  const [state, setState] = useState<SimulationState>('idle');

  /* const { t } = useLanguageStore(); */
  const { t } = useLanguageStore();

  const handleSimulateDecoy = useCallback(() => {
    setHasDecoyText(true);
    setState(() => (hasMappingFile ? 'idle' : 'decoy-only'));
  }, [hasMappingFile]);

  const handleSimulateMapping = useCallback(() => {
    setHasMappingFile(true);
    setState(() => (hasDecoyText ? 'idle' : 'mapping-only'));
  }, [hasDecoyText]);

  /* Refactored Architecture:
   * We use a state-driven approach (isGenerating) instead of a "fire-and-forget" timer
   * in the event handler. This ensures that if the component unmounts, the
   * useEffect cleanup capability will kill the pending timer, preventing
   * "Can't perform a React state update on an unmounted component" errors
   * and Detached DOM retained paths.
   */
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isGenerating) {
      // 1. Decrypting state is already set by the handler

      // 2. Schedule "success" state transition
      timeoutId = setTimeout(() => {
        setState('success');
        setIsGenerating(false); // Reset trigger
      }, 1500);
    }

    // 3. AUTO-CLEANUP: If component unmounts or dependency changes, this runs.
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isGenerating]);

  const handleGenerate = useCallback(() => {
    // Validation
    const missingDecoy = !hasDecoyText;
    const missingMapping = !hasMappingFile;

    if (missingDecoy || missingMapping) {
      setState('error');
      return;
    }

    // Trigger the verified architectural flow
    setState('decrypting'); // Set state directly
    setIsGenerating(true);
  }, [hasDecoyText, hasMappingFile]);

  const getErrorMessage = () => {
    if (!hasDecoyText && !hasMappingFile) return 'Missing Decoy Text and Mapping File';
    if (!hasDecoyText) return 'Missing Decoy Text';
    if (!hasMappingFile) return 'Missing Mapping File';
    return '';
  };

  return (
    <section className="bg-background relative overflow-hidden py-32">
      <PageGradient />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-52 text-center">
          <h2 className="text-foreground mb-4 font-mono text-3xl font-bold tracking-tight md:text-5xl">
            {t.securityDemo.title}
          </h2>
          <p className="text-muted-foreground font-mono text-sm md:text-base">
            {t.securityDemo.subtitle}
          </p>
        </div>

        {/* Main Interface Wrapper */}
        <div className="relative mx-auto max-w-5xl">
          {/* Top Left Annotation */}
          <div className="absolute -top-40 -left-4 z-20 hidden w-80 lg:block">
            <div className="text-muted-foreground border-border bg-card/90 border p-4 text-xs backdrop-blur-sm">
              <p className="mb-3">{t.securityDemo.annotations.decoy}</p>
              <button
                onClick={handleSimulateDecoy}
                disabled={hasDecoyText}
                aria-label={hasDecoyText ? 'Decoy text placed' : 'Simulate placing decoy text'}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full px-3 py-2 font-mono text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                {hasDecoyText
                  ? t.securityDemo.buttons.placeDecoy
                  : t.securityDemo.buttons.simulateDecoy}
              </button>
            </div>
            <ConnectorLine type="top-left" />
          </div>

          {/* Top Right Annotation */}
          <div className="absolute -top-44 -right-4 z-20 hidden w-80 lg:block">
            <div className="text-muted-foreground border-border bg-card/90 border p-4 text-xs backdrop-blur-sm">
              <p className="mb-3">{t.securityDemo.annotations.mapping}</p>
              <button
                onClick={handleSimulateMapping}
                disabled={hasMappingFile}
                aria-label={
                  hasMappingFile ? 'Mapping file uploaded' : 'Simulate uploading mapping file'
                }
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 w-full px-3 py-2 font-mono text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                {hasMappingFile
                  ? t.securityDemo.buttons.uploadMapping
                  : t.securityDemo.buttons.simulateMapping}
              </button>
            </div>
            <ConnectorLine type="top-right" />
          </div>

          {/* Central Demo Interface */}
          <div className="border-border bg-card relative z-10 grid grid-cols-1 overflow-hidden rounded-xl border shadow-2xl lg:grid-cols-5">
            {/* Left Panel (Inputs) */}
            <div className="border-border/50 space-y-6 border-b p-6 lg:col-span-3 lg:border-r lg:border-b-0">
              {/* Decoy Text Input */}
              <div className="space-y-2">
                <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                  {t.securityDemo.labels.decoyText}
                </label>
                <div className="text-muted-foreground border-input bg-muted/40 focus-within:border-ring h-32 w-full overflow-y-auto rounded-md border p-3 font-mono text-xs transition-colors">
                  {hasDecoyText ? (
                    <p className="break-words opacity-80">{SAMPLE_DECOY_TEXT}</p>
                  ) : (
                    <p className="opacity-30">Enter decoy text to convert...</p>
                  )}
                </div>
              </div>

              {/* Result Output */}
              <div className="space-y-2">
                <label className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
                  {t.securityDemo.labels.asciiText}
                </label>
                <div className="text-muted-foreground border-input bg-muted/40 focus-within:border-ring h-32 w-full rounded-md border p-3 font-mono text-xs transition-colors">
                  <AnimatePresence mode="wait">
                    {state === 'idle' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="opacity-30"
                      >
                        {t.securityDemo.labels.resultPlaceholder}
                      </motion.p>
                    )}
                    {state === 'decrypting' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="animate-pulse text-white"
                      >
                        {t.securityDemo.buttons.decrypting}
                      </motion.p>
                    )}
                    {state === 'error' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500"
                      >
                        {getErrorMessage()}
                      </motion.p>
                    )}
                    {state === 'success' && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-green-400"
                      >
                        {SAMPLE_SEED_PHRASE}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Panel (Actions) */}
            <div className="bg-muted/20 relative flex flex-col items-center justify-center space-y-8 p-6 lg:col-span-2">
              {/* Upload Zone */}
              <div className="w-full max-w-xs">
                <div
                  className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-all duration-300 ${
                    hasMappingFile
                      ? 'border-green-500/30 bg-green-500/5'
                      : 'border-border hover:border-ring hover:bg-muted/10'
                  }`}
                >
                  {!hasMappingFile ? (
                    <>
                      <svg
                        className="text-muted-foreground mb-3 h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="mb-1 text-sm font-medium text-white">
                        {t.securityDemo.buttons.updateMapping}
                      </span>
                      <span className="text-muted-foreground text-center text-[10px]">
                        Upload new mapping file
                        <br />
                        Allowed: JSON
                      </span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="mb-3 h-8 w-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm font-medium text-green-400">
                        {t.securityDemo.buttons.mappingLoaded}
                      </span>
                      <span className="mt-1 text-[10px] text-green-500/60">mapping_file.json</span>
                    </>
                  )}
                </div>
              </div>

              {/* Generate Button */}
              <div className="w-full max-w-xs">
                <button
                  onClick={handleGenerate}
                  disabled={state === 'decrypting'}
                  aria-label="Generate decryption result"
                  aria-busy={state === 'decrypting'}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/20 disabled:opacity-50"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {state === 'decrypting'
                    ? t.securityDemo.buttons.decrypting
                    : t.securityDemo.buttons.generate}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Left Annotation */}
          <div className="absolute -bottom-28 -left-4 z-20 hidden w-80 lg:block">
            <ConnectorLine type="bottom-left" />
            <div className="text-muted-foreground border-border bg-card/90 mt-8 border p-4 text-xs backdrop-blur-sm">
              <p>{t.securityDemo.annotations.result}</p>
            </div>
          </div>

          {/* Bottom Right Annotation */}
          <div className="absolute -right-4 -bottom-28 z-20 hidden w-80 lg:block">
            <ConnectorLine type="bottom-right" />
            <div className="text-muted-foreground border-border bg-card/90 mt-8 border p-4 text-xs backdrop-blur-sm">
              <button
                onClick={handleGenerate}
                className="group flex w-full items-center justify-between text-left transition-colors hover:text-white"
              >
                {t.securityDemo.annotations.clickToGenerate}
                <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

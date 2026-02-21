interface PageGradientProps {
  className?: string;
  style?: React.CSSProperties;
}

export function PageGradient({ className = '', style }: PageGradientProps) {
  return (
    <div
      className={`pointer-events-none absolute top-36 left-1/2 h-[300px] w-[600px] -translate-x-1/2 ${className}`}
      style={{
        background: 'radial-gradient(circle, #252525 100%, transparent 70%)',
        filter: 'blur(100px)',
        ...style,
      }}
    />
  );
}

import { useState } from 'react';

// =============================================================================
// Helper Functions
// =============================================================================

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

// =============================================================================
// Components
// =============================================================================

interface DateRangePickerProps {
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
  onApply: (start: Date | null, end: Date | null) => void;
  onCancel: () => void;
}

export function DateRangePicker({
  initialStartDate = null,
  initialEndDate = null,
  onApply,
  onCancel,
}: DateRangePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from(
    { length: firstDay },
    (_, i) => getDaysInMonth(year, month - 1) - firstDay + i + 1
  );

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else {
      if (clickedDate < startDate) {
        setEndDate(startDate);
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isSelected = (day: number) => {
    if (!startDate) return false;
    const current = new Date(year, month, day);
    if (endDate) {
      return current.getTime() === startDate.getTime() || current.getTime() === endDate.getTime();
    }
    return current.getTime() === startDate.getTime();
  };

  const isInRange = (day: number) => {
    if (!startDate || !endDate) {
      // Hover effect logic could go here if we want dynamic range hover
      if (startDate && hoverDate && !endDate) {
        const current = new Date(year, month, day);
        const start = startDate.getTime();
        const hover = hoverDate.getTime();
        const curr = current.getTime();
        return (curr > start && curr < hover) || (curr < start && curr > hover);
      }
      return false;
    }
    const current = new Date(year, month, day);
    return current > startDate && current < endDate;
  };

  return (
    <div className="bg-card border-border animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[320px] rounded-lg border p-4 shadow-xl">
      {/* Header: Month Navigation */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={handlePrevMonth}
          className="hover:bg-muted text-muted-foreground hover:text-foreground rounded p-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span className="text-sm font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={handleNextMonth}
          className="hover:bg-muted text-muted-foreground hover:text-foreground rounded p-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Weekday Headers */}
      <div className="mb-2 grid grid-cols-7 gap-1 text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <span key={`${day}-${i}`} className="text-muted-foreground text-xs font-medium">
            {day}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Previous Month Padding */}
        {previousMonthDays.map((day) => (
          <div
            key={`prev-${day}`}
            className="text-muted-foreground/30 flex h-8 items-center justify-center text-xs"
          >
            {day}
          </div>
        ))}

        {/* Current Month Days */}
        {days.map((day) => {
          const selected = isSelected(day);
          const inRange = isInRange(day);

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              onMouseEnter={() => setHoverDate(new Date(year, month, day))}
              onMouseLeave={() => setHoverDate(null)}
              className={`flex h-8 w-full items-center justify-center rounded text-xs transition-colors ${selected ? 'bg-foreground text-background font-bold' : 'hover:bg-muted text-foreground'} ${inRange ? 'bg-muted/50 rounded-none first:rounded-l last:rounded-r' : ''} ${selected && startDate && endDate ? 'relative z-10' : ''} `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="border-border mt-4 flex justify-end gap-2 border-t pt-4">
        <button
          onClick={onCancel}
          className="text-muted-foreground hover:text-foreground px-3 py-1.5 text-xs font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => onApply(startDate, endDate)}
          disabled={!startDate || !endDate}
          className="bg-foreground text-background rounded px-3 py-1.5 text-xs font-bold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Apply Range
        </button>
      </div>
    </div>
  );
}

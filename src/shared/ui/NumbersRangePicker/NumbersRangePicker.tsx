import { useRef, useState } from "react";
import clsx from 'clsx';
import { Button } from "@/shared/ui/Button/Button";
import cls from './NumbersRangePicker.module.scss'
import { useOnClickOutside } from "@/shared/hooks/useOnClickOutside";

export interface NumbersRangePickerProps {
  items: number[];
  label: string,
  start: number | undefined,
  end: number | undefined,
  onChange: (value) => void
}

export const NumbersRangePicker = ({items, onChange, label, start, end}: NumbersRangePickerProps) => {
  const [startRange, setStartRange] = useState<number | undefined>(start);
  const [endRange, setEndRange] = useState<number | undefined>(end);
  const [hoverValue, setHoverValue] = useState<number | undefined>()
  const [isStartSelection, setIsStartSelection] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const rangeRef = useRef<HTMLDivElement>(null);

  const handleChangeSelection = (value) => {
    if(!isStartSelection) {
      setIsStartSelection(true);
      setStartRange(value);
      setEndRange(undefined)
    } else {
      setIsStartSelection(false);
      setEndRange(value);
      onChange({
        start: startRange,
        end: value
      });
    }
  }

  const handleHover = (value) => {
    if(isStartSelection) setHoverValue(value)
  }

  const handleClickOutside = () => {
    setIsOpen(false);
  }

  useOnClickOutside(rangeRef, handleClickOutside);

  return (
    <div className={cls.range} ref={rangeRef}>
      <Button
        isActive={isOpen}
        onClick={() => setIsOpen(prev=>!prev)}
      >
        {label}: {startRange && endRange ? startRange + '-' + endRange : 'все'}
      </Button>
      {isOpen && <div className={cls.rangeDialog}>
        <div className={cls.items}>
          {items.map(item => (
            <div
              className={clsx(
                cls.item,
                startRange <= item && item <= endRange && cls.selected,
                item === startRange && cls.start,
                item === endRange && cls.end,
                item >= startRange && item <= hoverValue && cls.highlighted,
                isStartSelection && item < startRange && cls.disabled,
                isStartSelection && item === hoverValue && cls.endHighlighted
              )}
              onClick={() => handleChangeSelection(item)}
              onMouseOver={() => handleHover(item)}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
};

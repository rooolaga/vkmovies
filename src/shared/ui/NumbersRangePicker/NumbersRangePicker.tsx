import { useRef, useState } from "react";
import clsx from 'clsx';
import { Button } from "@/shared/ui/Button/Button";
import cls from './NumbersRangePicker.module.scss'
import { useOnClickOutside } from "@/shared/hooks/useOnClickOutside";

export interface NumbersRangePickerProps {
  items: number[];
  label: string,
  onChange: (value) => void
}

export const NumbersRangePicker = ({items, onChange, label}: NumbersRangePickerProps) => {
  const [startRange, setStartRange] = useState<number | undefined>();
  const [endRange, setEndRange] = useState<number | undefined>();
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
    }
  }

  const handleHover = (value) => {
    if(isStartSelection) setHoverValue(value)
  }

  const handleResetClick = () => {
    setStartRange(undefined);
    setEndRange(undefined);
    setIsOpen(false);
  }

  const handleApplyClick = () => {
    if(!endRange) setEndRange(startRange)
    setIsOpen(false);
    onChange(`${startRange}-${endRange}`);
  }

  const handleClickOutside = () => {
    setIsOpen(false);
  }

  useOnClickOutside(rangeRef, handleClickOutside);

  return (
    <div className={cls.range} ref={rangeRef}>
      <Button
        className={cls.rangeSelector}
        onClick={() => setIsOpen(prev=>!prev)}
      >
        {label}: {startRange} - {endRange}
      </Button>
      {isOpen && <div className={cls.rangeDialog}>
        <div className={cls.controls}>
          <button className={cls.button} onClick={handleResetClick}>Сбросить</button>
          <div className={cls.rangeLabel}>
            {startRange} - {endRange}
          </div>
          <button className={clsx(cls.button, cls.apply)} onClick={handleApplyClick}>Применить</button>
        </div>
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

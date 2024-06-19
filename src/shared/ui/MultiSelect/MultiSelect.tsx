import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import cls from "./MuiltiSelect.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { useOnClickOutside } from "@/shared/hooks/useOnClickOutside";

export interface MultiSelectProps {
  items: string[];
  selectedItems: string[];
  label: string;
  onChange: (value: string[]) => void;
}

export const MultiSelect = ({items, label, selectedItems, onChange}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<string[]>(selectedItems);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggleButton = () => {
    setIsOpen(prev => !prev);
  }

  const handleClickItem = (value) => {
    setValues(prev => {
      if (prev.includes(value)) {
        return  prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  }

  function handleClickOutside() {
    setIsOpen(false);
  }

  useEffect(() => {
    onChange(values);
  },[values])

  useOnClickOutside(selectRef, handleClickOutside);

  return (
    <div className={cls.multiSelect} ref={selectRef}>
      <Button onClick={handleToggleButton} isActive={isOpen}>
        <span className={cls.values}>
          {label}: {values?.length ? values.map(item => <span key={item}>{item}</span>) : 'Все'}
        </span>
      </Button>
      {isOpen && (
        <div className={cls.selectDialog}>
          {items.map(item => (
            <div
              key={item}
              onClick={() => handleClickItem(item)}
              className={clsx(
                cls.selectItem,
                values.includes(item) && cls.selected
              )}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

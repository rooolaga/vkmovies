import { Button } from "@/shared/ui/Button/Button";

export interface PaginationItemProps {
  value: number;
  isActive: boolean;
  onClick: (page: number) => void
}

export const PaginationItem = ({value, isActive, onClick}: PaginationItemProps) => {

  if(value) {
    return (
      <Button
        isActive={isActive}
        onClick={() => onClick(value)}
      >
        {value}
      </Button>
    );
  } else {
    return <div>...</div>
  }
}

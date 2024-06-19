import { useState } from "react";
import cls from './Pagination.module.scss'
import { PaginationItem } from "@/shared/ui/Pagination/PaginationItem";
import { usePagination } from "@/shared/hooks/usePagination";

export interface PaginationProps {
  page: number;
  count: number;
  onClickPage: (page) => void;
}

export const Pagination = ({
  page,
  count,
  onClickPage
}) => {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const paginationItems = usePagination(currentPage, count - 1);

  const handleClickPage = (page) => {
    setCurrentPage(page);
    onClickPage(page);
  }

  return (
    <div className={cls.items}>
      {paginationItems.map((item, index) => (
        <PaginationItem value={item} isActive={item === page} onClick={handleClickPage} key={index}/>
      ))}
    </div>
  )

}

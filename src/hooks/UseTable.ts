import React, { useState } from "react";
import { IPost, useGetPostsQuery } from "../services/Post";

interface TableData {
  filteredData: IPost[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  itemsPerPage: number;

  sortOrder: "asc" | "desc" | "";
  sortingColumn: "id" | "title" | "body";
  handleChangePage: (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => void;
  handleChangeSortOrder: (column: "id" | "title" | "body") => void;
}

const useCustomizedTables = (value: string): TableData => {
  const { data, isLoading } = useGetPostsQuery("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const itemsPerPage = 10;
  const sortingColumns: ("id" | "title" | "body")[] = ["id", "title", "body"];
  const [sortingColumn, setSortingColumn] = useState<"id" | "title" | "body">(
    sortingColumns[0]
  );

  React.useEffect(() => {
    setCurrentPage(1);
  }, [value]);

  const sortedData = data
    ? [...data].sort((a, b) => {
        if (sortingColumn === "id") {
          return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
        } else {
          return sortOrder === "asc"
            ? a[sortingColumn].localeCompare(b[sortingColumn])
            : b[sortingColumn].localeCompare(a[sortingColumn]);
        }
      })
    : [];

  const filteredData = sortedData.filter(
    (post: IPost) => post.title.includes(value) || post.body.includes(value)
  );

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const handleChangeSortOrder = React.useCallback(
    (column: "id" | "title" | "body") => {
      if (column === sortingColumn && sortOrder === "asc") {
        setSortOrder("desc");
      } else {
        setSortingColumn(column);
        setSortOrder("asc");
      }
    },
    [sortingColumn, sortOrder]
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return {
    filteredData: filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ),
    currentPage,
    totalPages,
    sortOrder,
    sortingColumn,
    handleChangePage,
    handleChangeSortOrder,
    isLoading,
    itemsPerPage,
  };
};
export default useCustomizedTables;

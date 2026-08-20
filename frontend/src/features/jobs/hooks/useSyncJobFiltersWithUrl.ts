import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { JOB_CATEGORIES } from "../../../constants/jobs";
import { useJobFilters } from "./useJobFilters";
import type { JobCategory, Location } from "../types";

// const isJobCategory = (value: string): value is JobCategory => {
//   return JOB_CATEGORIES.includes(value as JobCategory);
// };

export const useSyncJobFiltersWithUrl = () => {
  const [searchParams] = useSearchParams();

  const { setCategory, setLocation } = useJobFilters();

  useEffect(() => {
    const category = searchParams.get("category");
    const location = searchParams.get("location");

    if (category) {
      setCategory(category as JobCategory);
    }

    if (location) {
      setLocation(location as Location);
    }
  }, [searchParams, setCategory, setLocation]);
};
import { useShallow } from "zustand/shallow";
import { useStore } from "../../../store/store";

export const useJobFilters = () =>
  useStore(
    useShallow((state) => ({
      category: state.category,
      jobType: state.jobType,
      expLevel: state.expLevel,
      sort: state.sort,
      jobStatus: state.jobStatus,
      location: state.location,
      datePosted: state.datePosted,
      salaryRange: state.salaryRange,
      viewMode: state.viewMode,
      jobSearchTerm: state.jobSearchTerm,
      locationSearchTerm: state.locationSearchTerm,

      setCategory: state.setCategory,
      setJobType: state.setJobType,
      setExpLevel: state.setExpLevel,
      setSort: state.setSort,
      setJobStatus: state.setJobStatus,
      setLocation: state.setLocation,
      setDatePosted: state.setDatePosted,
      setSalaryRange: state.setSalaryRange,
      setViewMode: state.setViewMode,
      clearFilters: state.clearFilters,

      setJobSearchTerm: state.setJobSearchTerm,
      setLocationSearchTerm: state.setLocationSearchTerm
    }))
  );
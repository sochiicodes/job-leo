import { JobListing } from "../types";

export const getJobPostedDateCount = (
    jobs: JobListing[],
    days: string
) => {
    if (days === "any") {
        return jobs.length;
    }

    const now = new Date();

    const cutoffDate = new Date(now);
    cutoffDate.setDate(now.getDate() - Number(days));

    // console.log("Days:", days);
    // console.log("Now:", now);
    // console.log("Cutoff:", cutoffDate);
    // console.log("First job postedAt:", jobs[0]?.postedAt);
    // console.log(
    //     "Parsed:",
    //     new Date(jobs[0]?.postedAt)
    // );

    return jobs.filter((job) => {
        const postedDate = new Date(job.postedAt);

        return postedDate >= cutoffDate;
    }).length;
};
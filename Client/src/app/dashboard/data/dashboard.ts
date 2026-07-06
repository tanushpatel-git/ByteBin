export const deploymentData = [
    { time: "00:00", value: 40 },
    { time: "04:00", value: 30 },
    { time: "08:00", value: 60 },
    { time: "12:00", value: 45 },
    { time: "16:00", value: 80 },
    { time: "20:00", value: 55 },
    { time: "24:00", value: 70 },
];

export const buildData = [
    { name: "Successful", value: 52, color: "var(--accent)" },
    { name: "Failed", value: 8, color: "var(--text-muted)" }, // changed to muted or red
    { name: "Running", value: 36, color: "var(--accent-light)" },
];

export const weeklyBuilds = [
    { day: "Mon", builds: 45 },
    { day: "Tue", builds: 30 },
    { day: "Wed", builds: 55 },
    { day: "Thu", builds: 40 },
    { day: "Fri", builds: 70 },
    { day: "Sat", builds: 20 },
    { day: "Sun", builds: 15 },
];

export const recentCommits = [
    {
        id: 1,
        message: "feat: add authentication",
        author: "tanushpatel",
        time: "2m ago",
        status: "success",
    },
    {
        id: 2,
        message: "fix: resolve api timeout",
        author: "vercel-bot",
        time: "15m ago",
        status: "success",
    },
    {
        id: 3,
        message: "chore: update dependencies",
        author: "dependabot",
        time: "1h ago",
        status: "success",
    },
    {
        id: 4,
        message: "docs: improve readme",
        author: "tanushpatel",
        time: "3h ago",
        status: "success",
    },
];

export const activeRepositories = [
    { name: "bytebin/core", type: "Next.js", stars: "1.2k" },
    { name: "bytebin/cli", type: "TypeScript", stars: "856" },
    { name: "bytebin/ui", type: "React", stars: "642" },
    { name: "bytebin/docs", type: "MDX", stars: "313" },
];
const data = [{
    id: 1,
    icon: "⭕️",
    status: "open",
    title: "login page",
    content: "set up login page"
}, {
    id: 2,
    icon: "🔆️",
    status: "in progress",
    title: "kanban board",
    content: "able to display for 1 user"
}, {
    id: 3,
    icon: "✅",
    status: "done",
    title: "create task schema",
    content: "Create the schema and connect to mongodb"
}, {
    id: 4,
    icon: "📝",
    status: "in review",
    title: "live chat setup",
    content: "Use socket IO to set this up"
}];

const statuses = [{
    status: "open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "in review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "done",
    icon: "✅",
    color: "#3981DE"
}];


export { data, statuses };
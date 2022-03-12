const ticketDetails = [
    {
        id : 1,
        name : "Need to change my shipping address",
        type : "Story",
        assignee : "Rohan Bhowmick",
        priority : "P1",
        status : "Open",
        description : "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
        id : 2,
        name : "Need to change my delivery address",
        type : "Bug",
        assignee : "Rohan Bhowmick",
        priority : "P2",
        status : "Closed",
        description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
        id : 3,
        name : "Need to change my shipping unit",
        type : "Epic",
        status : "In Progress",
        assignee : "Prakhar Ranjan",
        priority : "P3",
        description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."   
    },
    {
        id : 4,
        name : "Need to change my delivery date",
        type : "Task",
        assignee : "Swarnim Bhatt",
        status : "Cancelled",
        priority : "P3",
        description : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like."   
    }
]

const userData = { name : "Rohan Bhowmick", emil : "rbhowmick184@gmail.com", mobile : "9876543210", logHours : "1 hour"};

exports.ticketDetails = ticketDetails;
exports.userData = userData;
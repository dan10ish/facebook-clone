import StoryCard from "./StoryCard";

const stories = [{
        name: "Danish",
        src: "https://danishansari.dev/Resources/Danish.svg",
        profile: "https://media-exp1.licdn.com/dms/image/C4E03AQGlv2hWtnHThw/profile-displayphoto-shrink_800_800/0/1628187980731?e=1634169600&v=beta&t=HeNtE91o09-TtxsycwF-l_-ucYV5U-Y_v7VWdnXW9Mo",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
];

function Stories() {

    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories

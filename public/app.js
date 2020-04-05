const contentNode = document.getElementById('contents');
class MyInfo extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "h1",
                null,
                "Dhvanesh Shah"
            ),
            React.createElement("img", { src: "myself.jpg" }),
            React.createElement(
                "p",
                null,
                "Hello there..! I am Dhvanesh Shah, an International Graduate Student pursuing Master of Science in Computer Science. I have just started to learn React. I hope to achieve mastery over React by taking small steps each day."
            ),
            React.createElement(
                "a",
                { href: "#" },
                "View My Github Repo"
            )
        );
    }
}

ReactDOM.render(React.createElement(MyInfo, null), contentNode);
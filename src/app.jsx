const contentNode = document.getElementById('contents');
class MyInfo extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 >Dhvanesh Shah</h1>
                <img src="myself.jpg" />
                <p>Hello there..! I am Dhvanesh Shah, an International Graduate Student pursuing Master of Science in Computer Science. I have just started to learn React. I hope to achieve mastery over React by taking small steps each day.</p>
                <a href="#">View My Github Repo</a>
            </div>
        );
    }
}

ReactDOM.render(<MyInfo />, contentNode);
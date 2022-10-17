import "./jokes.styles.css";

export const Jokes = () => {
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div className="jokes-container">
      {jokes.map((joke) => {
        return (
          <div className="joke-container" key={joke.id}>
            <span className="joke-setup">{joke.setup}</span>
            <span className="joke-punchline">{joke.punchline}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Jokes;

// <div className="jokes-container">
//   <span className="joke-question"></span>
//   <span className="joke-punchline"></span>
// </div>;

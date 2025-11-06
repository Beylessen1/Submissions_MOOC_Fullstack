function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return <p>{props.name} {props.number}</p>;
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} number={props.parts[0].number} />
      <Part name={props.parts[1].name} number={props.parts[1].number} />
      <Part name={props.parts[2].name} number={props.parts[2].number} />
    </div>
  );
};

function Total(props) {
  return <p>Number of exercises {props.total}</p>;
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', number: 10 },
    { name: 'Using props to pass data', number: 7 },
    { name: 'State of a component', number: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].number + parts[1].number + parts[2].number} />
    </div>
  );
};

export default App;

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h2", null, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "James",
      breed: "bacet d",
    }),
    React.createElement(Pet, {
      animal: "caggt",
      name: "Luna",
      breed: "mis",
    }),
    React.createElement(Pet, {
      animal: "hamester",
      name: "frufru",
      breed: "rat",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

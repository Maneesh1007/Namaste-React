const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "i am h1 tag"),
  React.createElement("h2", {}, "i am h2 tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

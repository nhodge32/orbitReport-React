import satData from "./satData";

const Buttons = (props) => {
  return (
    <div>
      {props.displaySats.map((sat, id) => {
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => props.setSat(satData)}>All orbits</button>
    </div>
  );
}

export default Buttons;
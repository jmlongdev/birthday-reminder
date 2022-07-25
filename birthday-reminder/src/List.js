import React, { Fragment } from "react";

// destructuring people from props.
// so you dont have to drill this way (props.people)

//destructuring the properties of person before using them

const List = ({ people }) => {
  return (
    <Fragment>
      <ul>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name}></img>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default List;

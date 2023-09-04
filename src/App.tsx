import React from 'react';
import {PeopleList} from "./Components/PeopleList";
import {container} from "./utils/DI/containers";
import {ContainerProvider} from "brandi-react";
import {PlanetsList} from "./Components/PlanetsList";

function App() {
  return (
    <ContainerProvider container={container}>
      <PeopleList />
      <hr/>
      <PlanetsList />
    </ContainerProvider>
  );
}

export default App;

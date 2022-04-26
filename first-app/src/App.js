import "./styles/App.css";
import TaskListComponent from './components/container/task_list';
import GreetingStyles from "./components/pure/greetingStyles";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de la lista de tareas */}
        <TaskListComponent></TaskListComponent>
        {/* Ejemplo de useState */}
        {/* <MiComponenteConContexto /> */}
        {/*  */}
        {/* <Ejemplo4 name="Zoen"> */}
          {/* todo lo que esta aqui es tratado como props.children */}
          {/* <h3>
            Contenido del children
          </h3>
        </Ejemplo4> */}
        <GreetingStyles name='Zoen'></GreetingStyles>
      </header>
    </div>
  );
}

export default App;
import {useState} from "preact/hooks";
import "./app.css";

export function Tareas(props) {
	const handleEliminar = () => {
		props.onEliminar(props.val);
	};
	return (
		<>
			<div className="d-flex justify-content-between mb-2 card bg-secondary">
				<div className="bg-secondary">
					<ul className="list-group list-group-flush bg-secondary">
						<li
							value={props.val}
							class="list-group-item bg-secondary text-white"
						>
							{props.val}
						</li>
					</ul>
				</div>
				<div>
					<button className="btn btn-danger delete" onClick={handleEliminar}>
						<img
							src="https://cdn-icons-png.flaticon.com/512/166/166475.png"
							width={"15px"}
						></img>
					</button>
				</div>
			</div>
		</>
	);
}

export function App() {
	const [visible, setVisible] = useState(false);
	const [nuevaTarea, setNuevaTarea] = useState("");
	const [tareas, setTareas] = useState([]);

	const toggleVisible = () => {
		setVisible(!visible);
	};

	const agregarTarea = () => {
		if (nuevaTarea) {
			setTareas([...tareas, nuevaTarea]);
			setNuevaTarea("");
		}
	};

	const eliminarTarea = (tarea) => {
		const nuevasTareas = tareas.filter((t) => t !== tarea);
		setTareas(nuevasTareas);
	};

	return (
		<>
			<div className="container mt-5">
				<div className="form p-5 bg-secondary">
					<h1>
						<strong>Todo APP</strong>
					</h1>
					<input
						className="form-control mb-2"
						type="text"
						placeholder="Agrega una nueva tarea"
						value={nuevaTarea}
						onChange={(e) => setNuevaTarea(e.target.value)}
					/>
					<button className="btn btn-primary" onClick={agregarTarea}>
						Agregar
					</button>
					<button
						className={`show bg-secondary btn-add ${visible ? "active" : ""}`}
						onClick={toggleVisible}
					>
						<img
							src="https://raw.githubusercontent.com/kevinvillajim/ToDoApp/main/img/flecha.png"
							width={"15px"}
							alt="Plus Icon"
						/>
					</button>
					<div
						id="tareasDesplegadas"
						style={{display: visible ? "inline" : "none"}}
					>
						{tareas.map((e, key) => (
							<Tareas key={key} val={e} onEliminar={eliminarTarea} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}

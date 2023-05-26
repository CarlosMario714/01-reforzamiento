// import { TiposBasicos } from "./typescript/TiposBasicos"
// import { Contador } from './components/Contador';
// import { ContadorConHook } from './components/ContadorConHook';
// import { Funciones } from './typescript/Funciones';
// import { Usuarios } from "./components/Usuarios";
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Login } from './components/Login';

import { Formularios } from "./components/Formularios";

export const App = () => {
	return (
		<div className="mt-2">
			<h1>Introduccion a TS - React</h1>
			<hr />
			{/* <TiposBasicos /> */}
			{/* <ObjetosLiterales /> */}
			{/* <Funciones /> */}
			{/* <Contador /> */}
			{/* <ContadorConHook /> */}
			{/* <Login /> */}
			{/* <Usuarios /> */}
			<Formularios />
		</div>
	);
};

export default App;

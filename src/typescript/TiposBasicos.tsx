export const TiposBasicos = () => {
	const nombre: string = 'Mario';
	const edad: number = 25;
	const estaActivo: boolean = true;

	const poderes: string[] = ['velocidad', 'volar'];

	return (
		<>
			<h3>TiposBasicos</h3>
			{nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
			<br />
			{poderes.join(', ')}
		</>
	);
};

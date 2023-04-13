import './App.css';
import { useEffect, useState } from 'react';

function App() {
	let [lista, setLista] = useState([])
	let [novoItem, setNovoItem] = useState('')

	useEffect(() => {
		setLista(['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4'])
	}, [])

	return (
		<div className='container'>
			<input
				type='text'
				value={novoItem}
				onChange={value => setNovoItem(value.target.value)}
				placeholder='Tarefa'
			/>
			<button onClick={() => adicionarNovoItem()}>Adicionar</button>
			<ul className='todo-list'>
				{lista.map((item, index) => (
					<li className='todo-item' key={index}>
						{item}
						<button onClick={() => deletarItem(index)}>Remover</button>
					</li>
				))}
			</ul>
		</div>
	);

	function adicionarNovoItem() {
		if (novoItem.length <= 0) {
			alert('Por favor, digite algo no campo Tarefa!')
			return;
		}

		let itemIndex = lista.indexOf(novoItem)
		if (itemIndex >= 0) {
			alert('Você já adicionou esta Tarefa!')
			return;
		}

		setLista([...lista, novoItem])
		setNovoItem('')
	}

	function deletarItem(index) {
		let tmpArray = [...lista]
		tmpArray.splice(index, 1)
		setLista(tmpArray)
	}
}

export default App;

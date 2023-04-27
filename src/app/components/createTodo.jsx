import { useState } from "react";

import { addTodo, getTodos } from "../apis";

export function CreateTodo() {
	const [data, setData] = useState({ title: "", description: "" });

	function handleChange(e) {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await addTodo(data);
		setData({ title: "", description: "" });
	}

	return (
		<section className="container">
			<section className="contents">
				<h1>ADD TODOS</h1>
				<section className="contents" data-testid="container">
					<form onSubmit={handleSubmit} className="form-container" noValidate>
						<label className="label" htmlFor="title">
							Title
						</label>
						<input
							type="text"
							name="title"
							value={data.title}
							onChange={handleChange}
							className="input"
							data-testid="title-input"
						/>
						<label className="label" htmlFor="description">
							Description
						</label>
						<input
							type="text"
							name="description"
							value={data.description}
							onChange={handleChange}
							data-testid="description-input"
							className="input"
						/>
						<button
							type="submit"
							className="button"
							data-testid="submit-button"
						>
							create todo
						</button>
					</form>
				</section>
			</section>
		</section>
	);
}
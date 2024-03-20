"use client";
import styles from "./page.module.css";
import styled from "styled-components";
import React, {
	Suspense,
	createContext,
	lazy,
	useContext,
	useEffect,
	useId,
	useReducer,
	useRef,
	useState,
} from "react";
import { Button } from "@/components";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { typeAppDispath } from "@/storeRedux/store";
import { sliceActions } from "@/storeRedux/slice";
import { Controller, useForm } from "react-hook-form";
import cn from "classnames";
const LazyDownload = lazy(() => delayForDemo(import("./test")));

function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}

function formRed(state, action) {
	// console.log(action.payload);
	switch (action.type) {
		case "CLEAR":
			return (state = state + 1);
		case "Fill":
			return {
				values: action.payload,
			};
	}
}

function useLocation() {
	const [data, setData] = useState();

	return [data, savetData];
}

export const UserContext = createContext({ userId: 1 });
export default function Home(): JSX.Element {
	const id = useId();
	const [count, setCount] = useState<string>("change");
	const [formState, dispatch] = useReducer(formRed, 0);
	const { values } = formState;
	console.log(values);
	const refTitle = useRef();
	const refPs = useRef();

	const inc = () => {
		setCount((state) => (state = "saved"));
		return true;
	};
	const [item, setItem] = useState([{}]);
	const numb = 22;
	useEffect(() => {
		dispatch({ type: "Fill", payload: numb });
		console.log(formState);
	}, [item]);
	const focus = (reff) => {
		reff.current.focus();
	};

	const clearInput = (event, id) => {
		for (let i = 0; i < id; i++) {
			event.target[i].value = "";
		}
	};

	const addItem = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const formProps = Object.fromEntries(formData);
		const { name, password } = formProps;
		console.log(formProps);
		if (name == "") {
			focus(refTitle);
			return;
		} else if (password == "") {
			focus(refPs);
			return;
		}

		setItem((state) => [
			...state,
			{
				name: formProps.name,
				text: formProps.password,
			},
		]);
		clearInput(event, 2);
	};
	console.log(item);

	function getNUm(a, b) {
		if (a % 2 === 0 && b % 2 === 0) {
			return "even";
		}
	}
	console.log(getNUm(2, 2));
	const [num, setNumber] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading((state) => (state = true));
		setTimeout(() => {
			const sumer = async () => {
				const res = await fetch("https://jsonplaceholder.typicode.com/posts");
				const response = await res.json();
				const sum = response.map((el, i) => el.id);
				// return response;
				console.log(sum);
				setNumber(sum);
				// return response;
			};
			sumer();
			setLoading((state) => (state = false));
		}, 3000);
	}, []);
	console.log(num);
	// }, []);
	// console.log(getlet());
	const some = useContext(UserContext);

	const Title = styled.h1<{ $primary?: boolean }>`
		font-size: 34px;
		color: red;
		padding: 25px 0;
		background-color: ${({ $primary }) => ($primary ? "orange" : "gray")};
		text-align: center;
	`;

	const dispatcch = useDispatch<typeAppDispath>();
	dispatcch(sliceActions.show("asd"));
	dispatcch(sliceActions.getler("12345qwerty"));
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmitt = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			{/* <Link /> */}
			<Title $primary>Hello wolrd</Title>

			<form className={styles.form} onSubmit={handleSubmit(onSubmitt)}>
				<div className={styles.wrapper}>
					<label className={styles.label} htmlFor={`${id}-name`}>
						name
					</label>

					<input
						className={styles.input}
						{...register("email", { required: { value: true, message: "typing please" } })}
						id={`${id}-name`}
						placeholder="email"

						// ref={refPs}
					/>
					{errors.email && (
						<span
							className={cn({
								[styles.errors]: errors.email,
							})}
						>
							{errors.email.message}
						</span>
					)}
				</div>
				<Controller
					control={control}
					name="someThing"
					render={({ field: { value, name }, fieldState, formState }) => {
						return (
							<input
								type="text"
								placeholder={name}
								{...register("someThing", { required: true })}
							/>
						);
					}}
				/>

				<div className={styles.wrapper}>
					<label className={styles.label} htmlFor={`${id}-pswd`}>
						password
					</label>
					<input
						className={styles.input}
						{...register("password", {
							required: { value: true, message: "password" },
						})}
						id={`${id}-pswd`}
						type="password"
						// ref={refPs}
						placeholder="password"
						name="password"
					/>
					{errors.password && (
						<span
							className={cn({
								[styles.errors]: errors.password,
							})}
						>
							{errors.password.message}
						</span>
					)}
				</div>
				<div className={styles.fb}>
					<UserContext.Provider value={{ userId: 1 }}>
						<Button context={some.userId} text="Submit" onClick={reset} />
						<Button context={some.userId + 1} text="Reset" onClick={reset} />
					</UserContext.Provider>
				</div>
				<input type="button" value="reset" onClick={() => reset()} />
			</form>

			{item.map((el, i) =>
				i == 0 ? (
					<></>
				) : (
					<div key={i}>
						{el.name} - {el.text}
					</div>
				),
			)}
			<Suspense fallback={"Загрузочка..."}>
				<LazyDownload />
			</Suspense>
			<div>
				{loading && <>Загрузка...</>}
				{num.map((el, i) => (
					<div key={i}>{el}</div>
				))}
			</div>
		</>
	);
}

// export default class Home extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<Button text="Hello kira" />
// 				<br />
// 				<button>bos</button>
// 			</>
// 		);
// 	}
// }

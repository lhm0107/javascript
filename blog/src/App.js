import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "강남 고기 맛집"]);
	let [따봉, 따봉변경] = useState(0);
	let posts = "강남 고기 맛집";
	let [modal, modal변경] = useState(false);
	let [num, numChange] = useState(0);

	function 제목바꾸기() {
		let newArray = [...글제목];
		newArray[0] = "여자 코트 추천";
		글제목변경(newArray);
	}
	function sortMenu() {
		let newArray = [...글제목];
		newArray.sort();
		글제목변경(newArray);
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 Blog</div>
			</div>
			<button onClick={제목바꾸기}>버튼</button>
			<button onClick={sortMenu}>정렬하기</button>
			<div className="list">
				<h3>
					{" "}
					{글제목[0]}{" "}
					<span
						onClick={() => {
							따봉변경(따봉 + 1);
						}}
					>
						👍
					</span>
					{따봉}
				</h3>
				<p>2월 15일 발생</p>
				<hr />
			</div>
			<div className="list">
				<h3> {글제목[1]}</h3>
				<p>2월 15일 발생</p>
				<hr />
			</div>
			<div className="list">
				<h3
					onClick={() => {
						modal변경(true);
					}}
				>
					{" "}
					{글제목[2]}
				</h3>
				<p>2월 15일 발생</p>
				<hr />
			</div>

			<button
				onClick={() => {
					numChange(0);
				}}
			>
				버튼1
			</button>
			<button
				onClick={() => {
					numChange(1);
				}}
			>
				버튼2
			</button>
			<button
				onClick={() => {
					numChange(2);
				}}
			>
				버튼3
			</button>

			<button
				onClick={() => {
					modal === true ? modal변경(false) : modal변경(true);
				}}
			>
				버튼
			</button>
			{글제목.map(function (a, i) {
				return (
					<div className="list">
						<h3
							onClick={() => {
								numChange(i);
							}}
						>
							{" "}
							{a}
						</h3>
						<p>2월 15일 발생</p>
						<hr />
					</div>
				);
			})}
			{modal === true ? <Modal 글제목={글제목} num={num}></Modal> : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h2>{props.글제목[props.num]}</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 회 맛집", "강남 고기 맛집"]);
	let [따봉, 따봉변경] = useState(0);
	let [date, dateChange] = useState(["02월15일", "02월16일", "02월18일"]);
	let [detail, detailChange] = useState(["버버리추천", "역삼동 최수사 추천", "역삼동 돈그리아 추천"]);
	let posts = "강남 고기 맛집";
	let [modal, modal변경] = useState(false);
	let [num, numChange] = useState(0);
	let [입력값, 입력값변경] = useState("");

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

	function addTitle() {
		let newArray = [...글제목];
		newArray.push(입력값);
		글제목변경(newArray);
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 Blog</div>
			</div>
			<button onClick={제목바꾸기}>버튼</button>
			<button onClick={sortMenu}>정렬하기</button>

			{글제목.map(function (a, i) {
				return (
					<div className="list" key={i}>
						<h3
							onClick={() => {
								modal변경(!modal);
								numChange(i);
							}}
						>
							{" "}
							{a}
						</h3>
						<p>{date[i]} 발생</p>
						<hr />
					</div>
				);
			})}

			<input
				onChange={(e) => {
					입력값변경(e.target.value);
				}}
			/>

			<div className="publish">
				<input
					onChange={(e) => {
						입력값변경(e.target.vaule);
					}}
				></input>
				<button onClick={addTitle}>저장</button>
			</div>

			{modal === true ? <Modal 글제목={글제목} num={num} date={date} detail={detail}></Modal> : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h2>{props.글제목[props.num]}</h2>
			<p>{props.date[props.num]}</p>
			<p>{props.detail[props.num]}</p>
		</div>
	);
}

export default App;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail(props) {
	let navigete = useNavigate();
	let { id } = useParams();

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} alt="신발사진" width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{props.shoes[id].title}</h4>
					<p>{props.shoes[id].content}</p>
					<p>{props.shoes[id].price}원</p>
					<button className="btn btn-danger">주문하기</button>
					<button
						className="btn btn-danger"
						onClick={() => {
							navigete(-1);
						}}
					>
						뒤로가기
					</button>
				</div>
			</div>
		</div>
	);
}
export default Detail;

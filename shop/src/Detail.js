import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let Box = styled.div`
	padding: 20px;
`;

let Title = styled.h4`
	font-size: 30px;
	color: ${(props) => props.color};
`;

function Detail(props) {
	useEffect(() => {
		setTimeout(() => {}, 2000);
	});

	let navigete = useNavigate();
	let { id } = useParams();
	let product = props.shoes.find(function (상품) {
		return Number(상품.id) === Number(id);
	});

	return (
		<div className="container">
			<Box>
				<Title color="blue">Detail</Title>
				<div className="my-alert2">
					<p>재고가 얼마 남지 않았습니다.</p>
				</div>
			</Box>
			<div className="row">
				<div className="col-md-6">
					<img src={`https://codingapple1.github.io/shop/shoes${Number(product.id) + 1}.jpg`} alt="신발사진" width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{product.title}</h4>
					<p>{product.content}</p>
					<p>{product.price}원</p>
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

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Balance = () => {
	const { store, actions } = useContext(Context);
	const formatBalanceNumber = (number) => { return new Intl.NumberFormat('es-ES', { style: 'decimal' }).format(number); }


	useEffect(() => {
		actions.getBalance();
		actions.getSources();
	}, [])


	return (
		<>
			<div className="container my-4">
				{/* title */}
				<div className="row mb-2"><h2>Balance</h2></div>
				{/* source select */}
				<div className="row mb-4">
					<div class="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Source
						</button>
						<ul className="dropdown-menu">
							{store.sources.length > 0 ? (
								store.sources.map(() =>
									(<li key={index}><a className="dropdown-item">{source.name}</a></li>)))
								:
								(<li><a className="dropdown-item">add a source</a></li>)}
						</ul>
					</div>
				</div>
				{/* balance number*/}
				<div className="row d-inline-flex mb-4" style={{ display: "flex", alignItems: "center" }} >
					<h1><span style={{ color: "grey" }}>€ </span>{store.balance && !isNaN(store.balance) ? formatBalanceNumber(store.balance) : "0"}</h1>
				</div>
				{/* Transactions */}
				<div className="row">
					<div className="card">

						<ul className="list-group list-group-flush">
							{store.transactions.length > 0 ? (store.transactions.map((transaction) => (
								<li className="list-group-item d-flex justify-content-between align-items-start">
									<div className="ms-2 me-auto">
										<div><span className="fw-bold">{transaction.source}</span></div>
										<p className="fw-light">{new date(transaction.date).toLocaleString('es-ES')}</p>
									</div>
									<span className="" style={{color: transaction.type === 'income' ? "red" : "green"}}>
										{transaction.amount < 0 ? `-€${Math.abs(transaction.amount)}` : `+€${transaction.amount}`}
										</span>
								</li>
							)))
							:
							(<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2 me-auto mt-2">
									<p>You don't have any transactions</p>
								</div>
							</li>)}
					</ul>
				</div>

			</div>

		</div >


		</>
	);
};


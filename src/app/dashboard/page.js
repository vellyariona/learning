'use client';
import axios from "axios";
import { useEffect, useState } from "react"

export default function Testing(){
	const [count, setCount] = useState(0)
	const [data, setData] = useState([])
	const [isLoading, setLoading] = useState(true)

	const fetchData = () => {
		// fetch(`https://dummyjson.com/products?skip=${count}`)
		// .then(res => res.json())
		// .then(json => {
		// 	setData(json.products)
		// })
		// setLoading(true)
		axios.get(`https://dummyjson.com/products?skip=${count}`)
		.then(function (response) {
			// handle success
			console.log(response.data.products);
			setData(response.data.products)
			setLoading(false)
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}

	useEffect(()=>{
		fetchData()
	},[count])

	return (
		<>
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 10)}>Click me</button>
			{isLoading && <p>loading....</p>}
			{data.length > 10   }  ? <p>data</p> : <p>ini lo</p>
			{data.map((x, index) => {
				return(
					<p>{`${x.id}`} {x.title}</p>
				)
			})}
		</div>
		</>
	)
}
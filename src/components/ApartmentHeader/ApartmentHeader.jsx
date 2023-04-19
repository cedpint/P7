import React from 'react'
import './ApartmentHeader.css'

export function ApartmentHeader(props) {

  const flat = props.flat;
  const name = flat.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='apartment-header'>
				<div className='apartment-title'>
					<h1>{flat.title}</h1>
					<h2>{flat.location}</h2>
					<div className='apartments-filters'>
						{/*for each tag retrive a span with tag indside span*/}
						{flat.tags.map((tag) =>(
						<span key={tag}>{tag}</span>
						))}
					</div>	
				</div>
				<div className='apartment-owner'>
					<div className='apartment-name-avatar'>
						<div className='name-firstname'>
							<span>{firstName}</span>
							<span>{lastName}</span>
						</div>
						<div className='apartment-owner-avatar'>
							<img src={flat.host.picture} alt=""></img>
						</div>
					</div>
					<div className='apartment-owner-stars'>
						{[1, 2, 3, 4, 5].map((num) => (
							<span key={num}className={props.flat.rating >= num ? "full_star" : ""}>★</span>
						))}
					</div>
				</div>
			</div>
  );
}

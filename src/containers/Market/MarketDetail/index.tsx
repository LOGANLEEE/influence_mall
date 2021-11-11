import { ContainerProps } from 'App';
import { Brick } from 'components/Brick';
import React from 'react';
import { Wrapper } from './Wrapper';

const img = 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25';
const img2 = 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1';

export const MarketDetail = ({ className }: ContainerProps) => {
	return (
		<Wrapper className={className}>
			<div className='image-holder'>
				<img src={img} srcSet={img} alt='product detail 1' loading='lazy' />
				<img src={img2} srcSet={img2} alt='product detail 2' loading='lazy' />
			</div>
			<Brick />
			<div className='desc'>
				이렇게 입고 여자친구가 생겼습니다.이렇게 입고 여자친구가 생겼습니다. 진짜로 밖에 겁나 추운데
				<br />
				이렇게 입고 여자친구가 생겼습니다.
			</div>
			<Brick />
			<div className='product-info'>
				<img
					src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
					srcSet='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
					alt='product detail 1'
					loading='lazy'
				/>
				<div className='info'>
					<span className='name'>[떡볶이코트]3가지매력 핸드크림 </span>
					<span className='price'>마켓 판매가 ₩10,000</span>
				</div>
				<div className='sale'>
					<span className='text'>최대 추가 할인</span>
					<span className='percentage'>10%</span>
				</div>
			</div>
		</Wrapper>
	);
};

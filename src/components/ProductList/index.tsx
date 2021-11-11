import React, { useCallback } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { numberWithThousandSeperator } from 'utils';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}
const itemData = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 5,
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 6,
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 7,
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 8,
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 9,
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 10,
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 11,
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
	{
		id: 12,
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		original_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
		market_price: numberWithThousandSeperator(Math.round(Math.random() * 100000)),
	},
];

export const ProductList = ({ className }: Props) => {
	const { push } = useHistory();

	const pushToDetail = useCallback((id) => push(`/market/detail/${id}`), []);
	return (
		<Wrapper className={className}>
			<ImageList rowHeight={250}>
				{itemData.map(({ id, img, title, original_price, market_price }) => (
					<ImageListItem key={img} onClick={() => pushToDetail(id)}>
						<img
							src={`${img}?w=248&fit=crop&auto=format`}
							srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							alt={title}
							loading='lazy'
						/>
						<ImageListItemBar
							title={title}
							subtitle={
								<div className='desc'>
									<span>₩ {market_price}</span>
									<del className='sale_price'>₩ {original_price}</del>
								</div>
							}
							position='below'
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Wrapper>
	);
};

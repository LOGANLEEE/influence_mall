import React from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
	list?: string[];
}

export const Caution = ({ className, list }: Props) => {
	return (
		<Wrapper className={className}>
			<span>안내사항</span>
			<ul>
				{list?.map((guide: string) => (
					<li key={guide}>{guide}</li>
				))}
			</ul>
		</Wrapper>
	);
};

import React from 'react';
import {styled} from 'frontity';

const FormBlurb = ({className, children}) => {
  return (
		<div className="form-group">
			<div className={`form-blurb ${className}`}>
				{children}
			</div>
		</div>
  );
};

export default styled(FormBlurb)`
	max-width: 400px;
	text-align: center;
	margin: 75px auto 0;
	font-size: 16px;
	line-height: 1.31;
	color: #BFB6B4;

	strong {
		color: #fff;
		font-size: 18px;
		font-weight: 500;
	}
`;
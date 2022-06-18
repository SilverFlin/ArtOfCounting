import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = (props) => {
	return (
		<React.Fragment>
			<Link to="../">Back to {props.backTo}</Link>
			<hr />
		</React.Fragment>
	);
};

export default BackLink;

import React from 'react';
import { Space } from 'antd';
import "antd/dist/antd.css";
import "./navigater.scss"

const Navigater: React.FC = () => {
	return (
		<div className="Navigater">
			<Space>
				<div className="icons">
			    	<a className="home" href="http://localhost:3000"></a>
			    	<a className="vote" href="http://localhost:3000"></a>
					<a className="mypage" href="http://localhost:3000"></a>
				</div>
			</Space>
		</div>
	);
};

export default Navigater
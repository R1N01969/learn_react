import React from 'react';
import { Space } from 'antd';
import "antd/dist/antd.css";
import "./create_user.scss"

const CreateUser: React.FC = () => {
	return (
		<div className="CreateUser">
			<Space>
				<h2 className="title">ユーザ作成</h2>
				<form action="#" method="post" className="inputs">
					<div className="user_id">
						<p>ユーザID</p>
			    		<input type="text" name="user_id" />
			    	</div>
			    	<div className="password">
						<p>パスワード</p>
			    		<input type="password" name="password" />
			    	</div>
			    	<div className="sex">
						<p>性別</p>
						<p>
				    		<input type="radio" id="male" name="sex" value="0" />
				    		<label htmlFor="male">男性</label>
				    		<input type="radio" id="female" name="sex" value="1" />
				    		<label htmlFor="female">女性</label>
			    		</p>
			    	</div>
			    	<div className="birthday">
						<p>生年月日</p>
			    		<input type="date" name="birthday" />
			    	</div>
			    	<div className="region">
						<p>住んでいる地域</p>
			    		<select name="region">
			    			<option value="0">北海道地方</option>
			    			<option value="1">東北地方</option>
			    			<option value="2">関東地方</option>
			    			<option value="3">中部地方</option>
			    			<option value="4">近畿地方</option>
			    			<option value="5">中国地方</option>
			    			<option value="6">四国地方</option>
			    			<option value="7">九州地方</option>
			    		</select>
			    	</div>
			    	<div className="submit">
			    		<input type="submit" value="登録" />
					</div>
				</form>
			</Space>
		</div>
	);
};

export default CreateUser
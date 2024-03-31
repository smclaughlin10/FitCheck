import React, {useState} from 'react';
import '../styles/Model.css';
import ModelNav from '../components/ModelNav';
import ModelViewer from '../components/model_viewer';

function Model() {
    const [modelData, setModelData] = useState({gender: "", head: "", torso: "", leftArm: "", righttArm: "", legs: "", feet: "", fullBody: ""});
	return (<div className='MainPage'>
		<ModelNav />
		<ModelViewer modelData={modelData} mode={"view"}/>
	</div>);
}

export default Model;
import { Component } from "react";
import GirlBoyImg from '../imgs/home-girl-boy.svg';
import HouseImg from '../imgs/house.svg';

export default class HomePage extends Component<{onStartTest: () => void, onReadGeneralInfo: () => void}>{
    render() {
        
        return <div className='home-full-wrapper'>
            <div className='home-wrapper'>
                <span className="home-title">
                ამოიცანი<br/>
                <span className="psychological">ფსიქოლოგიური</span>
                <br/>
                ძალადობის ნიშნები<br/>
                პარტნიორისგან<br/>
                </span>
                <img className="home-main-image" src={GirlBoyImg}></img>
                <span className="primary-button" onClick={() => {
                        this.props.onStartTest()
                    }}>დაიწყე ქვიზი</span> 
                <span className="secondary-button" onClick={() => {
                        this.props.onReadGeneralInfo()
                    }}>ზოგადი ინფორმაცია</span>
                <img className="home-house" src={HouseImg}></img>

            </div>
        </div>
    }
}
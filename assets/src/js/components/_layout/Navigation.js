import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Login } from "./../Login/Login";
import { Register } from "./../Register/Register";
import Popup from './../_util/Popup';
import Token from './../_util/Token';
import Search from './../_util/Search';
import $ from "jquery";

export class Navigation extends Component {
    constructor(props){
        super(props);
        if(this.props.theme == 'white'){
            this.theme = 'white';
            this.logo = '/static/src/img/logo.png';
        }
        else{
            this.theme = 'black';
            this.logo = '/static/src/img/logo_black.png';
        }
        this.state={
            showLoginPopup: false,
            showRegisterPopup: false,
            done: true
        } 
        this.showLoginPopup = this.showLoginPopup.bind(this);
        this.close = this.close.bind(this);
        this.showRegisterPopup = this.showRegisterPopup.bind(this);
    }

    showOverlay(e){
        //console.log(e.target);
        //$(e.target).parent().find('ul').css('display','flex');
        if($(e.target).parent().find('ul').css('display')=='flex'){
            $(e.target).parent().find('ul').css('display','none');
        }
        else{
            $(e.target).parent().find('ul').css('display','flex');
        }
        //e.target.parentElement.find('overlay')
        //.getElementById('overlay').style.display = "flex";
    }

    endOverlay(e){
        console.log(e.target);
        $(e.target).find('ul').css('display','none');
        //e.target.parentElement.find('overlay')
        //.getElementById('overlay').style.display = "flex";
    }

    endList(e){
        console.log(e.target);
        $(e.target).find('ul').css('display','none');
        //e.target.parentElement.find('overlay')
        //.getElementById('overlay').style.display = "flex";
    }

    showLoginPopup() {
        //alert();
        this.setState({
          showLoginPopup: true,
          done: false
        },function(){
            this.setState({
                done: true
            })
        }
        );
    }

    close(){
        this.setState({
            showRegisterPopup: false,
            showLoginPopup:false,
            done: false
          },function(){
              this.setState({
                  done: true
              })
          }
          );
    }

    showRegisterPopup() {
        //alert();
        this.setState({
          showRegisterPopup: true,
          done: false
        },function(){
            this.setState({
                done: true
            })
        }
        );
    }

    search(){
        this.props.history.push('/events');
    }

    render() {
        const styles = {
            color: this.theme
        }

        return (
            <Fragment>
                <nav>
                    <div className="container">
                        <ul className="nav"><Link to='/'><img src={this.logo} href="#" /></Link>
                            {/* <li><Link to='/music' style={styles}>My List</Link></li> */}
                        </ul>
                        
                        <ul className="nav">
                            <li><a onClick={this.showLoginPopup}>Login</a></li>
                        </ul>
                    </div>
                    
                </nav>
                <Popup click={this.state.showLoginPopup} close={this.close}>
                    <Login />
                </Popup>
                <Popup click={this.state.showRegisterPopup} close={this.close}>
                    <Register />
                </Popup>
            </Fragment>
        )
    }
}

export default withRouter(Navigation)

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImageOnLoad from 'background-image-on-load';
import { FormHelperText } from '@material-ui/core';
import './MainPage.css';

class MainPage extends Component {
  state = {	
    bgIsLoaded: false	
  };

  render() {
    const { bgIsLoaded } = this.state;
    return (
      <div	
          style={{ 	
            height: '100%',
            backgroundPosition: 'center',	
            backgroundSize: 'cover',	
            backgroundImage: `url(${!bgIsLoaded ? 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg' : 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg'})`	
          }}	
        >	
          <BackgroundImageOnLoad	
            src={'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg'}	
            onLoadBg={() =>	
              this.setState({	
              bgIsLoaded: true	
            })}	
            onError={err => console.log('error', err)}	
          />	

        <header> 
          <logo>F A C E W E B</logo>     
        <Link to ="/">홈</Link>
        <Link to ="/home">시작하기</Link>
        </header>

        <footer>footer section </footer>
              


      </div>	

    )
  }
}

export default MainPage
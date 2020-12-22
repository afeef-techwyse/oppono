import React from 'react';
import {connect, styled} from 'frontity';
import Footer from '../Footer';
import Header from '../Header';
import map from '../../assets/images/map-bg.png';
import mapInfo from '../../assets/images/map-info-bg.png';
import W50 from '../form-components/W50';
import Input from '../form-components/Input';
import FormRepeatableInput from '../form-components/FormRepeatableInput';
import Button from '../form-components/Button';
import Container from '../reusable/Container';
import {size} from '../../functions/size';


const MapPage = (props) => {
  React.useEffect(() => {
    props.actions.theme.setActiveTheme('gray-theme');
  }, []);
  return (
    <div className={props.className}>
      <Header hasSubMenu={false}/>
      <Container>
        <div className="map-wrapper">
          <div className="col-left">
            <div className="text-wrapper">
              <h1 className={'headline-1'}>We’re proud to serve the GTA</h1>
              <h2 className={'headline-2 dark'}>Looking within a specific city or region?</h2>
            </div>
            <div className="inputs-group">
              <Input type={'text'} name={'city'} value={'Oakville'} label={'Type in your city'}/>
              <p>OR</p>
              <Input type={'text'} name={'postal-code'} value={'L5H 3S4'} label={'Type in your Postal Code'}/>
            </div>
            <div className="btn-group">
              <Button label={'Search'}/>
              <Button label={'Find Appraisers in the Area'}/>
            </div>
          </div>
          <div className="col-right">
            <div className="appraisal-block">
              <h3>Ajay Kaith</h3>
              <p className="text">905-555-2234</p>
              <p className="text">ajay.kaith@oppono.com</p>
              <hr />
              <p className="text">Halton Region </p>
              <p className="ltv">80% LTV</p>
            </div>
            <Button label={'Find Appraisers in the Area'}/>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default styled(connect(MapPage))`

min-height: 100vh;
background-image: url(${map})!important;
background-size: cover;

${Header},${Footer}{
  background: transparent;
}
.map-wrapper{
  display: flex;
  padding-top: ${size(74)};
  min-height: 100vh;
  align-items: center;
  padding-bottom: ${size(110)};
  justify-content: space-between;
  @media(max-width: 991.98px){
    flex-direction: column;
    padding-top: ${size(145)};
    padding-bottom: ${size(200)};
  }
  .col-left{
    display: flex;
    flex-direction: column;
    max-width: ${size(620)};
    @media(max-width: 991.98px){
      margin-bottom: ${size(50)};
    }
    .inputs-group{
      display: flex;
      align-items: center;
      .form-group{
          margin: 0;
      }
      p{
        color: #bfb6b4;
        font-size: ${size(16)};
        font-weight: 500;
        margin: 0 ${size(38)};
        @media(max-width: 575.98px){
          margin:${size(20)} 0;
        }
      }
      margin-top: ${size(15)};
      @media(max-width: 991.98px){
        margin-top: ${size(63)};
      }
      @media(max-width: 575.98px){
        margin-top: ${size(47)};
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .headline-1{
      color: #bfb6b4;
      font-size: ${size(40)};
      font-weight: 400;
      line-height: ${size(48)};
      @media(max-width: 991.98px){
        font-size: ${size(35)};
      }
      @media(max-width: 575.98px){
        font-size: ${size(32)};
        line-height: ${size(40)};
      }
    }
    .headline-2{
      color: rgba(191, 182, 180, 0.5);
      font-size: ${size(29)};
      font-weight: 400;
      line-height: ${size(40)};
      @media(max-width: 991.98px){
        font-size: ${size(24)};
        line-height: normal;
      }
      @media(max-width: 575.98px){
        font-size: ${size(28)};
      }
    }
    .btn-group{
      margin-top: ${size(80)};
      button{
        width: 50%;
        max-width: unset;
        margin: 0;
        &:first-of-type{
          margin-right: ${size(20)};
        }
      }
      @media(max-width: 991.98px){
        display: none;
      }
    }
  }
  .col-right{
    display: flex;
    flex-direction: column;
    @media(max-width: 450px){
      width: 100%;
    }
    .appraisal-block{
      padding: ${size(60)} ${size(45)} ${size(45)};
      display: flex;
      flex-direction: column;
      background: url(${mapInfo});
      background-size: cover;
      min-width: ${size(318)};
      @media(max-width: 575.98px){
        padding: ${size(51)} ${size(38)} ${size(38)};
        
      }
    }
    h3{
      color: #bfb6b4;
      font-size: ${size(56)};
      font-weight: 300;
      line-height: ${size(64)};
      margin-bottom: ${size(17)};
      @media(max-width: 575.98px){
        font-size: ${size(48)};
        text-align: center;
      }
    }
    .text{
      color: #bfb6b4;
      font-size: ${size(16)};
      font-weight: 300;
    }
    .ltv{
      color: #bfb6b4;
      font-size: ${size(30)};
      font-weight: 300;
      line-height: ${size(39)};
    }
    hr{
      background-color: rgba(191, 182, 180, 0.1);
      margin: ${size(20)} 0;
      height: 1px;
      display: inline-block;
      @media(max-width: 575.98px){
        margin: ${size(15)} 0;
      }
    }
    button{
      display: none;
      @media(max-width: 991.98px){
        display: block;
        margin-top: ${size(72)};
      }
      @media(max-width: 575.98px){
        margin-top: ${size(62)};
      }
      @media(max-width: 450px){
        width: 100%;
      }
    }
  }
}

`;
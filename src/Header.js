import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';

class Header extends Component{
    render(){
        return(
        <div onClick={this.props.doTest}>
            <h1>Click here to finish the sentence.</h1>
            {this.props.banner}
            {this.props.test}
        </div>
        )
    }
    
}
const mapStateToProps = (state, ownProps) => {
    return {
      test: state.testReducer.test,
    };
  };
  
  const mapDispatchToProps = { doTest };
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);
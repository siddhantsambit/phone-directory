import React from 'react';
import './Header.css'

/* const Header = function(){
    return(
        <div className="header">
          Phone Directory
        </div>
    )
} */

/*class Header extends Component{
    render(){
        return(
            <div className="header">
                {this.props.heading}
            </div>
        )
    }
}*/

/* const Header = function(){
    return(
        <div style={{textAlign: 'center', padding: 20, background: '#000', color:'#fff', textTransform:'uppercase'}}>
          Phone Directory
        </div>
    )
} */

/* const Header = function () {
    const headerStyle = { textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' };
    return (
        <div style={headerStyle}>
            Phone Directory
        </div>
    )
} */

 const Header = function (properties) {
    return (
        <div className="header">
            {properties.heading}
        </div>
    )
}

export default Header;
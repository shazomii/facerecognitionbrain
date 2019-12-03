import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange }) => {
    return (isSignedIn
        ? <nav style={{ display: 'flex', justifyContent: 'flex-end' }} >
            <p className='f5 link black grow dib pa2 mr2 pointer no-underline br-pill white bg-dark-blue' onClick={() => onRouteChange('signin')}>Sign out</p>
        </nav>
        : <nav style={{ display: 'flex', justifyContent: 'flex-end' }} >
            <p className='f5 link black grow dib pa2 mr2 pointer no-underline br-pill white bg-dark-blue' onClick={() => onRouteChange('signin')}>Sign In</p>
            <p className='f5 link black grow dib pa2 mr2 pointer no-underline br-pill white bg-dark-blue' onClick={() => onRouteChange('register')}>Register</p>
        </nav>)

}

export default Navigation;
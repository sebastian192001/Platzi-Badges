import React from 'react';
import ConfLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
        } = this.props;
        return(
        <div className='badges'>
            <div className='badge_header'>
                <img src={ConfLogo} alt="logo de la conferencia"/>
            </div>

            <div className='badge_section-name'>
                <Gravatar className='badge_avatar' email={this.props.email} alt="avatar"/>
                <h1>{firstName} <br/> {lastName}</h1>
            </div>

            <div className='badge_section-info'>
                <h3>{jobTitle}</h3>
                <div>{twitter}</div>
            </div>

            <div className='badge_footer'>
                #platziconf
            </div>

        </div>
            
        )
    }
}

export default Badge
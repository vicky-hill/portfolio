import React from 'react';
import crm from '../../../images/Projects/crm.png';

const CRM = () => {
    return (
        <div className="col project">
            <img class="screenshot" src={crm} alt="" />
            <h3>Lo70s Custom CRM</h3>
            <p>Designed and built a database that would combine the benefits of using spreadsheets with the
          benefits of a central CRM, while integrating workflows specifically designed for Lo70s' lead generation
          strategy.</p>
            <p><span id="createdwith">Created with </span><span id="tools">&nbsp;html5, css3, php, mysql</span></p>
        </div>
    )
}


export default CRM;
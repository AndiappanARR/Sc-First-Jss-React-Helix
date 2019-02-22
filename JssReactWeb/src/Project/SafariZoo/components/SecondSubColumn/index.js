import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const SecondSubColumn = ({ sitecoreContext, rendering }) => {

    return (
        <div class="col-5">
            <Placeholder name="second-sub-column" rendering={rendering} />
        </div>
    );
};

export default withSitecoreContext()(SecondSubColumn);

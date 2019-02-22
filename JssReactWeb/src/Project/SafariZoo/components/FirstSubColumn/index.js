import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const FirstSubColumn = ({ sitecoreContext, rendering }) => {

    return (
        <div class="col bg-success">
            <Placeholder name="first-sub-column" rendering={rendering} />
        </div>
    );
};

export default withSitecoreContext()(FirstSubColumn);

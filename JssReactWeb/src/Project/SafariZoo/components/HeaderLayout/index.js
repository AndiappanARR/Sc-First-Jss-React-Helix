import React from 'react';
import { Placeholder, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const HeaderLayout = ({ sitecoreContext, rendering }) => {

    return (
        <div class="container">
            <div data-e2e-id="header-layout" class="row bg-warning">
                <Placeholder name="header" rendering={rendering} />
            </div>
        </div>
    );
};

export default withSitecoreContext()(HeaderLayout);

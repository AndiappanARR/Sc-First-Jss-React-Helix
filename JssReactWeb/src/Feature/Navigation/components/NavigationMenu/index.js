import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple navigation menu.
 */
const NavigationMenu = (props) => {
    // const { List } = props.fields;

    const listItems = props.fields.List.map((listItem, index) =>
        <li class="nav-item">
            <Link field={listItem.fields.Url} class="nav-link">
                <Text field={listItem.fields.DisplayName} class="" />
            </Link>
        </li>
    );
    return (<nav class="navbar navbar-expand-sm  bg-light">
        <ul class="navbar-nav">
            {listItems}
        </ul>
    </nav>
    );

};

export default NavigationMenu;

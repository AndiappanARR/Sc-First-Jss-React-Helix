import React from 'react';
import { Text, Image, Link ,RichText} from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Logo component. 
 */
const BasicPanel = ({ fields }) => (

    <div class={ `panel + ${fields.HeadingType.value.toString()}` }>
        <div class="panel-heading">
            <Text field={fields.HeadingText} class="" />
        </div>
        <div class="panel-body">
            <RichText field={fields.ContentText} class="" />
        </div>
    </div>

);

export default BasicPanel;
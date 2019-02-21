import React from 'react';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple navigation menu.
 */
const Thumbnail = (props) => {
    //const { List } = ;

    const listItems = props.fields.ThumbailList.map((listItem, index) =>

        <div class="col-md-4">
            <div class="thumbnail">
                <Link field={listItem.fields.Url}>
                    <Image media={listItem.fields.Image} />
                    <div class="caption">
                        <p> {(index + 1).toString()}. <Text field={listItem.fields.Title} class="" /></p>
                    </div>
                </Link>
            </div>
        </div>

    );
    return (

        <div className="row">
            {listItems}
        </div>
    );
};

export default Thumbnail;

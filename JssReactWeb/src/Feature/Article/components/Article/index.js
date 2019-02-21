import React from 'react';
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Article.
 */
const Article = (props) => {
    //const { List } = ;

    const listItems = props.fields.ArticleContents.map(function (listItem, index) {

        // Types Loop
        switch (listItem.fields.Type.value) {
            //If its heading
            case 'heading':

                //Sub heading
                let subHeading = null;
                if (typeof listItem.fields.SubHeading != 'undefined' && listItem.fields.SubHeading) {
                    subHeading =
                        <h3 class="text-center">
                            <RichText field={listItem.fields.SubHeading} class="" />
                        </h3>;
                }

                if (typeof listItem.fields.Heading != 'undefined' && listItem.fields.Heading) {

                    return <div>
                        <h1 class="text-center">
                            <Text field={listItem.fields.Heading} class="" />
                        </h1>
                        {subHeading}
                    </div>;
                }


                break;
            //If its paragraph
            case 'para':
                // Image right posion
                let rightImage = null;
                if (listItem.fields.ImagePostion.value == "right") {
                    rightImage = <Image media={listItem.fields.Image} class="float-right"/>
                }

                // Image left posion
                let leftImage = null;
                if (listItem.fields.ImagePostion.value == "left") {
                    leftImage = <Image media={listItem.fields.Image} class="float-left"/>
                }

                if (typeof listItem.fields.ParagraphText != 'undefined' && listItem.fields.ParagraphText) {
                    return (
                        <div class="">
                            {rightImage}
                            {leftImage}
                            <p>
                                <RichText field={listItem.fields.ParagraphText} class="" />
                            </p>
                            
                        </div>
                    );
                }
                break;
        }

    });
    return (

        <article>
            {listItems}
        </article>
    );
};

export default Article;

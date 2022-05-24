import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center text-4xl pt-14'>Questions and Answers</h2><br /><br /><br />
            <h4 className='text-left text-2xl mx-5 font-medium'> What is Context API?</h4><br />
            <p className='text-left ml-5'>The <strong>React Context API</strong> is a way for a react app to effectively produce global variable that can be passes around, this is the alternative to props drilling or moving props 
            from parent to child to current and so on. 
            React.createContext() is all you need. It returns a consumer and provider. 
            The Context API is a React structure that enables you to exchange unique details and assists in solving props-drilling from all levels of your application.</p>
            <br />
            <br />
            <br />
            <h4 className='text-left text-2xl mx-5 font-medium' >What is semantic tag?</h4> <br />
            <p className='text-left ml-5'>Semantic html tags allow you to add meaning to your markup so that search engine  screen readers and web browser can make sense of it. by default, user agent reads your content it doesn't understand 
            the context and meaning. Semantic html tags let you serve structure content to your users, which is especially important for on-page SEO and accessibility.
            semantic tags existed in earlier html versions, the html 5 specifications added several new semantic element to the syntax both on the block and inline levels.
            </p>
            <br />
            <br /
            ><br />
            <h4 className='text-left text-2xl mx-5 font-medium'> What is the difference between inline and inline-block elements?</h4><br />
            <p className='text-left ml-5'>
                <strong>Inline Elements</strong><br />
                Inline Elements only occupy sufficient width that is required. They don't start from a new line. They allow other inline elements to sit along. <br /><br />
                <strong>Inline-Block Elements</strong> <br /> Inline-Block Elements are similar to inline elements, except they can have padding and margins added on all four sides.
                They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. They do not contain any other elements next to them.
            </p>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Blog;
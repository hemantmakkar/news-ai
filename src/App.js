import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Header from './components/Header/Header';
import NewsCards from './components/NewsCards/NewsCards';

const alanKey = "faea50b9f22fc8a6bdfddb06638ba0582e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })
    }, []);

    return (
        <div>
            <Header />
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;

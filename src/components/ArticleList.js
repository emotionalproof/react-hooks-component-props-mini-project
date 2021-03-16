import React from 'react'
import Article from './Article';

const ArticleList = ({articles}) => {
    return (
        <div>
            <main>
                {articles.map(article => 
                    <Article 
                        key={article.title} 
                        article={article}
                    />
                )}
            </main>
        </div>
    )
}

export default ArticleList

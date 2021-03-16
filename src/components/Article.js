import React from 'react'

const Article = (props) => {

    console.log(props)
    const readTime = () => {
        let display = ""
        if (props.article.minutes < 30) {
            let multiple = Math.ceil(props.article.minutes/5)
            for(let i = multiple; i > 0; i--) {
                display += "☕️"
            }
            display += `${props.article.minutes} min read`
        } else {
            let multiple = Math.ceil(props.article.minutes/10)
            for(let i = multiple; i > 0; i--) {
                display += "🍱"
            }
            display += `${props.article.minutes} min read`
        }

        return display
    }

    // const getDate = () => {
    //     // return props.article.date ? props.article.date : "January 1, 1970" 
    //     return props.article.date || "January 1, 1970" 
    // }

    return (
        <div>
            <h3>{props.article.title}</h3>
            <small>{props.article.date || "January 1, 1970"} {readTime()}</small>
            <p>{props.article.preview}</p>
        </div>
    )
}

export default Article

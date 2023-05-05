const FrontPage = (props) => {
    return (
        <article className={props.cName}>
            <div className='frontPageText'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </article>
    )
}

export default FrontPage;

//Developed in case of not being a landing page
// const Card =(props) => {
//     console.log("props", props)
//     const { Title, Year,imdbID, Type, Poster } = props
//     return (
//         <>
//                  <div className='card' key={imdbID}>
//                     <h2>{Title}</h2>
//                     <p>{Year}</p>
//                     <p>{imdbID}</p>
//                     <p>{Type}</p>
//                     <img  src={Poster}  alt="sadasfsd" />
//                 </div>
//         </>
//     )
// }

const Card =({item: { 
    Title, Year,imdbID, Type, Poster
 }, x=15}) => {
    const handleClick =(x) => {
        console.log('x',x)
        console.log('handleClick')
    }


   return (
        <>
            <div className='card' key={imdbID}>
            <h2>{Title}</h2>
            <p>{Year}</p>
            <p>{imdbID}</p>
            <p>{Type}</p>
            <img  src={Poster}  alt="sadasfsd" />
            <button onClick={() => handleClick(5)}>clik on mke</button>
            </div>
        </>
    )
}

export default Card;

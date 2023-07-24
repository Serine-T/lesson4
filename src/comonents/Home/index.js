import Card from "./Card";
import { Allapps  } from "./data";

const Home = () => {
    return (
        <>
        {
            Allapps.map((item ) => {
            return (
                // <Card
                //     key={imdbID} 
                //     title={Title}
                //     year={Year}
                //     imdbID={imdbID}
                //     Type={Type}
                //     Poster={Poster}
                //  />

                // <Card
                //     key={item.imdbID} 
                //     {...item}
                // />)

                <Card
                    key={item.imdbID} 
                    item={item}
                    k={15}
            />)
            })
        }

        </>
    )
}

export default Home;
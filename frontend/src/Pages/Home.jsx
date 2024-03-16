import Slideshow from "../Components/Slideshow"
import slide1 from "../assets/slide1.jpg"
const slides = [
    {slide1},
    {slide1},
    {slide1},
    {slide1}
]

export default function Home(){
    return(
        <main className="Home">
            <div className="max-w-lg">
                <Slideshow>
                    {slides.map((s,i) => (
                        <img src={s} key={i}/>
                    ))}
                </Slideshow>
            </div>
        </main>
    )
}
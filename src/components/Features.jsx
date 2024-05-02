import { Carousel } from "@material-tailwind/react";
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';

const Features = () => {
    return (
        <div className="my-16">
        <Carousel className="rounded-xl h-3/4 w-3/4 items-center m-auto my-5">
        <img
          src={one}
          alt="image 1"
          className="h-full w-full object-cover"
          />
        <img
          src={two}
          alt="image 2"
          className="h-full w-full object-cover"
          />
        <img
          src={three}
          alt="image 3"
          className="h-full w-full object-cover"
          />
        <img
          src={four} 
          alt="image 3"
          className="h-full w-full object-cover"
          />
      </Carousel>
          </div>
    );
};

export default Features;

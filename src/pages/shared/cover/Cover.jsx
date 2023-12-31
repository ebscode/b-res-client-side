
import { Parallax, Background } from 'react-parallax';

const Cover = ({title,img}) => {
    return (
        <div>
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
            <div className="hero h-[700px] bg-fixed" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      <p className="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
    </Parallax>

        </div>
    );
};
    
export default Cover;
import { NavLink } from 'react-router-dom';
import Woman from './../images/woman.png';

const Hero = () => {
    return (
        <section className='w-full h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden relative'>
           <div className='container mx-auto flex justify-around h-full'>
            <div className='flex flex-col justify-center'>
                <div className='items-center flex font-semibold uppercase'>
                    <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
                </div>
                <h1 className='text-[70px] leadind-[1.1] font-light mb-4'> AUTUMN SALE STYLISH<br />
                    <span className='font-semibold'>WOMEN</span>
                </h1>
                <NavLink to={'/'} className='self-start font-semibold border-b-2 border-primary uppercase'>
                    Discover More
                </NavLink>
            </div>
            <div className='hidden lg:block'>
                <img src={Woman} alt='woman' />
            </div>
           </div>
        </section>
    );
}

export default Hero;
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews] = useReviews();

    const navigate = useNavigate()


    return (
        <div className='px-4 pt-20 pb-24   md:px-2'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='text-left justify-center items-center '>
                    <h1 className='text-4xl font-semibold mx-7 mt-10'>Live life, Take pictures, Relive the memories, Repeat.</h1>
                    <p className='my-10 ml-7'>The days, months, and years eventually reveal, like a Polaroid, a clear picture of how significant events and decisions ultimately shape our lives</p>
                    <button className=" ml-7 rounded-3xl 
                    my-9 py-2 w-3/12 bg-sky-900 text-white hover:bg-cyan-700">
                    <a href='https://instax.com/' target='_blank' rel='noreferrer'> Explore</a>
                    </button>

                </div>
                <div>
                    <img className='w-120 h-96' src="https://i.ibb.co/99qL5sQ/polaroid.jpg" alt="" />
                </div>
            </div>
            <div className='mt-14  '>
                <h1 className='text-center  text-4xl pt-14'>Customer Reviews</h1>
                <div className='grid grid-cols-3  gap-4'>
                    {
                        reviews.slice(0, 3).map(review => <ReviewCard key={review.id} review={review} ></ReviewCard>)
                    }
                </div>

                <button className="text-center text-white rounded-3xl mt-14 py-2  w-3/12  bg-sky-900 hover:bg-cyan-700" onClick={() => navigate('./reviews')}>See All Reviews</button>

            </div>
        </div>

    );
};

export default Home;
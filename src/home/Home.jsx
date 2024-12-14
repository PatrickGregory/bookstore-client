import React from 'react'
import Banner from '../components/banner';
import BestSellingBook from './BestSellingBook';
import FavouriteBooks from './FavouriteBooks';
import PromoBanner from './PromoBanner';
import Otherbooks from './Otherbooks';
import Review from './Review';

function Home() {
  return (
    <div>
      <Banner/>
      <BestSellingBook/>
      <FavouriteBooks/>
      <PromoBanner/>
      <Otherbooks/>
      <Review/>
    </div>
  )
}

export default Home;
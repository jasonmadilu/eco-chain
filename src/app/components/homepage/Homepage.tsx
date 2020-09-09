import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';
import { CardContainer } from './CardContainer'
import MoreInfo from './MoreInfo';
import imageDefault from '../../assets/blackscreen.jpg';


const items = [
  {
    src: { imageDefault },
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: { imageDefault },
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: { imageDefault },
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex:  React.SetStateAction<number>) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={ imageDefault }
      >
        <img src={ imageDefault } alt={item.altText} width="100%" height="350"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <div className="content-table">
        <CardContainer/>
      </div>
      <div>
        <MoreInfo />
      </div>
    </Container>
  );
}

export default Homepage;
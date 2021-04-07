import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      {/* here we passing in title to the component PageHero  */}
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            doloribus laborum. Saepe autem a minima nihil ab et optio porro
            voluptatibus. Dolore quae accusamus blanditiis a excepturi et veniam
            repudiandae! Aspernatur distinctio dolores nam fuga quasi vitae
            repudiandae veritatis enim consequuntur, tempora recusandae! Ullam
            ab accusantium recusandae cum inventore nobis alias reprehenderit
            aliquid eius aut iste aspernatur, maxime, perferendis minima?
            Pariatur dolorum animi officia impedit perferendis numquam
            perspiciatis laboriosam cum quod reprehenderit eveniet, delectus
            incidunt quasi quam vitae, ex sint eos minima et, iste odio error
            recusandae? Facere, adipisci consequuntur?
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
